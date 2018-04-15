import React,{Component} from 'react';
import {View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import Home from './Home';
import Temp from './Temp';

export default class Index extends Component {

  render() {
    return(

      <Navigator
        initialRoute={{
            name:'Home',    // 名称
            component:Home  // 要跳转的板块
        }}

        renderScene={(route, navigator) => {    // 将板块生成具体的组件
                let Component = route.component;    // 获取路由内的板块
                return <Component {...route.params} navigator={navigator} />    // 根据板块生成具体组件
        }}
      />
      

    );
  }

}
