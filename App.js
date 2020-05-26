import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, AsyncStorage, Alert, FlatList } from 'react-native';

import imageCard from './img/imageCard.png';

import styles from './css/style';

export default function App() {

  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const [objUsuarios, setObjUsuarios] = useState([{}]);

  function Card({ nome, imc, mensagem }) {
    return (
      <View style={styles.cartao}>
        <Text style={styles.labelCard}>{nome}</Text>
        <Text style={styles.labelCard}>IMC: {imc}</Text>
        <Text style={styles.labelCard}>{mensagem}</Text>
        <Image style={styles.imageCard} source={imageCard}></Image>
      </View>
    );
  }

  function CalcularIMC() {

    const imc = peso / (altura / 100 * altura / 100);

    const parseIMC = parseFloat(imc.toFixed(2));

    let mensagem = "";

    if (parseIMC < 18.5) {

      mensagem = "Abaixo do peso";

    } else if (parseIMC >= 18.5 && parseIMC <= 24.9) {

      mensagem = "Peso normal";

    } else if (parseIMC >= 25 && parseIMC <= 29.9) {

      mensagem = "Sobrepeso";

    } else if (parseIMC >= 30 && parseIMC <= 34.9) {

      mensagem = "Obesidade grau 1";

    } else if (parseIMC >= 35 && parseIMC <= 39.9) {

      mensagem = "Obesidade grau 2";

    } else if (parseIMC > 40) {

      mensagem = "Obesidade grau 3";

    }

    Cadastrar(parseIMC, mensagem);

  }

  async function Cadastrar(imc, mensagem) {

    const objUsuario =
      [{
        nome: nome,
        imc: imc,
        mensagem: mensagem,
      }];

    await AsyncStorage.setItem('usuario', JSON.stringify(objUsuario)).then(() => {

      Alert.alert("Cadastrado com sucesso!");

      retornaRegistros();

    }).catch(error => {

      Alert.alert("ERRO", error);

    });

  }

  async function retornaRegistros() {

    await AsyncStorage.getItem('usuario').then((data) => {

      setObjUsuarios(JSON.parse(data));

    }).catch(error => {

      Alert.alert("ERRO", error);

    });

  }

  useEffect(() => {

    retornaRegistros();

  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <View>
        <Text style={styles.labelFormulario}>Nome</Text>
        <TextInput name="nome" style={styles.input} onChangeText={(nome) => setNome(nome)}></TextInput>
        <Text style={styles.labelFormulario}>Peso</Text>
        <TextInput name="peso" keyboardType="numeric" style={styles.input} onChangeText={(peso) => setPeso(peso)}></TextInput>
        <Text style={styles.labelFormulario}>Altura</Text>
        <TextInput name="altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => setAltura(altura)}></TextInput>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonCalcular} onPress={() => { CalcularIMC() }}>
          <Text style={styles.labelCalcular}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={objUsuarios}
        renderItem={({ item }) => <Card nome={item.nome} imc={item.imc} mensagem={item.mensagem} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
