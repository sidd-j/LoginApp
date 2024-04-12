import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  useWindowDimensions
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../config";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/customeInput/CustomInput";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ImageBackground source={require("../assets/Flowers.png")} style={[{ height: height * 1.0 }]}>
      <View>
        <Text style={[styles.title, { textAlign: "center" }]}>
          Welcome To My App
        </Text>

        <View style={styles.root}>
          <CustomInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            setValue={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <CustomInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            setValue={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
          <CustomButton
            text={"Log In"}
            onPress={() => loginUser(email, password)}
            style={styles.button}
          >
          </CustomButton>

          <CustomButton
            type="TERTIARY"
            text={"Don't have an account? Register"}
            onPress={() => navigation.navigate("Registration")}
            style={{ marginTop: 20 }}
          >

          </CustomButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    paddingTop: 50,
    height: "100%",
    width: "100%",
  },
  Logo: {
    height: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    marginTop: 100,
    marginBottom: 100,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
});
