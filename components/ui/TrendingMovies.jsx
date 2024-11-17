import {
  View,
  Text,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Image,
  Animated,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("Movie", data);
  };

  let { width, height } = useWindowDimensions();
  const ITEM_SIZE = width * 0.6;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View className="mb-8 mt-6">
      <Text className="text-white text-xl mb-5">Trending</Text>

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(key) => data.key}
        horizontal
        contentContainerStyle={{
          alignItems: "center",
        }}
        scrollEventThrottle={16}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        renderItem={({ item, index }) => (
          <MovieCard key={index} scrollX={scrollX} item={item} index={index} />
        )}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const MovieCard = ({ item, scrollX, index }) => {
  let { width, height } = useWindowDimensions();
  const ITEM_SIZE = width * 0.6;
  const inputRange = [
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
    (index + 1) * ITEM_SIZE,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
  });

  return (
    <TouchableWithoutFeedback>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Image
          source={require("../../assets/images/bggs.jpg")}
          style={{
            width: width * 0.7,
            height: height * 0.5,
          }}
          className="rounded-3xl mx-2 "
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies;
