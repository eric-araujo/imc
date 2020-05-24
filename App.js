import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, AsyncStorage } from 'react-native';

import imageCard from './img/imageCard.png';

import styles from './css/style';

export default function App() {

  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('0');

  function calcularIMC() {


  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <View>
        <Text style={styles.labelFormulario}>Peso</Text>
        <TextInput name="peso" keyboardType="numeric" style={styles.input} onChangeText={(peso) => setPeso(peso)}></TextInput>
  <Text style={styles.labelFormulario}>Altura {peso} {altura}</Text>
        <TextInput name="altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => setAltura(altura)}></TextInput>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonCalcular} onPress={calcularIMC()}>
          <Text style={styles.labelCalcular}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.cartao}>
          <Text style={styles.labelCard}>Eric Araújo Lima</Text>
          <Text style={styles.labelCard}>IMC: 25.00</Text>
          <Text style={styles.labelCard}>Sobrepeso</Text>
          <Image style={styles.imageCard} source={imageCard}></Image>
        </View>
        <View style={styles.cartao}>
          <Text style={styles.labelCard}>Eric Araújo Lima</Text>
          <Text style={styles.labelCard}>IMC: 25.00</Text>
          <Text style={styles.labelCard}>Sobrepeso</Text>
          <Image style={styles.imageCard} source={imageCard}></Image>
        </View>
        <View style={styles.cartao}>
          <Text style={styles.labelCard}>Eric Araújo Lima</Text>
          <Text style={styles.labelCard}>IMC: 25.00</Text>
          <Text style={styles.labelCard}>Sobrepeso</Text>
          <Image style={styles.imageCard} source={imageCard}></Image>
        </View>
      </ScrollView>
    </View>
  );
}
