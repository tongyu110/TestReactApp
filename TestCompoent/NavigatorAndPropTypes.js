import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {View,Text,TouchableHighlight} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{component: MyScene, title: 'My Initial Scene'}}
        style={{flex: 1}}
        renderScene={(route,navigator)=>{
          let Component = route.component;
          return <Component title='dfdf' {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
