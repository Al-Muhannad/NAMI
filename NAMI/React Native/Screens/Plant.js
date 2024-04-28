import { Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles,MainColor} from '../Style/Style';
import {AddPlant} from '../Functions/Functions'
export default function Plant(props) {
  const t = 'It is a root vegetable, They contain \n antioxidants, which may help protect \n your cells from damage.'
  return (
    <>
      <SafeAreaView style={styles.Plantcontainer}>
        
        <Image
          style={styles.CardPhoto}
          source={{
            uri: 'https://res.cloudinary.com/namisa/image/upload/v1707991165/'+props.route.params.plantName
          }}
        />
        <View style={styles.PlantNameCon}>
        <Text style={styles.PlantName}>{props.route.params.plantName}</Text>
        </View>
        <View style={styles.TXTASHP}>
          <View style={styles.TxtCon}>
            <Text style={styles.txt}>{props.route.params.pros+',\n'+props.route.params.cons}</Text>
          </View>

          <View style={styles.EOFAW}>

            <View style={styles.EOFAWPC}>
              <Text style={styles.EOFAWText}>Ease of farming</Text>
              <View style={styles.EOFAWS}>
              <Text style={styles.NUMOW}>{props.route.params.ease_of_farming}</Text>
                <Text style={styles.PW}>of 3</Text>
              </View>
            </View>

            <View style={styles.EOFAWPC}>
              <Text style={styles.EOFAWText}>Watering</Text>
              <View style={styles.EOFAWS}>
                <Text style={styles.NUMOW}>{props.route.params.watering}</Text>
                <Text style={styles.PW}>   per week</Text>
              </View>
            </View>
          </View>
        </View>
        
        <TouchableOpacity style={styles.ADDBTN} onPress={async()=> await AddPlant(props.route.params.UID,props.route.params.plantName).then(props.navigation.navigate('MyTab',{ UID: props.route.params.UID, UserName: props.route.params.UserName, IMG: props.route.params.IMG, Email: props.route.params.Email, City: props.route.params.City, Temperature: props.route.params.Temperature, Humidity: props.route.params.Humidity}))}>
          <MaterialCommunityIcons  name="shovel" size={45} color={MainColor} style={{alignSelf:'center',}}/>
          <Text style={styles.PRSTEXT}>Press to add it to you garden</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </>
  );
}

