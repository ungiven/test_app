import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, Image, StyleSheet } from "react-native";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { render } from "react-dom";

const Stack = createStackNavigator();
const Entries = [
  { name: "Hund", color: "white" }, // pink
  { name: "Katt", color: "white" }, // lightblue
  { name: "Kanin", color: "white" }, // palegreen
  { name: "Ekorre", color: "white" }, // lightyellow
  { name: "Bi", color: "white" }, // white
];

const Images = [
  require("./assets/app_img/dog.jpg"),
  require("./assets/app_img/cat.jpg"),
  require("./assets/app_img/bunny.jpg"),
  require("./assets/app_img/squirrel.jpg"),
  require("./assets/app_img/bee.png"),
];

const TextButtons = [];
const Screens = [];
const Stacks = [];

// props: color, order, name
const TextButton = (props) => {
  return (
    <Text
      style={[
        styles.button,
        {
          backgroundColor: props.color,
          fontWeight: props.active == props.order ? "bold" : "normal",
          color: props.active == props.order ? "black" : "black",
          borderBottomWidth: props.active == props.order ? 0 : 1,
        },
      ]}
      onPress={() => props.arg.navigate(props.name)}
    >
      {props.name}
    </Text>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#888",
    flex: 1,
    fontFamily: "sans-serif-thin",
  },
});

const NavBar = (props) => {
  TextButtons.length = 0;

  for (const [index, entry] of Entries.entries()) {
    TextButtons.push(
      <TextButton
        color={entry.color}
        active={props.active}
        order={index + 1}
        name={entry.name}
        arg={props.arg}
        key={index}
      />
    );
  }

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {TextButtons}
    </View>
  );
};

for (const [index, entry] of Entries.entries()) {
  Screens.push(({ navigation }) => {
    return (
      <View style={{ flex: 1 }}>
        <NavBar arg={navigation} active={index + 1} />
        <View
          style={{
            flex: 1,
            backgroundColor: entry.color,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={Images[index]} style={{ height: 300, width: 300 }} />
        </View>
      </View>
    );
  });

  Stacks.push(
    <Stack.Screen name={entry.name} component={Screens[index]} key={index} />
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>{Stacks}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
