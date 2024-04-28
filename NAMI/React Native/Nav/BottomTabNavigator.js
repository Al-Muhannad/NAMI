import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Nearby from "../Screens/Nearby";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { SecColor,MainColor } from "../Style/Style";
import { useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Tabs = AnimatedTabBarNavigator();




function MyTabs(props) {
const [Data,SetData]=useState(null)
useEffect(()=>{
  (async () => {
    if(Data==null){
      x= await AsyncStorage.getItem('@PrimaryData')
      SetData(JSON.parse(x));
   }
    })()
})

  return (
    
    <Tabs.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: SecColor, inactiveTintColor: MainColor, activeBackgroundColor: MainColor }} appearance={{dotCornerRadius: 100, /*floating:"true",*/tabBarBackground: SecColor}}>
      <Tabs.Screen initialParams={Data?Data:props.route.params} name="Home" component={Home} options={{ tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons name="grass" size={30} color={color} focused={focused} />) }} />
      <Tabs.Screen  initialParams={Data?Data:props.route.params} name="Nearby" component={Nearby} options={{ tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons name="human-greeting" size={30} color={color} focused={focused} />) }} />
      <Tabs.Screen initialParams={Data?Data:props.route.params} name="Profile" component={Profile} options={{ tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons name="account" size={30} color={color} focused={focused} />) }} />
    </Tabs.Navigator>
  );
}
export default MyTabs;