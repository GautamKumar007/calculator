import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.show}></View>
      <View style={styles.calculations}></View>
      <View style={styles.Buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <Button title='1'></Button>
            <Button title='2'></Button>
            <Button title='3'></Button>
          </View>
          <View style={styles.row}>
            <Button title='4'></Button>
            <Button title='5'></Button>
            <Button title='6'></Button>
          </View>
          <View style={styles.row}>
            <Button title='7'></Button>
            <Button title='8'></Button>
            <Button title='9'></Button>
          </View>
          <View style={styles.row}>
            <Button title='0'></Button>
            <Button title='.'></Button>
            <Button title='#'></Button>
          </View>
        </View>
        <View style={styles.oprators}>
            <Button title='+'></Button>
            <Button title='-'></Button>
            <Button title='*'></Button>
            <Button title='%'></Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
  },
  show: {
    flex: 2,
    backgroundColor: 'white',
  },
  calculations: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  Buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 2,
    backgroundColor: 'grey',
  },
  oprators: {
    flex: 1,
    backgroundColor: 'green',
  }

});
