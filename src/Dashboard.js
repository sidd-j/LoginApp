import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, ImageBackground, useWindowDimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";
import CustomButton from "./components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const [name, setName] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);
  return (
    <ImageBackground source={require("../assets/Flowers.png")}
      style={[{ height: height * 1.0 }]} >
      <View>
        <Text style={[styles.title, { textAlign: "center" }]}>
          Welcome ,{name.firstName}
        </Text>

        <SafeAreaView style={styles.container}>

          <View style={styles.root}>
            <CustomButton
              text={"Log out"}
              onPress={() => {
                firebase.auth().signOut();
              }}
            >
            </CustomButton>

            <CustomButton
              text={"View Profile"}
              onPress={() => {
                navigation.navigate("Profile")

              }}
            >
            </CustomButton>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>

  );
};

export default Dashboard;

const styles = StyleSheet.create({

  root: {
    alignItems: "center",
    padding: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 50,
    height: "100%",
    width: "100%",

  },

  title: {
    marginTop: 200,
    marginBottom: 100,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
});
