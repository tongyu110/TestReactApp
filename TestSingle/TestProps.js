import React , {Component} from 'react';
import {Text,View} from 'react-native';
class HelloWord extends Component {
  render() {
    return (
      <Text> Hello {this.props.name} </Text>
    );
  }
}

export default TellMe extends Component  {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <HelloWord name="Abu" />
        <HelloWord name="Zhi" />
        <HelloWord name="Fei" />
        <HelloWord name="Jing" />
      </View>
    );
  }
}
