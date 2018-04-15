import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Temp extends Component {

  render() {

    return (

      <View style={styles.container}>
          <Text>点击返回</Text>
      </View>

    );

  }

}

var styles = StyleSheet.create({
      container: {
          backgroundColor:'yellow',
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      },
  });
