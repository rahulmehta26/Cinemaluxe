import { View, ScrollView, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../global/CustomSafeAreaView';
import { useNavigation } from '@react-navigation/native';

const Cast = ({cast}) => {

    const navigation = useNavigation();

    const {width, height} = useWindowDimensions

    const name = 'Tillu';
    const characterName = 'Tillu Singer';

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
                cast && cast.map((info, index) => {

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
                            source={require('../../assets/images/poster.jpg')}
                            className = "w-20 h-24 rounded-xl object-cover"                            
                            />
                            </View>


                             <Text className = 'text-white text-md font-semibold' >
                                {
                                    name.length>10 ? name.slice(0, 10) + '...' : name
                                }
                             </Text>

                             <Text className = 'text-neutral-400 text-md font-semibold' >
                                {
                                    characterName.length>10 ? characterName.slice(0, 10) + '...' : characterName
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