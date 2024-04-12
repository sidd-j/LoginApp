import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import PhoneNumber from "react-native-phone-number-input"

const PhnNumber = () => {
    const [selectedCountryCode, setSelectedCountryCode] = useState("IN");

    return (
        <View>

            <PhoneNumber
                style={styles.container}
                isValidNumber
                onChangeCountry={(countryCode) => {
                    console.log(countryCode);
                    selectedCountryCode = countryCode;

                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: '100%',
        borderColor: "#918e8e",
        borderWidth: 1,
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
});

export default PhnNumber;
