import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground } from "react-native";
import CustomInput from "../../components/customeInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import PhoneNumber from "react-native-phone-number-input";

const onSigninPress = () => {
    console.warn("Signed In")
}
const onForgotPassword = () => {
    console.warn("FOrgot Password")
}

const onSigninFacebook = () => {
    console.warn("Signed In with Facebook")
}
const onSigninGoogle = () => {
    console.warn("Signed In with Google")

}
const onSigninApple = () => {
    console.warn("Signed In with Apple")
}

const onRegister = () => {
    console.warn("Registerd")

}
const SignUpScreen = () => {
    const { height } = useWindowDimensions();
    const [username, SetUserName] = useState("");
    const [password, SetPassword] = useState("");
    const [fullname, SetFullName] = useState("");
    const [countrycode, SetCountryCode] = useState("");
    const [phonenum, SetPhoneNumber] = useState("");

    return (
        <ImageBackground source={require("../../../asset/images/bg.jpg")}
            style={[{ height: height * 1.0 }]}        >
            <View>
                <Text style={[styles.title, { textAlign: "center" }]}>
                    Create an Account
                </Text>

                <View style={styles.root}>
                    <CustomInput placeholder="Full Name" value={fullname} setValue={SetFullName} />
                    <PhoneNumber
                        containerStyle={styles.phoneNumberContainer}
                        textInputStyle={styles.phonenumber}
                        textContainerStyle={styles.phonenumber}
                        defaultCode="IN"
                        layout="first"
                        defaultValue={phonenum}
                        onChangeText={(number) => SetPhoneNumber(number)}
                        placeholder="Enter Your Number"
                        onChangeCountry={(countryData) => {
                            console.log(countryData);
                            SetCountryCode(countryData.callingCode);
                        }}
                    />

                    <CustomInput placeholder="User Name" value={username} setValue={SetUserName} />
                    <CustomInput placeholder="Password" value={password} setValue={SetPassword} secureTextEntry={true} />

                    <CustomButton text="Register" onPress={onRegister} type={"PRIMARY"} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, marginBottom: 20 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 100, textAlign: 'center' }}>Sign Up With</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <CustomButton
                        text="Sign in with Facebook"
                        onPress={onSigninFacebook}
                        type="TERTIARY"
                        bgColor="#E7EAF4"
                        fColor="#4965A9"

                    />
                    <CustomButton
                        text="Sign in with Google"
                        onPress={onSigninGoogle}
                        type="TERTIARY"
                        bgColor="#FAE9EA"
                        fColor="#DD4D44" />
                </View>
            </View>
        </ImageBackground >
    )
}

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
})

export default SignUpScreen;
