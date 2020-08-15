import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Home from './Screens/Home'
import ReadAJoke from './Screens/Home'
import SunTimings from './Screens/Home'
import TopNews from './Screens/Home'
import Weather from './Screens/Home'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
       <AppContainer/>
      </View>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  Home:{
    screen: Home
  },
  TopNews:{
    screen: TopNews
  },
  ReadAJoke:{
    screen: ReadAJoke
  },
  SunTimings:{
    screen: SunTimings
  },

  Weather:{
    screen: Weather
  }
})

var AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
