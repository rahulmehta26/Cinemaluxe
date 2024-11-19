import { View, ScrollView, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../global/CustomSafeAreaView';
import { useNavigation } from '@react-navigation/native';
import { imgPath185, unavaiblePerson } from '../../api/movieDB';

const Cast = ({cast}) => {

    const navigation = useNavigation();

  return (
    <CustomSafeAreaView>
      
      <View className = 'my-6' >

        <Text className = 'text-white text-lg mb-5 ' >
               Top Cast
        </Text>

        <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
        >

          {
            cast.map((info, index) => {

              return(
                <TouchableOpacity 
                key={index} 
                className = 'mr-4 items-center '
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Person', info) }
                >

                    <View 
                    className = 'overflow-hidden rounded-full w-20 h-20 items-center border border-neutral-400' 
                    >

                    <Image 
                    source={{uri : imgPath185(info.profile_path) || unavaiblePerson }}
                    className = "w-20 h-24 rounded-xl object-cover"                            
                    />
                    </View>


                     <Text className = 'text-white text-md font-semibold' >
                        {
                            info?.name?.length>10 ? info?.name.slice(0, 10) + '...' : info?.name
                        }
                        
                     </Text>

                     <Text className = 'text-neutral-400 text-md font-semibold' >
                        {
                            info?.character?.length>10 ?info?.character.slice(0, 10) + '...' : info?.character
                        }
                        
                     </Text>
                </TouchableOpacity>
              )
            } )
          }

        </ScrollView>
      </View>
    </CustomSafeAreaView>
  );
};

export default Cast;