import {
  View,
  Text,
  useWindowDimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "../components/global/CustomSafeAreaView";
import BackButton from "../components/global/BackButton";
import { HeartIcon } from "react-native-heroicons/solid";
import MovieList from "../components/ui/MovieList";
import Loading from '../components/global/Loading';

const PersonScreen = () => {
  const { width, height } = useWindowDimensions();
  const android = Platform.OS == "android";
  const [isFavourites, setIsFavourites] = useState(false);
  const [movieList, setMovieList] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false)

  return (
    <CustomSafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className={"w-full mb-4  flex-row justify-between items-center "}>
          <BackButton />

          <TouchableOpacity
            onPress={() => setIsFavourites((prev) => !prev)}
            activeOpacity={0.8}
          >
            <HeartIcon size={32} color={isFavourites ? "red" : "white"} />
          </TouchableOpacity>
        </View>

        {
          loading ? (<Loading />) : (

        <View>
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-400">
              <Image
                source={require("../assets/images/tilluDon.jpg")}
                style={{
                  height: height * 0.43,
                  width: "100%",
                  resizeMode: "cover",
                }}
              />
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-3xl text-white font-bold text-center">
              Tillu Don
            </Text>

            <Text className="text-base text-neutral-400 font-normal text-center">
              Nalasupara, Mumbai, India
            </Text>
          </View>

          <View className="mt-6 px-2 py-4 flex-row justify-between items-center bg-neutral-700 rounded-full ">
            <View className="border-r-2 border-r-neutral-400 px-2  items-center">
              <Text className="text-white font-semibold ">Gender</Text>
              <Text className="text-neutral-300 text-sm font-semibold ">
                Male
              </Text>
            </View>

            <View className="border-r-2 border-r-neutral-400 px-2  items-center">
              <Text className="text-white font-semibold ">Birthday</Text>
              <Text className="text-neutral-300 text-sm font-semibold ">
                Abhi
              </Text>
            </View>

            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold ">Known for</Text>
              <Text className="text-neutral-300 text-sm font-semibold ">
                Gunda
              </Text>
            </View>

            <View className="px-2 items-center">
              <Text className="text-white font-semibold ">Popularity</Text>
              <Text className="text-neutral-300 text-sm font-semibold ">
                100
              </Text>
            </View>
          </View>

          <View className="my-6 space-y-2">
            <Text className="text-white text-lg ">Biography</Text>

            <Text className="text-neutral-400 tracking-wide mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eius dolores dolor quod ullam, id cumque repudiandae distinctio
              inventore nulla itaque iste quos provident modi eaque esse
              excepturi natus eos debitis unde? Labore vero, quasi quo
              reprehenderit est dignissimos molestiae.
            </Text>
          </View>

          <MovieList title="Movies" data={movieList} hideSeeAll={true} />
        </View>
          )
        }

      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default PersonScreen;
