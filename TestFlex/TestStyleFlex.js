import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default class flexbox extends Component {

  render() {
    return (
      <View style={stylesAlignSelf.container}>
        <View style={stylesAlignSelf.view1}></View>
        <View style={stylesAlignSelf.view2}></View>
      </View>
    );
  }

}
//在不设置 flexDirection 下，默认值是 column 纵向排序
const styles = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'gray'
  },
  view1: {
    height: 150,
    width: 150,
    backgroundColor: 'red'
  },
  view2: {
    height: 150,
    width: 150,
    backgroundColor: 'green'
  }
});

// 当 flexDirection=row 时横向排序，flexWrap 属性表明子组件 “溢出” 父组件时是否换行，取值有 nowrap(默),wrap以及 wrap-reverse
const stylesDirection = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'gray',flexDirection: 'row'
  },
  view1: {
    height: 200,
    width: 200,
    backgroundColor: 'red'
  },
  view2: {
    height: 200,
    width: 200,
    backgroundColor: 'green'
  }
});

const stylesWrap = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'gray',flexDirection: 'row',flexWrap: 'wrap'
  },
  view1: {
    height: 200,
    width: 200,
    backgroundColor: 'red'
  },
  view2: {
    height: 200,
    width: 200,
    backgroundColor: 'green'
  }
});

// justifyContent 属性表明子组件中子组件横向排列在其父容器的哪个位置
// 取值, flex-start、flex-end、center、space-between、space-around

const stylesJustify = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'gray',flexDirection: 'row',justifyContent:'center'
  },
  view1: {
    height: 150,
    width: 150,
    backgroundColor: 'red'
  },
  view2: {
    height: 150,
    width: 150,
    backgroundColor: 'green'
  }
});

// alignItems 属性表明子组件中子组件纵向排列在其父容器的哪个位置，
// 取值有 flex-start、flex-end、center、baseline、stretch

const stylesAlign = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'gray', alignItems:'center'
  },
  view1: {
    height: 150,
    width: 150,
    backgroundColor: 'red'
  },
  view2: {
    height: 150,
    width: 150,
    backgroundColor: 'green'
  }
});

const stylesCenter = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'gray', alignItems:'center',justifyContent:'center'
  },
  view1: {
    height: 150,
    width: 150,
    backgroundColor: 'red'
  },
  view2: {
    height: 150,
    width: 150,
    backgroundColor: 'green'
  }
});

// alignSelf 属性表明某个特定组件的排列情况，取值有 auto、flex-start、flex-end、center、stretch

const stylesAlignSelf = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'gray'
  },
  view1: {
    height: 150,
    width: 150,
    backgroundColor: 'red'
  },
  view2: {
    height: 150,
    width: 150,
    backgroundColor: 'green',
    alignSelf: 'center'
  }
});
