import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator } from 'react-native'
export default LoadingScreen = (props) => {

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        AsyncStorage.getItem('@PrimaryData').then(async result => {
            if (result !== null) {
                x= await AsyncStorage.getItem('@PrimaryData')
                props.navigation.navigate('MyTab',JSON.parse(x))
            } else {
                props.navigation.navigate('LocPermission')
            }
        })

    }

    return <ActivityIndicator />
}