import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Text>点击跳转</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
        backgroundColor:'yellow',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
  },
  
});
