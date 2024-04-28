import React from 'react';
import { FlatList,SafeAreaView, Image,View,Text } from 'react-native';
import { styles } from '../Style/Style';
import {GetOccurPlants} from '../Functions/Functions';
const PlantList = (props) => {
  const [List,setList ] = React.useState(false);
  React.useEffect(()=>{
    (async () => {
      if(List==false){
        let z = await GetOccurPlants()
        setList(z);
     }
      })()
})

const renderItem = (Item) => (

    <SafeAreaView style = {styles.PLNTLIST}>

      <Image
          style={styles.PLNTIMG}
          source={{
            uri: 'https://res.cloudinary.com/namisa/image/upload/v1707991165/'+Item.item.name
          }}
        />
      <Text style = {styles.PLNTNM}>{Item.item.name}</Text>
      <Text style = {styles.PLNTCOUNT}>{Item.item.count}</Text>

    </SafeAreaView>

  );

  return (
    <>
    <SafeAreaView style={styles.StackHeaderView}>
      <Text style={styles.StackHeader}>Plants frequency list</Text>
    </SafeAreaView>
<SafeAreaView style={styles.container}>
      <FlatList
        data={List}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
</SafeAreaView>
    </>
  );
 
};
export default PlantList;