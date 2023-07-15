import { View, Text,StyleSheet } from 'react-native'
import React from 'react'



const ViewBoxesWithColorAndText = () => {
  return (
    <View>
      <Text>ViewBoxesWithColorAndText</Text>
      <Text>This is yor first App.</Text>
      <text>Enjoy react native coding</text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
       flex:1,   
       justifyContent:'center',    
       alignItems:'center'   
    }
})

export default ViewBoxesWithColorAndText