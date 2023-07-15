import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

const DisplayandImage = () => {
  return (
    <View style = {{flex:1,paddingTop:50}}>
      <Image
        style = {styles.tinyLogo}
        source = {require('../assets/react_logo.png')}
      />
      <Image
        style = {{width: 50,height:50}}
        source = {{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Text>aaaa</Text>
    </View>
  )
}

export default DisplayandImage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 50,
    },
    tinyLogo:{
        width: 50,
        heigth: 50,
    },
    logo:{
        width: 60,
        heigth: 58,
    }

})