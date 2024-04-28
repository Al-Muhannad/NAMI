import { Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {styles,SecColor} from '../Style/Style';
//White: #E6F8D5
//Green: #2B6C38

const DESC = "NAMI is an agriculture app enabling users to care for their plants. It allows plant selection based on environmental data or suggestions, sends irrigation reminders via notifications, and offers recommended plant options."

const OBJC = "Simplify home gardening for busy individuals without prior knowledge, providing a quick and straightforward process to make gardening accessible. Emphasize mental health benefits through horticulture therapy and improve indoor air quality."
export default function AboutNami() {

  return (

    <SafeAreaView style={styles.container}>
      
      <View>
       <Image source={{ uri: 'https://i.ibb.co/v4LrPFr/Nami.png' }} style={{height:120,width:300}}/>
      </View>

      <View style={styles.PAGECONT}>
        <View style={styles.DESCON}>
          <Text style={styles.TiTL}>Description</Text>
          <View style={styles.PARH}>
            <Text style={styles.TxTFORMAT}>{DESC}</Text>
          </View>
        </View>
        <View style={styles.OBJCON}>
          <Text style={styles.TiTL}>Objective</Text>
          <View style={styles.PARH}>
            <Text style={styles.TxTFORMAT}>{OBJC}</Text>
          </View>
        </View>
      </View>

      <View style={styles.CRTEDCON}>
        <Text style={styles.TiTL}>Created by</Text>
        <View style={styles.GITACC}>
          <TouchableOpacity style={styles.ACCOUNTC} onPress={() => WebBrowser.openBrowserAsync('https://github.com/Al-Muhannad')}>
            <FontAwesome name="github" size={54} color={SecColor} style={{alignSelf:'center',}}/>
            <Text style={styles.CRTEDNAME}>Almuhannad Aldualij</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ACCOUNTC}  onPress={() => WebBrowser.openBrowserAsync('https://github.com/N24il')}>
            <FontAwesome name="github" size={54} color={SecColor} style={{alignSelf:'center',}} />
            <Text style={styles.CRTEDNAME}>Nawaf Alfuhaid</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ACCOUNTC} onPress={() => WebBrowser.openBrowserAsync('https://github.com/essa7987')}>
            <FontAwesome name="github" size={54} color={SecColor} style={{alignSelf:'center',}}  />
            <Text style={styles.CRTEDNAME}>Eissa Albuty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ACCOUNTC} onPress={() => WebBrowser.openBrowserAsync('https://github.com/Alamrani345')}>
            <FontAwesome name="github" size={54} color={SecColor} style={{alignSelf:'center',}} />
            <Text style={styles.CRTEDNAME}>Mohammed Alamrani</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>

  );
}