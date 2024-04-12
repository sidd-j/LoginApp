import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../config";
import CustomButton from "../src/components/CustomButton"
import CustomInput from "../src/components/customeInput"
import PhoneNumber from "react-native-phone-number-input";
const Registration = () => {
  const { height } = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phonenum, SetPhoneNumber] = useState("");

  const [countrycode, setCountryCode] = useState("");

  registerUser = async (email, password, firstName, lastName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,

            url: "https://test-98e70.firebaseapp.com"
          })
          .then(() => {
            alert("verification email sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
                countrycode,
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <ImageBackground source={require("../assets/Flowers.png")}
      style={[{ height: height * 1.0 }]}        >
      <View>
        <Text style={[styles.title, { textAlign: "center" }]}>
          Create an Account
        </Text>

        <View style={styles.root}>
          <CustomInput
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            autoCorrect={false}
          />
          <CustomInput
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
            autoCorrect={false}
          />

          <PhoneNumber
            containerStyle={styles.phoneNumberContainer}
            textInputStyle={styles.phonenumber}
            textContainerStyle={styles.phonenumber}
            defaultCode="IN"
            layout="first"
            defaultValue={phonenum}
            onChangeText={(number) => SetPhoneNumber(number)}
            placeholder="Enter Your Number"
            onChangeCountry={(countrycode) => {
              console.log(countrycode);
              setCountryCode(countrycode.callingCode);
            }}
          />

          <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
            autoCapitalize="none"
            autoCorrect={false}

            keyboardType="email-address"
          />


          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
          <CustomButton
            text="Register"
            onPress={() => {
              registerUser(email, password, firstName, lastName);
            }}
          >
          </CustomButton>

        </View>
      </View>

    </ImageBackground>
  );
};
export default Registration;

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

  title: {
    marginTop: 100,
    marginBottom: 100,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  Logo: {

  },
  phoneNumberContainer: {
    borderColor: "#918e8e",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    height: 61,
    fontSize: 16,

  },
  phonenumber: {
    width: "100%",
    backgroundColor: "white",
    height: 59,
    padding: 10,
    fontSize: 16,

  }
});
