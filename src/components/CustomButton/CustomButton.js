import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fColor }) => {
    return (
        <Pressable onPress={onPress}
            style={[styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}
            ]}>
            <View>
                <Text style={[styles.text, styles[`text_${type}`], fColor ? { color: fColor } : {}]}>{text}</Text>

            </View>
        </Pressable >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f9aba9",
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        alignItems: "center",

    },

    container_PRIMARY: {
        backgroundColor: "#b0c3c2",
    },
    container_TERTIARY: {
        backgroundColor: "white",
    },
    text: {
        fontWeight: "bold",
        color: "#bbc0c7",

    },

    text_PRIMARY: {
        color: "#063970",
    },
    text_TERTIARY: {
        color: "gray",

    }
})

export default CustomButton;