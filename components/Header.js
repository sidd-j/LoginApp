import { View, Text } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 29,
          color: "#008000",
        }}
      >
        {props.name}
      </Text>
    </View>
  );
};

export default Header;
