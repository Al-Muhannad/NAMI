import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,Image } from 'react-native';
import { MainColor, SecColor, styles } from '../Style/Style';
import { signOut } from 'firebase/auth';
import { moderateScale } from '../Style/Metrics';
import { auth } from '../Functions/FirebaseConfig';
import { GetNumPlants, GetNumUsers, GetOccurPlants, ListUsers } from '../Functions/Functions';
import { AntDesign , Feather , FontAwesome5 , Ionicons} from '@expo/vector-icons';

const Admin = (props) => {
  const [UserNum, setUserNum] = React.useState(0);
  const [PlantNum, setPlantNum] = React.useState(0);
  React.useEffect(() => {
    (async () => {
      if (UserNum == 0) {
        let x = await GetNumUsers()
        let y = await GetNumPlants()
        setUserNum(x);
        setPlantNum(y)
      }
    })()
  })
  async function logOut() {
    try {
      await signOut(auth)
        .then(() => props.navigation.navigate('App'))

    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <SafeAreaView style={styles.headerView} >
        <View style={styles.logout}>
          <TouchableOpacity onPress={() => logOut()}>
            <View><FontAwesome5 name="sign-out-alt" size={moderateScale(40)} color={SecColor} style={{ alignSelf: 'center', }} /></View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
      <Image source={{ uri: 'https://i.ibb.co/v4LrPFr/Nami.png' }} style={styles.NamiLogo}/>
      <Text style={styles.ADMN}>Dashboard     </Text>
        <View style = {styles.DASHUPITM}>
          <View style = {styles.NUMOFUSR}>
          <Feather name="users" size={moderateScale(40)} color={MainColor} style={{alignSelf:'center' , shadowColor: 'black' , shadowOpacity: 0.20}}/>
        <Text style = {styles.NUMOFUSRTXT}>{UserNum} </Text>
        <Text style = {styles.USRDIS}>The number of the users who using NAMI</Text>
        </View>
        <View style = {styles.NUMOFPLNT}>
        <FontAwesome5 name="seedling" size={moderateScale(40)} color={MainColor} style={{alignSelf:'center', shadowColor: 'black' , shadowOpacity: 0.20}} />
        <Text style = {styles.NUMOFUSRTXT}>{PlantNum} </Text>
        <Text style = {styles.USRDIS}>The number of the added plants in NAMI</Text>
        </View>
        <View style = {styles.PLNTAVG}>
        <Ionicons name="analytics-outline" size={moderateScale(45)} color={MainColor} style={{alignSelf:'center', shadowColor: 'black' , shadowOpacity: 0.20}} />
        <Text style = {styles.NUMOFUSRTXT}>{(PlantNum / UserNum).toFixed(2)} </Text>
        <Text style = {styles.USRDIS}>The average added plants per user in NAMI</Text>
        </View>
        </View>

        <View style = {styles.DASHUPITM}>
        <TouchableOpacity style = {styles.CARD1} onPress={() => props.navigation.navigate('UserList')}>
        <Feather name="user" size={moderateScale(40)} color={MainColor} style={{alignSelf:'center' , shadowColor: 'black' , shadowOpacity: 0.20}}/>
          <Text style = {styles.CRDTXT}>Users Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.CARD2} onPress={() => props.navigation.navigate('PlantList')}>
        <Feather name="list" size={moderateScale(40)} color={MainColor} style={{alignSelf:'center' , shadowColor: 'black' , shadowOpacity: 0.20}} />
          <Text style = {styles.CRDTXT}>Plants frequency list</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );

};
export default Admin;