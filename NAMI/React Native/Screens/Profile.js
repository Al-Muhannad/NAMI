import { Text, View,TouchableOpacity,RefreshControl,SafeAreaView,Image,ScrollView } from 'react-native';
import {styles,SecColor,MainColor} from '../Style/Style';
import { MaterialCommunityIcons,FontAwesome5,FontAwesome6 } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../Functions/FirebaseConfig';
import * as Scale  from '../Style/Metrics';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = (props) => {
const name=props.route.params.UserName
const Avatar=props.route.params.IMG
const [Loading,SetLoading]=React.useState(null)
const [City,SetCity]=React.useState('La La Land')
const [Humidity,SetHumidity]=React.useState(0)
const [Temperature,SetTemperature]=React.useState(0)
const [refreshing, setRefreshing] = React.useState(false);
React.useEffect(() => {
    (async () => {
    if(Loading==null){
       await load()
    }})()
}, [])

const load = async () => {
    AsyncStorage.getItem('@EnvData').then(async result => {
        if (result !== null) {
            let x = await AsyncStorage.getItem('@EnvData')
            let y = JSON.parse(x)
            SetLoading(y)
            SetCity(y.City)
            SetHumidity(y.Humidity)
            SetTemperature(y.Temperature)
        } else {
            console.log('error')
            SetLoading(null)
        }
    })

}

      async function logOut(){
        try {
           // await AsyncStorage.removeItem("@loc");
           await AsyncStorage.removeItem('@EnvData')
           await AsyncStorage.removeItem('@PrimaryData')
           await signOut(auth)
           .then(() => props.navigation.navigate('App'))
         
       }
       catch(error) {
           console.log(error);
       }
    }
    
    return (
        <>
         <SafeAreaView style={styles.headerView} >
                <Text style={styles.header}>My Profile</Text>
                <View style={styles.logout}>
                    <TouchableOpacity  onPress={()=>logOut()}>
                        <View><FontAwesome5 name="sign-out-alt" size={40} color={SecColor} style={{alignSelf:'center',}}/></View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.ProfileContainer}>
                <View >
                    <View>
                    <Image style={styles.ProImg} source={{ uri: Avatar }}></Image>
                    <Text style={styles.UserName}>{name}</Text>
                </View>
                
                </View>
               
                <View style={styles.SProCon}>
                    <Text style={styles.ProConHeader}>Environmental Data</Text>
                    <View style={styles.ProConEle}>
                       <View style={{backgroundColor:MainColor,borderRadius:50,padding:5}}><MaterialCommunityIcons  name="map" size={Scale.moderateScale(30)} color={SecColor} style={{alignSelf:'center',}} /></View>
                       <Text style={styles.ProConName}>{City}</Text>
                    </View>
                    <View style={styles.ProConEle}>
                       <View style={{backgroundColor:MainColor,borderRadius:50,padding:5,width:Scale.horizontalScale(38)}}><FontAwesome6  name="temperature-half" size={Scale.moderateScale(30)} color={SecColor} style={{alignSelf:'center',}} /></View>
                       <Text style={styles.ProConName}>{Temperature} ℃</Text>
                    </View>
                    <View style={styles.ProConEle}>
                       <View style={{backgroundColor:MainColor,borderRadius:50,padding:5,}}><MaterialCommunityIcons  name="water-percent" size={Scale.moderateScale(30)} color={SecColor} style={{alignSelf:'center',}} /></View>
                       <Text style={styles.ProConName}>%{Humidity}</Text>
                    </View>
                </View>
                <View style={styles.ProCon}>
                    <Text style={styles.ProConHeader}>Help</Text>
                    <TouchableOpacity style={styles.ProConEle} onPress={()=> props.navigation.navigate("Contact")}>
                       <View style={{backgroundColor:MainColor,borderRadius:50,padding:5,}}><MaterialCommunityIcons  name="mail" size={Scale.moderateScale(30)} color={SecColor} style={{alignSelf:'center',}} /></View>
                       <Text style={styles.ProConName}>Contact us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ProConEle} onPress={()=> props.navigation.navigate("AboutNami")}>
                       <View style={{backgroundColor:MainColor,borderRadius:50,padding:5,}}><MaterialCommunityIcons  name="seed" size={Scale.moderateScale(30)} color={SecColor} style={{alignSelf:'center',}} /></View>
                       <Text style={styles.ProConName}>About NAMI</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

/*


*/
export default Profile;