import { View, Text } from 'react-native';
import React from 'react';
import Carousel from "react-native-snap-carousel";

const TrendingMovies = ({data}) => {
  return (
    <View className='mb-8' >
      <Text
      className='text-white text-xl mb-5'
      >TrendingMovies</Text>

      <Carousel 
      data = {data} 
      renderItem = {({item}) => <MovieCard item = {item} /> }
      firstItem= {1}
      inactiveSlideOpacity = {0.60}
      sliderWidth={600}
      itemWidth={400}
      slideStyle={{display:"flex", alignItems:"center"}}
      />
    </View>
  );
};

const MovieCard = ({item}) => {

    return(
       <Text>Heelo</Text>
    );
};

export default TrendingMovies;


