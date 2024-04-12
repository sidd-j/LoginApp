import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Backgroundpage from "./background";
import ProfilePhoto from "./profile";
import { useNavigation } from "@react-navigation/native";
import profile from "./profile";





const Home = () => {
  const navigation = useNavigation();
  return (
    <Backgroundpage >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 50, marginVertical: 250 }}>
        <Text style={{
          color: 'white', fontSize: 50, fontWeight: 'bold',
          textShadowColor: 'black', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 2
        }}>Welcome to the App!</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#70D2D1',
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
            shadowRadius: 5,
            shadowColor: 'black',
            shadowOffset: { width: 2, height: 2 }
          }}
          onPress={() => navigation.navigate('profile')}>
          <Text style={{ color: 'white' }}>Logout</Text>
        </TouchableOpacity>
      </View>

    </Backgroundpage>
  )
}




const styles = StyleSheet.create({})

export default Home;