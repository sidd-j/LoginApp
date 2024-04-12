import { React, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { firebase } from "../config";

const ProfileScreen = () => {

    const { height } = useWindowDimensions();
    const [name, setName] = useState("");

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
            style={[{ height: height * 1.0 }]}        >
            <View>
                <Text style={[styles.title, { textAlign: "center" }]}>
                    Welcome , {name.firstNames}
                </Text>

                <View style={styles.root}>

                </View>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        alignItems: "left",
        padding: 40,
        borderRadius: 50,
        paddingTop: 50,
        height: "50%",
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

});


export default ProfileScreen;


