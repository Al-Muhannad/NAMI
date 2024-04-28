import {  Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import {styles,MainColor} from '../Style/Style';

function Contact() {

  const SENTNS = 'If you have any inquiries contact us.\nWe will be happy to help you'

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.TITAP}>
          <Text style={styles.PAGETITLE}>Get on touch</Text>
          <Text style={styles.MSG}>{SENTNS}</Text>
        </View>

        <View style = {styles.CONTCFILD}>
          <View style={styles.CONTCWAY}>
            <MaterialCommunityIcons name="phone" size={35} color={MainColor} style={{alignSelf:'center',}}/>
            <Text style ={styles.PAWC}>+966568063223</Text>
          </View>

          <View style={styles.CONTCWAY}>
            <MaterialCommunityIcons name="email-outline" size={35} color={MainColor} style={{alignSelf:'center',}}/>
            <Text style ={styles.PAWC}>nami@almuhannad.space</Text>
          </View>
        </View>

        <View style={styles.SocialMedia}>
          <View>
            <Text style={styles.PAGETITLE}>Our Social Media Platforms</Text>
          </View>
          <View style={styles.Sites}>
          <TouchableOpacity style={styles.SMC} onPress={()=>WebBrowser.openBrowserAsync('https://twitter.com/')}>
          <FontAwesome6 name="x-twitter" size={30} color={MainColor} style={{alignSelf:'center',}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.SMC} onPress={()=>WebBrowser.openBrowserAsync('https://www.instagram.com/')}>
          <FontAwesome6 name="instagram" size={30} color={MainColor} style={{alignSelf:'center',}}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.SMC} onPress={()=>WebBrowser.openBrowserAsync('https://www.facebook.com/')}>
          <FontAwesome6 name="square-facebook" size={30} color={MainColor} style={{alignSelf:'center',}} />
          </TouchableOpacity>
          </View>
        </View>

      </SafeAreaView>
 
  );
}
export default Contact;