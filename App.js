import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { render } from "react-dom";

const Stack = createStackNavigator();
const navEntries = ["Hund", "Katt", "Kanin"];

const NavBar = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: props.bg,
      }}
    >
      <Button
        title="Hund"
        color="pink"
        onPress={() => props.arg.navigate("Hund")}
      />
      <Button
        title="Katt"
        color="lightblue"
        onPress={() => props.arg.navigate("Katt")}
      />
      <Button
        title="Kanin"
        color="lightgreen"
        onPress={() => props.arg.navigate("Kanin")}
      />
    </View>
  );
};

const screenDog = ({ navigation }) => {
  return (
    <View>
      <NavBar arg={navigation} bg="#eee" />
      <View
        style={{
          height: 500,
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/app_img/dog.jpg")}
          style={{ height: 300, width: 300 }}
        />
      </View>
    </View>
  );
};

const screenCat = ({ navigation }) => {
  return (
    <View>
      <NavBar arg={navigation} bg="#eee" />
      <View
        style={{
          height: 500,
          backgroundColor: "lightblue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/app_img/cat.jpg")}
          style={{ height: 300, width: 300 }}
        />
      </View>
    </View>
  );
};

const screenRabbit = ({ navigation }) => {
  return (
    <View>
      <NavBar arg={navigation} bg="#eee" />
      <View
        style={{
          height: 500,
          backgroundColor: "palegreen",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/app_img/bunny.jpg")}
          style={{ height: 300, width: 300 }}
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hund" component={screenDog} />
        <Stack.Screen name="Katt" component={screenCat} />
        <Stack.Screen name="Kanin" component={screenRabbit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
