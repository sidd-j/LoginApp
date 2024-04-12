import * as React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';




function ProfilePhoto() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={require('../assets/profile.png')} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    left: '89%',
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ProfilePhoto;