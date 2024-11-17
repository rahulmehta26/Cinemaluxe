import { View, Text, Platform, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "../components/global/CustomSafeAreaView";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import TrendingMovies from "../components/ui/TrendingMovies"
import MovieList from "../components/ui/MovieList"
import { color } from "@/constant/Color";

const android = Platform.OS == "android";

const HomeScreen = () => {

  const [trending, setTrendind] = useState([1, 2, 3, 4, 5]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5]);
   
  return (
    <CustomSafeAreaView>
      <View className='android ? "mb-3" : "-mb-2"'>

        <StatusBar barStyle="light-content" backgroundColor="#000" />

        <View className="flex-row justify-between items-center">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />

          <Text className="text-white text-[1.65rem] font-bold">
            <Text className=" font-[900] text-[2rem] " style = {{ color:color.themeColor }} >C</Text>inemaluxe
          </Text>

          <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
        </View>
      </View>

      <ScrollView
      showsVerticalScrollIndicator = {false}
      contentContainerStyle = {{paddingBottom: 10}}
      >
        <TrendingMovies data = {trending}  />

        <MovieList title = "Upcoming Movie" data = {upcoming}  />

        <MovieList title = "Top Rated Movie" data = {topRated}  />

      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
