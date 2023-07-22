import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndText from './ViewBoxesWithColorAndText';
import DisplayandImage from './DisplayandImage';
import LotsOfGreeting from './LotsOfGreeting';
import CustomText from './CustomText';
import Counter from './Counter';
import MyInput from './MyInput';
import IncrementCounter from './IncrementCounter';
import Form from './Form';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      {/* <CustomText/> */}
      {/* {<Counter/>}   */}
      {/* {<MyInput/>} */}
      {/* {<IncrementCounter/>} */}
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
