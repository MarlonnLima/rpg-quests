import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Input from "../../components/Input";
import ButtonCreate from "../../components/ButtonCreate";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>
          <Text style={styles.textoAzul}>RPG </Text>
          <Text style={styles.textoRoxo}>Quests</Text>
        </Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.containerInput}>
          <Input placeholder="Adicione uma nova tarefa" />
          <ButtonCreate />
        </View>
      </View>
    </View>
  );
}
