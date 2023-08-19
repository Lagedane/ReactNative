import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ViewBoxesWithColorAndText from "./ViewBoxesWithColorAndText";
import DisplayandImage from "./DisplayandImage";
import LotsOfGreeting from "./LotsOfGreeting";
import CustomText from "./CustomText";
import Counter from "./Counter";
import MyInput from "./MyInput";
import IncrementCounter from "./IncrementCounter";
import Form from "./Form";
import Login from "./Login";
import RandomUserScreen from "./RandomUserScreen";
import FlatList_Example1 from "./FlatList_Example1";
import FlatList_HeaderFooter from "./FlatList_HeaderFooter";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      {/* <CustomText/> */}
      {/* {<Counter/>}   */}
      {/* {<MyInput/>} */}
      {/* {<IncrementCounter/>} */}
      {/* <Form /> */}
      {/* <Login/> */}
      {/* {<RandomUserScreen />} */}
      {/* {<FlatList_Example1/>} */}
      {<FlatList_HeaderFooter/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
