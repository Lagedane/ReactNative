import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({fName, lName}) => {
    return (
        <View>
           <Text>Your first name is {fName}! and Last Name is {lName}</Text> 
        </View>
    )
}
const CustomText = () => {
  return (
    <View style = {{alignItems: 'center', top: 50}}>
      <MyCustomTextWith fName = "Lada" lName = "Watanadilogkul" />
      <MyCustomTextWith fName = "Tharit" lName = "Ruangphungluang" />
    </View>
  )
}

export default CustomText

const styles = StyleSheet.create({})