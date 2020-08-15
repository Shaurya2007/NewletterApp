import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export default class TopNews extends Component{
  render(){
    return(
      <View style={styles.container}>
       <Text style={{alignItems:'center',justifyContent:'center'}}>Top News</Text>
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
});