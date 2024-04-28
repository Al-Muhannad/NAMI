import { Text, FlatList, SafeAreaView ,TouchableOpacity,Image,View,ScrollView,RefreshControl} from 'react-native';
import { Pdata } from "../Functions/data"
import {styles} from '../Style/Style';
import { EOFNearby } from '../Functions/Functions';
import { FontAwesome6 } from '@expo/vector-icons';
import { moderateScale } from '../Style/Metrics';
import {AddPlant,GetEnvData,RetriveNearby} from '../Functions/Functions'
import React from 'react';
const Nearby = (props) => {
  const NewGard="There is no NAMI's users nearby you !!!\n☹️"
  const [Nearby, setNearby] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [EnvData, setEnvData] = React.useState(null);

  React.useEffect(()=>{
    (async () => {
      if(Nearby==null||refreshing){
      let y= await GetEnvData(props.route.params.latitude,props.route.params.longitude)
      setEnvData(y.City)
       let x= await RetriveNearby(y.City,props.route.params.Email)
       setNearby(x);
     }
      })()
})
const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, []);

  const renderItem = (Item) => (

    <SafeAreaView style={styles.NEOFcard}>
      <View style={styles.NEOFcardNameCon}>
      <Text style={styles.NEOFcardName}>{Item.item.PlantName}</Text>
      </View>
      <View style={styles.NEOFcardDetCON}>
        <View style={styles.NEOFcardDetIMG}>
        <Image style={{ width: '100%',height: '100%',borderTopRightRadius: moderateScale(20),}} source={{uri: 'https://res.cloudinary.com/namisa/image/upload/v1707991165/'+Item.item.PlantName,}}/>
        </View>
      <View style={styles.NEOFcardDet}>
      <Text style={styles.NEOFcardEOF}>{EOFNearby(Item.item.EOF)}</Text>
      <Text style={styles.NEOFcardEOF}>💧<Text style={styles.NEOFcardWat}>x{Item.item.WTR}</Text></Text>
      <TouchableOpacity onPress={async()=> await AddPlant(props.route.params.UID,Item.item.PlantName,EnvData,Item.item.EOF,Item.item.WTR).then(props.navigation.navigate('Home',{ UID: props.route.params.UID, UserName: props.route.params.UserName, IMG: props.route.params.IMG, Email: props.route.params.Email, City: props.route.params.City, Temperature: props.route.params.Temperature, Humidity: props.route.params.Humidity}))}>
      <FontAwesome6 name="add" size={moderateScale(24)} color='#e6f8d5'/>
      </TouchableOpacity>
      </View>
      </View>
   
    </SafeAreaView>

  );

  

  if(Nearby==0){
    return (<>
      <SafeAreaView style={styles.headerView}>
        <Text style={styles.header}>Nearby Gardens</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.container} >
      <ScrollView  refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> } contentContainerStyle={styles.container} >
        <Text style={styles.MSG}>{NewGard}</Text>
      </ScrollView>
    </SafeAreaView>
    </>
    );
   }else{
    return (<>
      <SafeAreaView style={styles.headerView}>
        <Text style={styles.header}>Nearby Gardens</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Nearby}
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

export default Nearby;