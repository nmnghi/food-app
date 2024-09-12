import { View, Text, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { useState } from 'react'
import UserTextInput from '../components/UserTextInput';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth, firestoreDB } from '../config/firebase.config';
import { doc, getDoc } from 'firebase/firestore';



const LoginScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getEmailValidationStatus, setGetEmailValidationStatus] = useState(false);

  // const [alert, setAlert] = useState(false);
  // const [alertMessage, setAlertMessage] = useState(null);

  const navigation = useNavigation();

  const handleLogin = async () => {

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View className="flex-1 justify-start items-center">
      <Image 
      source={require("./images/bg.png")}
      resizeMode="cover"
      className="h-96"
      style={{width: screenWidth}}/>


      {/* Main View */}
      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justìy-start py-6 px-6 space-y-6">
        <Image 
        source={require("./images/logo.png")}
        className="h-16 w-16"
        resizeMode="contain"
        />

        <Text className="text-primaryText text-xl font-semibold">Welcome back!</Text>
      
        <View className="w-full flex items-center justify-center">
          {/* alert */}
          {/* {alert && (
            <Text className="text-base text-red-600 ">{alertMessage}</Text>
          )} */}


          {/* email */}
          <UserTextInput 
            placeholder="Email" 
            isPass={false} 
            setStateValue={setEmail}
            setGetEmailValidationStatus={setGetEmailValidationStatus}
          />


          {/* password */}
          <UserTextInput 
            placeholder="Password" 
            isPass={true} 
            setStateValue={setPassword}
          />


          {/* login button */}
          <TouchableOpacity onPress={handleLogin} className="w-full px-4 py-2 rounded-xl my-3 flex items-center justify-center bg-primary">
            <Text className="py-2 text-white text-xl font-semibold">Sign In</Text>
          </TouchableOpacity>

          <View className="py-8 flex-row items-center justìy-center space-x-2">
            <Text className="text-base text-primaryText">Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text className="text-base text-primaryBold" style={{fontWeight: "bold"}}>Create here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}
export default LoginScreen