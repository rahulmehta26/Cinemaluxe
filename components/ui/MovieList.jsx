import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { color } from "@/constant/Color";
import { imgPath185, unavaiblePoster } from "../../api/movieDB";

const MovieList = ({ title, data, hideSeeAll }) => {
  const { width, height } = useWindowDimensions();

  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>

        { 
        !hideSeeAll && (
          <TouchableOpacity>
            <Text className=" text-lg" style={{ color: color.themeColor }}>
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data?.map((info, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.push("Movie", info)}
            >
              <View className="gap-y-3 mr-4 mt-4">
                <Image
                  source={{uri: imgPath185(info.poster_path) || unavaiblePoster }}
                  className="rounded-2xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />

                <Text className=" text-white text-md ">
                  {info?.title?.length > 14
                    ? info?.title.slice(0, 14) + "..."
                    : info?.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
