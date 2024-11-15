import { View, Text, Platform, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "../components/global/CustomSafeAreaView";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import TrendingMovies from "../components/ui/TrendingMovies"

const android = Platform.OS == "android";

const HomeScreen = () => {

  const [trending, setTrendind] = useState([1, 2, 3, 4, 5]);
   
  return (
    <CustomSafeAreaView>
      <View className='android ? "mb-3" : "-mb-2"'>
        <StatusBar barStyle="light-content" backgroundColor="#000" />

        <View className="flex-row justify-between items-center">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />

          <Text className="text-white text-[1.65rem] font-bold">
            <Text className="text-[#FFD700] font-[900] text-[2rem] " >C</Text>inemaluxe
          </Text>

          <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
        </View>
      </View>

      <ScrollView
      showsVerticalScrollIndicator = {false}
      contentContainerStyle = {{paddingBottom: 10}}
      >
        <TrendingMovies data = {trending}  />

      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
