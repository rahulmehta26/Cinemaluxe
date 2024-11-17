import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import BackButton from "../components/global/BackButton";
import { HeartIcon } from "react-native-heroicons/solid";
import { color } from "../constant/Color";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/ui/Cast";
import MovieList from "../components/ui/MovieList";
import Loading from '../components/global/Loading';

const MovieScreen = () => {
  const { width, height } = useWindowDimensions();

  const { params: data } = useRoute();

  const movieName = "The Boy";

  const [isFavourites, setIsFavourites] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5, 6]);
  const [similarMovie, setSimilarMovie] = useState([1, 2, 3, 4, 5, 6]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [data]);

  return (
    <SafeAreaView className="bg-neutral-800 flex-1 ">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="flex-1"
      >
        <View
          className={
            "w-full px-4 pt-4 absolute top-0 z-50 flex-row justify-between items-center "
          }
        >
          <BackButton />

          <TouchableOpacity
            onPress={() => setIsFavourites((prev) => !prev)}
            activeOpacity={0.8}
          >
            <HeartIcon size={32} color={isFavourites ? "red" : "white"} />
          </TouchableOpacity>
        </View>

        {
          loading? (<Loading />) : (
       
       <View>
          <Image
            source={require("../assets/images/poster.jpg")}
            style={{
              width: "100%",
              height: height * 0.55,
              resizeMode: "cover",
            }}
          />

          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.8)",
              "rgba(23, 23, 23, 1)",
            ]}
            style={{ width: "100%", height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>

          )
        }


        <View className="space-y-4" style={{ marginTop: -(height * 0.09) }}>
          <Text className="text-white text-center text-[2.5rem] font-bold tracking-wider">
            {movieName}
          </Text>

          <Text className="text-neutral-400 font-semibold text-base text-center ">
            Released • 2020 • 170 min
          </Text>

          <View className="flex-row justify-center mx-4 space-x-2">
            <Text className="text-neutral-400 font-semibold text-base text-center">
              Action •
            </Text>

            <Text className="text-neutral-400 font-semibold text-base text-center">
              Thrill •
            </Text>

            <Text className="text-neutral-400 font-semibold text-base text-center">
              Comedy
            </Text>
          </View>

          <Text className="text-neutral-400 mx-4 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ab aliquam natus quasi aspernatur cumque!
          </Text>
        </View>

        <Cast cast={cast} />

        <View className="mx-4">
          <MovieList
            title="Similar Movie"
            hideSeeAll={true}
            data={similarMovie}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieScreen;
