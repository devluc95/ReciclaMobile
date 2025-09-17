// src/views/LoginScreen.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Image,
} from "react-native";
import { useLoginViewModel } from "../viewmodels/LoginViewsModel";
import { useNavigation } from "@react-navigation/native"; // 🚀 usar React Navigation

export default function LoginScreen() {
  const {
    user,
    setEmail,
    setPassword,
    loading,
    error,
    handleLogin,
    handleForgotPassword,
  } = useLoginViewModel();

  const navigation = useNavigation(); // 🚀 instancia de navegação

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      {/* Container da logo e do título */}
      <View style={styles.logoTitleContainer}>
        {/* Logo */}
        <Image source={require("../../assets/logo.png")} style={styles.logoSmall} resizeMode="contain" />

        {/* Título */}
        <Text style={styles.title}>Recicla Fácil</Text>
      </View>

      {/* Campo de Email com rótulo */}
      <View
        style={{
          width: "80%",
          marginBottom: 15,
          alignSelf: "center",
          margin: 25,
        }}
      >
        <Text
          style={{
            color: "#fff",
            marginBottom: 5,
            fontSize: 14,
            textAlign: "left",
          }}
        >
          E-mail
        </Text>
        <TextInput
          style={[styles.input, { width: "100%" }]}
          placeholder="seu@email.com"
          value={user.email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Campo de Senha com rótulo */}
      <View style={{ width: "80%", marginBottom: 15, alignSelf: "center" }}>
        <Text
          style={{
            color: "#fff",
            marginBottom: 5,
            fontSize: 14,
            margin: 5,
            textAlign: "left",
          }}
        >
          Senha
        </Text>
        <TextInput
          style={[styles.input, { width: "100%" }]}
          placeholder="*********"
          value={user.password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Mensagem de erro */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Botão de Login */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Saldo")}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#1B5E20" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      {/* Registrar */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")} // 🚀 navegação para RegisterScreen
      >
        <Text style={styles.registerText}>Criar conta</Text>
      </TouchableOpacity>

      {/* Esqueceu a senha */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B5E20",
    paddingHorizontal: 1,
  },
  logoTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logoSmall: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold" },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    width: "80%",
    marginTop: 10,
  },
  buttonText: { color: "#1B5E20", fontSize: 16, fontWeight: "bold" },
  registerButton: {
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  registerText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  forgotText: {
    color: "#BDBDBD",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
  error: { color: "red", textAlign: "center", marginBottom: 10 },
});
