import { Text, SafeAreaView , TouchableOpacity,FlatList,RefreshControl,ScrollView,Image,View} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../Style/Style';
import { moderateScale } from '../Style/Metrics';
import {RetriveGarden,DeletePlant,GetEnvData} from '../Functions/Functions'
const numColumns = 2;
export default function Home(props) {
  const NewGard="You did’t have any plant in your garden !!!\n☹️"
  const [Garden, setGarden] = React.useState(null);
  const [EnvData, setEnvData] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  React.useEffect(()=>{
    (async () => {
      if(Garden==null||refreshing){
       let x= await RetriveGarden(props.route.params.UID)
       let y= await GetEnvData(props.route.params.latitude,props.route.params.longitude)
        setGarden(x)
        setEnvData(y)
        await AsyncStorage.setItem('@EnvData',JSON.stringify(y))
     }
      })()
})
const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, []);

const renderItem = (x) => {
  return (
    <View style={styles.MYGardCardDetails}>
      <Image style={styles.MYGardCardImg} source={{ uri: 'https://res.cloudinary.com/namisa/image/upload/v1707991165/' + x.item.PlantName }} />
      <SafeAreaView style={styles.MYGardCardDetails}>
        <Text style={styles.MYGardCardName}>{x.item.PlantName}</Text>
      </SafeAreaView>
      <View>
      <TouchableOpacity onPress={async()=>await DeletePlant(props.route.params.UID,x.item.PlantName,x.item.CreatedDate,x.item.City,x.item.EOF,x.item.WTR)}>
      <View>
      <MaterialCommunityIcons style={styles.MYGardCardIcon} name="delete-forever" size={moderateScale(35)} color="rgba(255, 0, 0,0.75)" />
      </View>
      </TouchableOpacity>
    </View></View>
  )
}


 if(Garden==0){
  return (
    <>
    <SafeAreaView style={styles.headerView} >
    <Text style={styles.header}>My Garden</Text>
    <TouchableOpacity style={styles.Button} onPress={()=> props.navigation.navigate("ListP",{ UID: props.route.params.UID, UserName: props.route.params.UserName, IMG: props.route.params.IMG, Email: props.route.params.Email, City: EnvData.City, Temperature: EnvData.Temperature, Humidity: EnvData.Humidity})}>
      <Text style={styles.Buttontext}>+</Text>
     </TouchableOpacity>
    </SafeAreaView>
    <SafeAreaView style={styles.container} >
      <ScrollView  refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> } contentContainerStyle={styles.container} >
        <Text style={styles.MSG}>{NewGard}</Text>
      </ScrollView>
    </SafeAreaView>
    </>
  );
 }else{
  return (
    <>
    <SafeAreaView style={styles.headerView}>
    <Text style={styles.header}>My Garden</Text>
      <TouchableOpacity style={styles.Button} onPress={()=> props.navigation.navigate("ListP",{ UID: props.route.params.UID, UserName: props.route.params.UserName, IMG: props.route.params.IMG, Email: props.route.params.Email, City: EnvData.City, Temperature: EnvData.Temperature, Humidity: EnvData.Humidity})}>
      <Text style={styles.Buttontext}>+</Text>
     </TouchableOpacity>
    </SafeAreaView>
    <SafeAreaView style={styles.container}>
    <FlatList
        data={Garden}
        numColumns={numColumns}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
    </>
  );
 }
   
  


  
}