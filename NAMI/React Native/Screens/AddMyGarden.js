import { Text,FlatList,SafeAreaView,TouchableOpacity,Image,View } from 'react-native';
import { getPrediction,EOF,Watring } from '../Functions/Functions';
import { useEffect, useState } from 'react';
import FlipCard from 'react-native-flip-card'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles,MainColor,SecColor} from '../Style/Style';
import {AddPlant} from '../Functions/Functions'
const AddMyGarden = (props) => {
  const [Plants,setPlants]=useState(null)
  const city=props.route.params.City
  const Temp = props.route.params.Temperature
  const hum= props.route.params.Humidity
  useEffect(()=>{
    (async () => {
        if(Plants==null){
            x= await getPrediction(city, Temp,hum)
            setPlants(x.plants)
        }
      })()
})
  

renderItem = (Item) => {
  return (
    <FlipCard 
    style={styles.card}
    friction={3}
    perspective={1000}
    flipHorizontal={true}
    flipVertical={false}
    flip={false}
    clickable={true}
    //onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
  >
    {/* Face Side */}
    <SafeAreaView style={styles.face}>
    <Image
          style={styles.ADDPIMG}
          source={{
            uri: 'https://res.cloudinary.com/namisa/image/upload/v1707991165/'+Item.item.plant_name,
          }}
        />
         <Text style={styles.ADDPNAME}>{Item.item.plant_name}</Text>
    </SafeAreaView>
    {/* Back Side */}
    <View style={styles.back}>
        <Text style ={styles.flipPc}>{Item.item.pros},{Item.item.cons}</Text>
        <View style = {styles.flipWt}>
        <View style={{flex:1,justifyContent:"space-evenly"}}>
        <Text style = {styles.flipWtXT}>Ease of Farming </Text>
        <Text style = {styles.flipWtXT} >{Watring(Item.item.watering)}</Text>
        </View>
        <View style={{flex:1,justifyContent:"space-evenly"}}>
        <Text style = {styles.flipWtXT}>Wataring </Text>
        <Text style = {styles.flipWtXT}>{EOF(Item.item.ease_of_farming)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.ADDPButton} onPress={async()=> await AddPlant(props.route.params.UID,Item.item.plant_name,city,Item.item.ease_of_farming,Item.item.watering).then(props.navigation.navigate('MyTab',{ UID: props.route.params.UID, UserName: props.route.params.UserName, IMG: props.route.params.IMG, Email: props.route.params.Email, City: props.route.params.City, Temperature: props.route.params.Temperature, Humidity: props.route.params.Humidity}))}>
          <MaterialCommunityIcons  name="shovel" size={30} color={SecColor} style={{alignSelf:'center',}}/>
          <Text style={styles.ADDPButtonText}>Press to add it to your garden</Text>
        </TouchableOpacity>
    </View>
  </FlipCard>
  )
}
 
  return (<>
  <SafeAreaView style={styles.StackHeaderView}>
      <Text style={styles.StackHeader}>Plant Suggestions</Text>
    </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Plants}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  </>
  );
}

export default AddMyGarden;