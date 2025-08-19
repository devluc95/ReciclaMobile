// src/views/WelcomeScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useWelcomeViewModel } from "../viewmodels/WelcomeViewModel";

export default function WelcomeScreen() {
  const { loading, handleStart } = useWelcomeViewModel();

  return (
    <View style={styles.container}>
      {/* Ícone central */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Image
            source={require("../../assets/logo.png")} // coloque sua logo em assets
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Linha */}
      <View style={styles.line} />

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleStart} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#2E7D32" />
        ) : (
          <Text style={styles.buttonText}>Começar</Text>
        )}
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
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: "#1B5E20",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  logo: {
    width: 140,
    height: 140,
    tintColor: "",
  },
  line: {
    width: 150,
    height: 4,
    backgroundColor: "#BDBDBD",
    borderRadius: 2,
    marginVertical: 30,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    color: "#1B5E20",
    fontSize: 16,
    fontWeight: "bold",
  },
});