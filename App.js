import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndText from './ViewBoxesWithColorAndText';
import DisplayandImage from './DisplayandImage';
import LotsOfGreeting from './LotsOfGreeting';
import CustomText from './CustomText';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      <CustomText/>
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
