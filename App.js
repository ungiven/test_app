import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, Image, StyleSheet } from "react-native";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { render } from "react-dom";

const Stack = createStackNavigator();
const Entries = [
  { name: "Hund", color: "pink" },
  { name: "Katt", color: "lightblue" },
  { name: "Kanin", color: "palegreen" },
  { name: "Ekorre", color: "lightyellow" },
];

const Images = [
  require("./assets/app_img/dog.jpg"),
  require("./assets/app_img/cat.jpg"),
  require("./assets/app_img/bunny.jpg"),
  require("./assets/app_img/squirrel.jpg"),
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
          color: props.active == props.order ? "white" : "black",
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

  /*return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TextButton
        color="pink"
        active={props.active}
        order="1"
        name="Hund"
        arg={props.arg}
      />
      <TextButton
        color="lightblue"
        active={props.active}
        order="2"
        name="Katt"
        arg={props.arg}
      />
      <TextButton
        color="palegreen"
        active={props.active}
        order="3"
        name="Kanin"
        arg={props.arg}
      />
      <TextButton
        color="lightyellow"
        active={props.active}
        order="4"
        name="Ekorre"
        arg={props.arg}
      />
    </View>
  );*/
};

for (const [index, entry] of Entries.entries()) {
  Screens.push(({ navigation }) => {
    return (
      <View style={{ flex: 1 }}>
        <NavBar arg={navigation} active={index + 1} />
        <View
          style={{
            flex: 1,
            //height: 500,
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

/*const screenDog = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar arg={navigation} active="1" />
      <View
        style={{
          flex: 1,
          //height: 500,
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
    <View style={{ flex: 1 }}>
      <NavBar arg={navigation} active="2" />
      <View
        style={{
          flex: 1,
          //height: 500,
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
    <View style={{ flex: 1 }}>
      <NavBar arg={navigation} active="3" />
      <View
        style={{
          flex: 1,
          //height: 500,
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

const screenSquirrel = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar arg={navigation} active="4" />
      <View
        style={{
          flex: 1,
          //height: 500,
          backgroundColor: "lightyellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </View>
  );
};*/

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Hund" component={Screens[0]} />
//         <Stack.Screen name="Katt" component={Screens[1]} />
//         <Stack.Screen name="Kanin" component={Screens[2]} />
//         <Stack.Screen name="Ekorre" component={Screens[3]} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>{Stacks}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
