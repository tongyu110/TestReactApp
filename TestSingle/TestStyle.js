import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class LotsOfStyles extends Component {

  constructor(props) {
    super(props);
    this.state = {'status':'test'};
  }

  render() {
    return (
      <View>
        <Text style="{styles.red}">just red - {this.state.status}</Text>
        <Text style="{styles.bigblue}">just bigblue</Text>
      </View>
    );
  }


}

const styles = StyleSheel.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
