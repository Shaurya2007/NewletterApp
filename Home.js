import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import ReadAJoke from './Screens/Home'
import SunTimings from './Screens/Home'
import TopNews from './Screens/Home'
import Weather from './Screens/Home'

export default class Home extends Component{
  render(){
    return(
      <View style={styles.container}>
       <TouchableOpacity
       style={styles.button1}
       onPress={()=>{
         this.state.navigation.navigate(TopNews)
       }}
       >
         <Text style={{alignItems:'center'}}>Top News</Text>
       </TouchableOpacity>

       <TouchableOpacity
       style={styles.button1}
       onPress={()=>{
         this.state.navigation.navigate(ReadAJoke)
       }}
       >
         <Text style={{alignItems:'center'}}>Read A Joke</Text>
       </TouchableOpacity>

       <TouchableOpacity
       style={styles.button1}
       onPress={()=>{
         this.state.navigation.navigate(SunTimings)
       }}
       >
         <Text style={{alignItems:'center'}}>Sun Timings</Text>
       </TouchableOpacity>

       <TouchableOpacity
       style={styles.button1}
       onPress={()=>{
         this.state.navigation.navigate(Weather)
       }}
       >
         <Text style={{alignItems:'center'}}>Weather</Text>
       </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    height:20,
    width:50,
    borderWidth:2,
    marginTop:5,
    padding:20,
    backgroundColor:'#ffffff'
  }
});