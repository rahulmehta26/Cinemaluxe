import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {  ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { color } from "../../constant/Color";

const BackButton = () => {
    
    const navigation = useNavigation()
    
  return (
    <TouchableOpacity 
    activeOpacity={0.8} 
    onPress={() => navigation.goBack() }
    >

        <View style = {{backgroundColor:color.bgButton}} className = ' w-10 rounded-xl p-1'>

      <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />

        </View>
    </TouchableOpacity>
  );
};

export default BackButton;
