import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';


const CustomSafeAreaView = ({children}) => {
  return (
    <View style = {styles.container} className=" bg-neutral-800  " >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:10,
        paddingHorizontal:20
    }
})

export default CustomSafeAreaView;