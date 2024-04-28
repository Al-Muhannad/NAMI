import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {styles,SecColor,MainColor} from '../Style/Style';
import { MaterialIcons, FontAwesome6,FontAwesome } from '@expo/vector-icons';
import { moderateScale } from '../Style/Metrics';
import { IsUser } from '../Functions/Functions';
import { Linking } from 'react-native';
import { useState } from 'react';
import * as Location from "expo-location";
import AsyncStorage from '@react-native-async-storage/async-storage';
const txt1 = "Offering personalized plant suggestions based on your local climate, this app uses your location with machine learning."
const txt2 = "Analyze data from nearby users alongside your location to recommend plants that suitable in your area."
export default function LocPermission(props) {
    const [location, setLocation] = useState(null);
    let data = '';
    async function getLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        await IsUser(props.route.params.uid,props.route.params.email,props.route.params.displayName);
        return Linking.openSettings();
      } else {
        let x = await Location.getCurrentPositionAsync({});
        await AsyncStorage.setItem("@PrimaryData", JSON.stringify({ UID: props.route.params.uid, UserName: props.route.params.displayName, IMG: props.route.params.photoURL, Email: props.route.params.email, latitude:x.coords.latitude,longitude:x.coords.longitude}) );
        let UserLocation = {latitude:x.coords.latitude,longitude:x.coords.longitude}
        await IsUser(props.route.params.uid,props.route.params.email,props.route.params.displayName);
        setLocation(UserLocation)
      }
    }
    if (location) {
        data = { UID: props.route.params.uid, UserName: props.route.params.displayName, IMG: props.route.params.photoURL, Email: props.route.params.email, longitude: location.longitude, latitude: location.latitude};
      }
   
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.TITASUB}>
                <Text style={styles.TitlePer}>Location permission</Text>
                <Text style={styles.SubTitle}>NAMI will used your location to:</Text>
            </View>
            <View style={styles.TWOITEMS}>
                <View style={styles.RECOM}>
                    <View style={styles.ICONRECOM}><FontAwesome6 name="location-crosshairs" size={moderateScale(52)} color={MainColor} style={{alignSelf:'center',}}/></View>
                    <Text style = {styles.TXTRECOM}>{txt1}</Text>
                </View>
                <View style={styles.RECOM}>
                    <View style = {styles.ICONRECOM}><MaterialIcons name="location-pin" size={moderateScale(52)} color={MainColor} style={{alignSelf:'center'}}/></View>
                    <Text style = {styles.TXTRECOM}>{txt2}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style = {styles.CONTINUECLC} onPress={location? async()=> await getLocation().then(props.navigation.navigate('MyTab',data)):async()=> await getLocation()}>
                    <Text style = {styles.CONTINUET}>Continue</Text>
                    <FontAwesome name="arrow-circle-right" size={moderateScale(40)} color={MainColor} style={{alignSelf:'center'}} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}