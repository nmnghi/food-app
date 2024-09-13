import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { firebaseAuth } from '../config/firebase.config';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

    // const navigation = useNavigation();

    // useLayoutEffect(() => {
    //     checkLoggedUser();
    // }, [])

    // const checkLoggedUser = () => {
    //     firebaseAuth.onAuthStateChanged((cred) => {
    //         if(cred.uid){
    //             navigation.replace('Home');
    //         } else {
    //             navigation.replace('Login');
    //         }
    //     });
    // }

    return (
    <View className="flex-1 items-center justify-center space-y-24">
        <Image source={require("./images/logo.png")} className="h-24 w-24" resizeMode="contain"/>
        <ActivityIndicator size="large" color="#f48c06" />
    </View>
    )
}

export default SplashScreen