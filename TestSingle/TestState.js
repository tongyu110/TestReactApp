import React,{Component} from 'react';
import {Text,View} from 'react-native';

class Blink extends Component {

  constructor(props) {
    super(props);
    this.state = {showText:true};

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(()=>{
      this.setState(previousState=>{
        return { showText: !previousState.showText };
      });
    },1000);
  }

  render() {
    let display = this.state.showText?this.props.text:'';
    return (
      <Text>{display}</Text>
    );
  }

}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
      </View>
    );
  }
}
