import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!name.trim() && !mail.trim()) {
      alert("Please Enter Name and Email");
      return;
    }
    if (!name.trim()) {
      alert("Please Enter Name");
      return;
    }
    //Check for the Email TextInput
    if (!mail.trim()) {
      alert("Please Enter Email");
      return;
    }
    //Checked Successfully
    //Do whatever you want
    alert("Success");
  };

  return (
    <View View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        style={styles.textInputStyle}
        value={name}
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <TextInput
        placeholder="Enter Email"
        style={styles.textInputStyle}
        value={mail}
        onChangeText={(value) => {
          setMail(value);
        }}
      />
      <Text>{"\n"}</Text>
      <Button title="SUBMIT" onPress={() => checkTextInput()} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "150%",
    width: 300,
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
