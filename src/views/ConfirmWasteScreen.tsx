// src/views/ConfirmWasteScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ConfirmWasteScreen() {
  return (
    <View style={styles.container}>
      {/* Ícone de check */}
      <View style={styles.iconContainer}>
        <Ionicons name="checkmark-circle-outline" size={80} color="#fff" />
      </View>

      {/* Título */}
      <Text style={styles.title}>Resíduo Cadastrado!</Text>

      {/* Card com informações */}
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>kg</Text>
        <Text style={styles.infoText}>+R$</Text>
      </View>

      {/* Texto explicativo */}
      <Text style={styles.subtitle}>
        Parabéns, você contribuiu para um mundo mais sustentável!
      </Text>

      {/* Botão principal */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryText}>Ver saldo atualizado</Text>
      </TouchableOpacity>

      {/* Botão secundário */}
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Ver Histórico</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E20",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: "#336E4C",
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 40,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  infoText: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
  },
  primaryText: {
    color: "#1B5E20",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#2E7D32",
    paddingVertical: 14,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  secondaryText: {
    color: "#fff",
    fontSize: 16,
  },
});