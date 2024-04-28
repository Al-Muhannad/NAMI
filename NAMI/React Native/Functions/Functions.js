import { doc, getDoc, collection, updateDoc, Timestamp, arrayUnion, setDoc, arrayRemove, query, getDocs, where, deleteDoc } from "firebase/firestore/lite";
import { db } from './FirebaseConfig';

function CityEncoder(name) {
  var x = ["Abqaiq Governorate", "Abha", "Abu `Arish", "Afif", "Ahad Al Masarihah", "Ahad Rufaydah", "Al Aridah", "Al Aflaj", "Al Aqiq", "Al-Hofuf", "Al Aydabi", "Al Asyah", "Al Badai", "Al Bahah", "Al Bukayriyah", "Ad Darb", "Ad Duwadimi", "Al ddayer", "Ad Diriyah", "Al Ghat", "Al Ghazalah", "Al Qunfudhah", "Farat Ghamid Az Zinad", "Al Hinakiyah", "Al Hariq", "Al Harth", "Al Jumum", "Al Jubayl", "Al Kamil", "Al Khafji", "As Sayh", "Sharurah", "Al Khubar", "Al Khurmah", "Medina", "Al Mahd", "Al Majardah", "Al Majmaah", "Bani Hasan", "Al Mandaq", "Al Midhnab", "Al Muzahimiyah", "An Nimas", "Al Nuayriyah Governorate", "Al Ula", "Al Qatif Governorate", "Al Quwayiyah", "Al Qurayyat", "Ar Rayth", "Ar Rass", "Al Malaz", "Ash Shinan", "Ash Shimasiyah", "Al Taif", "Al Wajh", "Az Zulfi", "Al Lith", "Umluj", "Ar`ar", "Badr", "Badr Al Janub", "Baqa", "Baysh", "Balqarn", "Bishah", "Biljurashi", "Buraydah", "Zahran Al Janub", "Damad", "Dammam", "Duruma", "Governorate of Duba", "Dawamat Al Jandal", "Farasan", "Qilwah", "Qaryah Al Ulya Governorate", "Hubuna", "Hafar Al-Batin", "Haqil", "Ha'il", "Huraymila", "Hawtat Bani Tamim", "Jizan", "Governorate of Jidda", "Khubash", "Khaybar", "Khamis Mushayt", "Khulays", "Muhayil", "Makkah Al Mukarramah", "Najran", "Unaizah", "Uyun Al Jiwa", "Rabigh", "Rafha", "Ranyah", "Ras Tannurah Governorate", "Rijal Al Ma", "Riyadh Al Khabra", "Riyadh governorate", "Rumah", "Sakaka", "Samtah", "Shaqra", "Sharurah", "Sarat Abidah", "Tabuk", "Tayma", "Turayf", "Tathlith", "Thadiq", "Thar", "Turubah", "Yanbu", "Yadamah", "Wadi Ad Dawasir"]
  var Index = x.indexOf(name) + 1
  return Index
}

