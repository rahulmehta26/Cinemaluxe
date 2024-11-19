import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomSafeAreaView from "../components/global/CustomSafeAreaView";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import TrendingMovies from "../components/ui/TrendingMovies";
import MovieList from "../components/ui/MovieList";
import { color } from "@/constant/Color";
import { useNavigation } from "@react-navigation/native";
import Loading from '../components/global/Loading';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "../api/movieDB";

const android = Platform.OS == "android";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [trending, setTrendind] = useState([])
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();

  }, [] );

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();

    if(data && data.results) setTrendind(data.results);
      
    setLoading(false);
  } 

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();

    if(data && data.results) setUpcoming(data.results);
      
    setLoading(false);
  } 

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();

    if(data && data.results) setTopRated(data.results);
      
    setLoading(false);
  } 

  
  return (
    <CustomSafeAreaView>
      <View className='android ? "mb-3" : "-mb-2"'>
        <StatusBar barStyle="light-content" backgroundColor="#000" />

        <View className="flex-row justify-between items-center">

          <Text className="text-white text-[1.65rem] font-bold">
            <Text
              className=" font-[900] text-[2rem] "
              style={{ color: color.themeColor }}
            >
              C
            </Text>
            inemaluxe
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Search")}
          >
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {
        loading ? ( <Loading /> ) 
        : 
        (

      <ScrollView
        showsVerticalScrollIndicator={false}
        >
        {
          trending.length>0 && <TrendingMovies data={trending} />
        }


        <MovieList title="Upcoming Movie" data={upcoming} />

        <MovieList title="Top Rated Movie" data={topRated} />
      </ScrollView>
        )
      }

    </CustomSafeAreaView>
  );
};

export default HomeScreen;
