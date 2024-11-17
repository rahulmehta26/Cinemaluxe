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

const MovieList = ({ title, data }) => {
  const { width, height } = useWindowDimensions();

  const navigation = useNavigation();

  let movieName = "Dragon Home";

  return (
    <View className="mb-8 space-y-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>

        <TouchableOpacity>
          <Text className=" text-lg" style = {{color:color.themeColor}} >See All</Text>
        </TouchableOpacity>
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
              onPress={() => navigation.navigate("Movie", data)}
            >
              <View className="space-y-1 mr-4 mt-4">
                <Image
                  source={require("../../assets/images/poster.jpg")}
                  className="rounded-2xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />

                <Text className=" text-white text-md ">
                    {
                        movieName?.length> 14 ? movieName.slice(0,14) + '...' : movieName
                    }
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