export async function getPrediction(CityName, Temp, Hum) {
  const City = CityEncoder(CityName)
  let D = new Date()
  const Month = D.getMonth() + 1

  const Pred = await fetch("https://nami-api.onrender.com/", {
    method: "POST",
    body: JSON.stringify({
      "City": City,
      "Month": Month,
      "Temperature": Temp,
      "Humidity": Hum
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then((response) => response.json())
    .then((json) => json);

  return Pred
}

export async function RetriveGarden(UID) {
  const col = collection(db, "Users")
  const docSnap = await getDoc(doc(col, UID))
  if (docSnap.exists()) {
    return docSnap.data().Garden
  }
}

export async function AddPlant(UID, plantName,City,EOF,WTR) {
  const col = collection(db, "Users")
  await updateDoc(doc(col, UID), {
    Garden: arrayUnion({
      PlantName: plantName,
      CreatedDate: Timestamp.fromDate(new Date()),
      City: City,
      EOF: EOF,
      WTR:WTR,
    })
  }).then(() => {
    console.log('Data Submission Successfully')
  }).catch((err) => {
    console.log(err)
  });
}

export async function IsUser(uid, email, displayName) {
  const col = collection(db, "Users")
  const docSnap = await getDoc(doc(col, uid))
  if (!docSnap.exists()) {
    await setDoc(doc(col, uid), {
      Email: email,
      Garden: [],
      UserName: displayName
    }).then(() => {
      console.log('Data Submission Successfully')
    }).catch((err) => {
      console.log(err)
    })
  }
}

export async function DeletePlant(UID, plantName, CreatedDate,City,EOF,WTR) {
  const col = collection(db, "Users")
  await updateDoc(doc(col, UID), {
    Garden: arrayRemove({
      PlantName: plantName,
      CreatedDate: CreatedDate,
      City: City,
      EOF: EOF,
      WTR:WTR,
    })
  }).then(() => {
    console.log('Data Deleted Successfully')
  }).catch((err) => {
    console.log(err)
  });
}

export async function GetEnvData(lat, long) {
  const API_KEY = "44a5d190b3193a86288e7ec6231a2fc1";
  const WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  const CityAPI = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  const Wresponse = await fetch(WeatherAPI);
  const Cresponse = await fetch(CityAPI);
  if (Wresponse.status == 200 && Cresponse.status == 200) {
    const Wdata = await Wresponse.json();
    const Cdata = await Cresponse.json();
    let data = { City: Cdata[0].name, Humidity: Wdata.main.humidity, Temperature: Wdata.main.temp }
    //await AsyncStorage.setItem("@loc", JSON.stringify(data));
    return (data);
  } else {
    return (null);
  }

}

export function EOF(EOF) {
  if (EOF === 1) {
    return '🟢⚪️⚪️'
  } else if (EOF === 2) {
    return '🟢🟠⚪️'
  } else if (EOF === 3) {
    return '🟢🟠🔴'
  }
}

export function Watring(Watring) {
  var w = '';

  for (i = Watring; i > 0; i--) {
    w = w + '💧'
  }
  return w
}

export function EOFNearby(EOF) {
  if (EOF == 1) {
    return 'E'
  } else if (EOF == 2) {
    return 'M'
  } else if (EOF == 3) {
    return 'H'
  }
}
export async function RetriveNearby(City,email){
  const col = collection(db, "Users")
  const Que = query(col, where('Email', '!=', email))
  const docSnap = await getDocs(Que);
  const fieldValues = [];
  docSnap.forEach((doc) => {
    const data = doc.data();
    if (data) {
      fieldValues.push(data["Garden"]);
    }
  });
  const flattenedData = fieldValues.reduce((acc, innerArray) => {
    return [...acc, ...innerArray];
  }, []);
  const filteredArray = flattenedData.filter(obj => obj.City === City);
  const uniqueData = filteredArray.filter((obj, index) =>!filteredArray.slice(0, index).some(prevObj => prevObj.PlantName === obj.PlantName));
  return uniqueData
}

//Admin Side Functions
export async function GetNumUsers() {
  const col = collection(db, "Users")
  const Que = query(col)
  const docSnap = await getDocs(Que);
  return docSnap.size

}

export async function GetNumPlants() {
  const col = collection(db, "Users")
  const Que = query(col, where('Garden', '!=', []))
  const docSnap = await getDocs(Que);
  const fieldValues = [];
  docSnap.forEach((doc) => {
    const data = doc.data();
    if (data) {
      fieldValues.push(data["Garden"]);
    }
  });

  const flattenedData = fieldValues.reduce((acc, innerArray) => {
    return [...acc, ...innerArray];
  }, []);
  return flattenedData.length

}

export async function ListUsers() {
  const col = collection(db, "Users")
  const Que = query(col, where('UserName', '!=', 'nami'))
  const docSnap = await getDocs(Que);
  const fieldValues = [];
  docSnap.forEach((doc) => {
    const data = doc.data();
    if (data) {
      fieldValues.push(data["Email"]);
    }
  });

  return fieldValues

}

export async function DeleteUser(Email) {
  const col = collection(db, "Users")
  const Que = query(col, where('Email', '==', Email))
  const docSnap = await getDocs(Que);
  docSnap.forEach((doc) => {
    deleteDoc(doc.ref);
  });


}

export async function GetOccurPlants() {
  const col = collection(db, "Users")
  const Que = query(col, where('Garden', '!=', []))
  const docSnap = await getDocs(Que);
  const fieldValues = [];
  docSnap.forEach((doc) => {
    const data = doc.data();
    if (data) {
      fieldValues.push(data["Garden"]);
    }
  });

  const flattenedData = fieldValues.reduce((acc, innerArray) => {
    return [...acc, ...innerArray];
  }, []);

  let counts ={};

  flattenedData.forEach(obj => {
    counts[obj.PlantName] = (counts[obj.PlantName] || 0) + 1;
  });
  const restructuredArray = Object.entries(counts).map(([name, count]) => ({
    name,
    count
  }));
  
  return restructuredArray

}
