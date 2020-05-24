import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, AsyncStorage, Alert, FlatList } from 'react-native';

import imageCard from './img/imageCard.png';

import styles from './css/style';

export default function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const objUsuarios = [
    {
      nome: 'Eric Araújo Lima',
      imc: '25.00',
      mensagem: 'Sobrepeso',

    },
    {
      nome: 'Eric Araújo Lima',
      imc: '25.00',
      mensagem: 'Sobrepeso',

    },
    {
      nome: 'Eric Araújo Lima',
      imc: '25.00',
      mensagem: 'Sobrepeso',

    },
  ];

  function Card({ nome, imc, mensagem }) {
    return (
      <View style={styles.cartao}>
        <Text style={styles.labelCard}>{nome}</Text>
        <Text style={styles.labelCard}>IMC: {imc}}</Text>
        <Text style={styles.labelCard}>{mensagem}</Text>
        <Image style={styles.imageCard} source={imageCard}></Image>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <View>
        <Text style={styles.labelFormulario}>Peso</Text>
        <TextInput name="peso" keyboardType="numeric" style={styles.input} onChangeText={(peso) => setPeso(peso)}></TextInput>
        <Text style={styles.labelFormulario}>Altura</Text>
        <TextInput name="altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => setAltura(altura)}></TextInput>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonCalcular}>
          <Text style={styles.labelCalcular}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={objUsuarios}
        renderItem={({ item }) => <Card nome={item.nome} imc={item.imc} mensagem={item.mensagem} />}
      />
    </View>
  );
}
