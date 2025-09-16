import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { useRegisterViewModel } from "../viewmodels/RegisterViewModel";

export default function RegisterScreen() {
  const { form, handleChange, handleRegister } = useRegisterViewModel();

  return (
    <View style={styles.container}>
      {/* LOGO + TEXTO NA MESMA LINHA */}
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Recicla Fácil</Text>
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="seu@email.com.br"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="***********"
        value={form.password}
        secureTextEntry={!form.showPassword}
        onChangeText={(text) => handleChange("password", text)}
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={form.showPassword}
          onValueChange={(value) => handleChange("showPassword", value)}
          color={form.showPassword ? "#4CAF50" : undefined}
        />
        <Text style={styles.checkboxLabel}>Mostrar Senha</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B5E20",
    padding: 20,
  },
  
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  label: {
    alignSelf: "flex-start",
    color: "#fff",
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 25,
  },
  input: {
    width: "90%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 25,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#1B5E20",
    fontWeight: "bold",
  },
});
