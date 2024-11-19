import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import CustomSafeAreaView from "../components/global/CustomSafeAreaView";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/global/Loading";
import {debounce} from 'lodash';
import {fetchMovieSearch, imgPath185, unavaiblePoster} from '../api/movieDB';

const SearchScreen = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [querySearch, setQuerySearch] = useState('');

   const handleSearch = (val) => {
         
      if(val && val.length>2){
        setLoading(true);
        fetchMovieSearch({
          query: val,
          include_adult: 'true',
          language: 'en-US',
          page:'1'
        }).then(data => {
          setLoading(false);
          if(data && data.results) setResult(data.results);
        })
      }else{
        setLoading(false);
        setResult([])
      }
   };

   const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <CustomSafeAreaView>

      <View className="mb-3 mt-6 flex-row justify-between items-center border border-neutral-500 rounded-full p-1 ">
        <TextInput
          onChangeText={(text) => {
            setQuerySearch(text);  
            handleTextDebounce(text);
          }}
          value={querySearch}
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pl-6 flex-1 text-base font-semibold text-white tracking-wider "
        />

        <TouchableOpacity
          onPress={() => {setQuerySearch(); setResult(); }}
          className="rounded-full p-3 bg-neutral-500 "
        >
          <XMarkIcon size="20" color="white" />
        </TouchableOpacity>
      </View>

      {
        loading? (<Loading />) : 

      result?.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-3">
          <Text className="text-white font-semibold ml-1">
            Result ({result.length})
          </Text>

          <View className="flex-row mt-4 justify-between flex-wrap">
            {result?.map((info, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push("Movie", info)}
                >
                  <View className="gap-y-3 mb-4 ">
                    <Image
                      source={{uri : imgPath185(info?.poster_path) || unavaiblePoster }}
                      style={{
                        width: width * 0.42,
                        height: height * 0.3,
                        resizeMode: "cover",
                      }}
                      className="rounded-3xl"
                    />

                    <Text className="text-neutral-300 ml-1">
                      {info?.title?.length > 28
                        ? info?.title.slice(0, 22) + "..."
                        : info?.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center ">
          <Image
            source={require("../assets/images/movieTime.png")}
            style={{
              width: "100%",
              height: height * 0.4,
              resizeMode: "cover",
            }}
          />
        </View>
      )
      }

    </CustomSafeAreaView>
  );
};

export default SearchScreen;
