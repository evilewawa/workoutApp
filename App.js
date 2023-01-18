import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Alert, TextInput, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import PracticeStorageScreen from './screens/Practice';
import WalidScreen from './screens/walidScreen';
import TimerExample from './screens/TimerPractice';

// const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const NewScreen = () => (
   
    <View style = {styles.container}>
      <Text>Walid</Text>
    </View>
  
)

const AppNavigator = () => {
  return(
  <Drawer.Navigator initialRouteName = "timer example" >
    <Drawer.Screen name = "timer example" component={TimerExample}/>
    <Drawer.Screen name = "Home" component = {WalidScreen}/>
    <Drawer.Screen name = "Walid" component={NewScreen}/>
    <Drawer.Screen name = "New Screen" component = {NewScreen}/>
  </Drawer.Navigator>
)}
const App = () => {

    // TouchableNativeFeedBack and TouchableWithoutFeedback
    return (
    <NavigationContainer>
        <AppNavigator/>
    </NavigationContainer>

  )
}
function getBoxPropertiesStyleList(properties){
  let l = []
  l.push(styles.box)
  if (properties.style){
    l.push(properties.style)
  }
  if (properties.borderRadius){
    l.push({borderRadius:properties.borderRadius})
  }
  if (properties.color){
    l.push({backgroundColor:properties.color}) 
  }
  return l
}
const Box = (properties) => (
    <View style = {getBoxPropertiesStyleList(properties)}>{properties.children}</View>
)

const MyButton = (properties) => (
    <TouchableOpacity key = {properties.id} style = {properties.style} onPress = {properties.onPress}>
      <Text style = {styles.text}>{properties.title}</Text>
    </TouchableOpacity>
)

export default App;

const styles = StyleSheet.create({
  container: {
    // paddingTop:40,
    
    flex: 1,
    backgroundColor: 'lightblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection:"row",
    // textAlign:"center",
  },
  description:{
    textAlign:"center",
    fontSize:25,
    padding:5,
    color:"white"
  },
  title:{
    fontSize:35,
    padding:5,
    color:"white",
    textAlign:"center",
  },


  box : {
    margin:10,
    flex:1,
    justifyContent: 'center',
    backgroundColor:"lightslategray",
    marginBottom:25,
    // borderRadius:25,
  },
  text:{
    // flex:1,
    // textAlign:"center",
    paddingLeft:10,
    // backgroundColor:"orange",
  },
  button:{
    flex:1,
    backgroundColor:"yellow",
    padding:10,
  },
  input:{
    margin:5,
    padding: 5, 
    borderColor:"black", 
    borderWidth:1, 
    borderRadius:5,
  },
  buttonText:{
    flex:1,
    // opacity:0.8,
    backgroundColor:"lightblue",
    padding:10,
    margin:5,
    borderColor:"black",
    borderWidth:1,
  }
});
