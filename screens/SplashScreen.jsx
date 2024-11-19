import { View, Text} from "react-native";
import React, { useEffect, useRef } from "react";
import { color } from "../constant/Color";
import { useNavigation } from "@react-navigation/native";


const SplashScreen = () => {

  const navigation = useNavigation()

useEffect(() => {

  setTimeout(() => {

     navigation.navigate("Home")    
  }, 2000);
} )
   
  return (
    <View className="flex-1 flex justify-center items-center bg-neutral-800">

      <Text className="text-red-800 text-center text-[3rem] mt-16">

        <Text className = 'text-[8rem]' style = {{color:color.themeColor}} >C</Text>
        
        inemaluxe
      </Text>
    </View>
  );
};

export default SplashScreen;
