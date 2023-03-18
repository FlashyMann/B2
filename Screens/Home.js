import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions
  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";

export default class Home extends Component() {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false
        };
      }

      render(){
        return (
            <View style={styles.container} >
                
            </View>
        )
      }

    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7A0BC0"
      },
})



