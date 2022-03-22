import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import {Icon} from 'react-native-elements';

export default function App() {

  const [calculations, setCalculations] = useState('');
  const [result, setResult] = useState('0');
  const [previousCalculations, setPreviousCalculations] = useState('');
  const [toggle, setToggle] = useState(false);

  const expo = (x, f) => {
    return Number.parseFloat(x).toExponential(f);
  }

  const oprators = (op) => {
    var calc = calculations + op;
    if ((op === '+') | (op === '-') | (op === '*') | (op === '/') | (op === '%')) {
      setCalculations(calc);
    }
    else if (op === '='){
      console.log('two :', calculations);
      var my_result = eval(calculations);
      if (my_result === 0){
        setCalculations('');
      }
      else{
        setCalculations(my_result);
      }
      setResult("= " + my_result);
      setPreviousCalculations(calculations);
    }
    else{
      var my_result = eval(calc);
      setCalculations(calc);
      setToggle(false);
      setResult("= " + my_result);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.previousCalculations}>
        <Text style={styles.previousCalculationsText}>{previousCalculations}</Text>
      </View>
      <View style={styles.calculations}>
        <Text style={styles.calculationsText}>{calculations}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.Buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            {toggle ? 
              <TouchableHighlight style={styles.viewOprator} onPress={() => setPreviousCalculations('')}>
                <Text style={styles.smallText}>AC</Text>
              </TouchableHighlight>
              :
              <TouchableHighlight style={styles.viewOprator} onPress={() => {
                setCalculations('');
                setResult('');
                setToggle(true);
                }}>
                <Text style={styles.smallText}>C</Text>
              </TouchableHighlight>
            }
            <TouchableHighlight style={styles.viewOprator} onPress={() => setCalculations(calculations.slice(0, -1))}>
              <Icon name='backspace' color={'orange'} style={styles.smallText} type='material'/>
            </TouchableHighlight>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('%')}>
              <Text style={styles.smallText}>%</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('7')}>
              <Text style={styles.digit}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('8')}>
              <Text style={styles.digit}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('9')}>
              <Text style={styles.digit}>9</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('4')}>
              <Text style={styles.digit}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('5')}>
              <Text style={styles.digit}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('6')}>
              <Text style={styles.digit}>6</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('1')}>
              <Text style={styles.digit}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('2')}>
              <Text style={styles.digit}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('3')}>
              <Text style={styles.digit}>3</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('00')}>
              <Text style={styles.digit}>00</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('0')}>
              <Text style={styles.digit}>0</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('.')}>
              <Text style={styles.digit}>.</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.oprators}>
          <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('+')}>
            <Text style={styles.opratorText}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('-')}>
            <Text style={styles.opratorText}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('*')}>
            <Text style={styles.opratorText}>*</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.viewOprator} onPress={() => oprators('/')}>
            <Text style={styles.opratorText}>/</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.viewOprator}  onPress={() => oprators('=')}>
            <View style={styles.equalsOprator}>
              <Text style={styles.equals}>=</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  show: {
    flex: 2,
    backgroundColor: 'white',
  },
  previousCalculations: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  calculations: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  result: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  Buttons: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  numbers: {
    flex: 9,
  },
  oprators: {
    flex: 3,
  },
  viewOprator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  equalsOprator: {
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 100,
    width: 65,
    height: 65,
  },
  opratorText: {
    fontSize: 45,
    color: 'orange',
  },
  smallText: {
    paddingTop: 10,
    fontSize: 30,
    color: 'orange',
  },
  digit: {
    fontSize: 40,
    color: 'black',
  },
  equals: {
    fontSize: 45,
    color: 'white',
  },
  previousCalculationsText: {
    padding: 5,
    paddingRight: 25,
    fontSize: 25,
  },
  calculationsText: {
    padding: 5,
    paddingRight: 25,
    fontSize: 40,
  },
  resultText: {
    padding: 5,
    paddingRight: 25,
    fontSize: 30,
  },
});
