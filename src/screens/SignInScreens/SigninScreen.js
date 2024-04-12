import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ImageBackground } from "react-native";
import CustomInput from "../../components/customeInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const onForgotPassword = () => {
    console.warn("Forgot Password");
};

const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();


    const onSigninPress = async () => {
        console.warn("Sign In");
        navigation.navigate("Home");


    };

    const onSignupPress = async () => {
        console.warn()
        navigation.navigate("SignUp");

    };

    return (
        <ImageBackground source={require("../../../asset/images/bg.jpg")} style={[{ height: height * 1.0 }]}>
            <View>
                <Text style={[styles.title, { textAlign: "center" }]}>
                    Welcome To My App
                </Text>

                <View style={styles.root}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#051C60',
                        margin: 10,
                    }}>Enter Details</Text>
                    <CustomInput
                        placeholder="Email"
                        value={email}
                        setValue={setEmail} />
                    <CustomInput
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true} />

                    <CustomButton
                        text="Sign in"
                        onPress={onSigninPress}
                        type={"PRIMARY"}
                        disabled={loading} />

                    <CustomButton
                        text="Forgot Password?"
                        onPress={onForgotPassword}
                        type="TERTIARY" />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, marginBottom: 20 }}>

                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />

                        <View>
                            <Text style={{ width: 60, textAlign: 'center' }}>Sign Up</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <CustomButton
                        text="Sign Up"
                        onPress={onSignupPress}
                        type={"PRIMARY"}
                        disabled={loading}
                        bgColor="#beeae8" />
                </View>
            </View>
        </ImageBackground>
    );
};

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

export default SignInScreen;
