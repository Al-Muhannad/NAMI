import React from 'react';
import { FlatList,SafeAreaView, TouchableOpacity,View,Text } from 'react-native';
import { styles , MainColor, SecColor} from '../Style/Style';
import {DeleteUser, ListUsers } from '../Functions/Functions';
import { moderateScale } from '../Style/Metrics';
import { Fontisto, MaterialCommunityIcons} from '@expo/vector-icons';
const UserList = (props) => {
  const [Users,setUser ] = React.useState(false);
  React.useEffect(()=>{
    (async () => {
      if(Users==false){
       let z= await ListUsers()
      setUser(z);
     }
      })()
})

const renderItem = (Item) => (

    <SafeAreaView style = {styles.MNGUSR}>
      <Fontisto name="email" size={moderateScale(25)} color={SecColor} style={{alignSelf:'center' }}  />
      <Text style = {styles.EML}>{Item.item}</Text>
      <TouchableOpacity onPress={async()=>await DeleteUser(Item.item)}>
      <MaterialCommunityIcons name="delete"size={moderateScale(25)} color={'rgba(255, 0, 0,0.75)'} style={{alignSelf:'center'}} />
      </TouchableOpacity>
    </SafeAreaView>

  );

  return (
    <>
      <SafeAreaView style={styles.StackHeaderView}>
      <Text style={styles.StackHeader}>User management</Text>
    </SafeAreaView>
<SafeAreaView style={styles.container}>
      <FlatList
        data={Users}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
</SafeAreaView>
    </>
  );
 
};
export default UserList;