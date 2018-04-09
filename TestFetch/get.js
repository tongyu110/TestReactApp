import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';

export default class Fetch extends Component {

  render() {

    return (

        <View>
          <TouchableHighlight
                underlayColor='rgb(210,260,260)'
                style={{padding: 10, marginTop: 10, borderRadius: 5,}}
                onPress={this.get}
            >
                <Text >get请求</Text>
            </TouchableHighlight>
        </View>

    );

  }

  get() {
      fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32', {
          method: 'GET',
      }).then((response) => {
          console.log(response);//1
      }).catch((err) => {//2
          console.error(err);
      });
  }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
});
