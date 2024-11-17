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
import React, { useState } from "react";
import CustomSafeAreaView from "../components/global/CustomSafeAreaView";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/global/Loading";

const SearchScreen = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  const [result, setResult] = useState([1, 2, 3, 4, 5, 6]);
  const [loading, setLoading] = useState(false)

  const movieName = "Tillu ki masti, Basti me";

  return (
    <CustomSafeAreaView>
      <View className="mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full p-1 ">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pl-6 flex-1 text-base font-semibold text-white tracking-wider "
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
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
                      source={require("../assets/images/poster.jpg")}
                      style={{
                        width: width * 0.42,
                        height: height * 0.3,
                        resizeMode: "cover",
                      }}
                      className="rounded-3xl"
                    />

                    <Text className="text-neutral-300 ml-1">
                      {movieName?.length > 28
                        ? movieName.slice(0, 22) + "..."
                        : movieName}
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
