import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

import imageCard from './img/imageCard.png';

import styles from './css/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <View>
        <Text style={styles.label}>Peso</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.label}>Altura</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonCalcular}>
          <Text style={styles.labelCalcular}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGravar}>
          <Text style={styles.labelGravar}>Gravar</Text>
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
