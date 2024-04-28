import { SafeAreaView, Text, TouchableOpacity,Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {styles,SecColor,MainColor} from "../Style/Style";
export default function SignInScreen({ promptAsync }) {

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: 'https://i.ibb.co/v4LrPFr/Nami.png' }} style={styles.NamiLogo}/>
      <Text style={styles.Slogin}>Grow with NAMI, Grow with knowledge.</Text>
      <TouchableOpacity style={styles.SigninButton} onPress={() => promptAsync()} >
        <AntDesign name="google" size={30} color={MainColor} />
        <Text style={styles.SigninButtonText}>
          Sign In with <Text style={{color:"#4285f4"}}>G</Text><Text style={{color:"#EA4335"}}>o</Text><Text style={{color:"#FBBC05"}}>o</Text><Text style={{color:"#4285f4"}}>g</Text><Text style={{color:"#34a853"}}>l</Text><Text style={{color:"#EA4335"}}>e</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}