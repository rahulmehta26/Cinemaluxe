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
import { fetchMovieCredit, fetchMovieDetails, fetchSimilarMovies, imgPath185, imgPath500, unavaiblePoster } from "../api/movieDB";

const MovieScreen = () => {
  const { width, height } = useWindowDimensions();

  const { params: info } = useRoute();


  const [isFavourites, setIsFavourites] = useState(false);
  const [cast, setCast] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(info.id);
    getMovieCredits(info.id);
    getSimilarMovie(info.id);
  }, [info]);

  const getMovieDetails = async id => {
    const data = await  fetchMovieDetails(id)
    if(data) setMovie(data)
    setLoading(false);

  }

  const getMovieCredits = async id => {
    const data = await  fetchMovieCredit(id)
    if(data && data.cast ) setCast(data.cast)
    setLoading(false);

  }

  const getSimilarMovie = async id => {
    const data = await  fetchSimilarMovies(id)
    if(data && data.results ) setSimilarMovie(data.results)
    setLoading(false);

  }

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
            source={{uri: imgPath500(movie?.poster_path) || unavaiblePoster }}
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


        <View className="gap-y-2" style={{ marginTop: -(height * 0.13) }}>
          <Text className="text-white text-center text-[2.5rem] font-bold tracking-wider">
            {movie?.title}
          </Text>

          <Text className="text-neutral-400 font-bold text-base text-center ">
            {movie?.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime} min
          </Text>

          <View className="flex-row justify-center mx-4 space-x-2">

            {
              movie?.genres?.map((info, index) =>  {

                let showDot = index + 1 != movie.genres.length;

                return(
                  <Text key={index} className="text-neutral-400 mx-1 font-bold text-base text-center">
                  {info?.name} { showDot && "•"}
                </Text>
                )
              }

              )
            }

          </View>

          <Text className="text-neutral-400 mx-4 tracking-wide">
            {
              movie?.overview
            }
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
