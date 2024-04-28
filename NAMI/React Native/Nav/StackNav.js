import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddmyGarden from "../Screens/AddMyGarden"
import MyTab from "./BottomTabNavigator";
import Plant from "../Screens/Plant";
import Contact from "../Screens/ContactUS"
import AboutNami from '../Screens/AboutNami';
import App from '../App';
import { SecColor,MainColor } from '../Style/Style';
import LocPermission from '../Screens/LocPermission';
import Loading from '../Functions/Loading';
import Admin from '../Screens/Admin';
import UserList from '../Screens/UserList';
import PlantList from '../Screens/PlantList';
const STACK = createNativeStackNavigator();

const Stack = (props) => {
    if(props.data.uid==''/*'ID Remove For Security Propuse'*/){
        return ( 
            <STACK.Navigator initialRouteName="Admin" /*</NavigationContainer>screenOptions={{headerShown:false}}*/screenOptions={{ presentation: 'modal' , headerShown:false}} >
            <STACK.Screen initialParams={props.data} options={{presentation: 'fullScreenModal',headerShown: false}} name="Admin" component={Admin} />
            <STACK.Screen options={{presentation: 'fullScreenModal',headerShown: false}} name="App" component={App} />
            <STACK.Screen options={{headerShown: false }} name="UserList" component={UserList} />
            <STACK.Screen options={{headerShown: false }} name="PlantList" component={PlantList} />
            </STACK.Navigator>
     );
       }else{
    return ( 
            <STACK.Navigator initialRouteName="Loading" /*</NavigationContainer>screenOptions={{headerShown:false}}*/screenOptions={{ presentation: 'modal' , headerShown:false}} >
            <STACK.Screen initialParams={props.data} options={{presentation: 'fullScreenModal',headerShown: false}} name="LocPermission" component={LocPermission} />
            <STACK.Screen initialParams={props.data} options={{presentation: 'fullScreenModal',headerShown: false}} name="Loading" component={Loading} />
            <STACK.Screen  options={{presentation: 'fullScreenModal',headerShown: false}} name="MyTab" component={MyTab} />
            <STACK.Screen options={{headerShown: false}} name="ListP" component={AddmyGarden} />
            <STACK.Screen options={{headerShown: true ,headerTitle: "Contact us",headerStyle:{backgroundColor:SecColor},headerTitleStyle:{fontWeight:'bold',color:MainColor}  }} name="Contact" component={Contact} />
            <STACK.Screen options={{headerShown: false }} name="Plant" component={Plant} />
            <STACK.Screen options={{headerShown: false}} name="AboutNami" component={AboutNami} />
            <STACK.Screen options={{presentation: 'fullScreenModal',headerShown: false}} name="App" component={App} />
            </STACK.Navigator>
     );}
}

export default Stack