import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import Checkbox from "expo-checkbox";

export default function LoginScreen({ navigation }: any) {
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!matricula && !password) {
      Alert.alert("Atenção", "Preencha a matrícula e a senha.");
      return;
    }
    if (!matricula) {
      Alert.alert("Atenção", "Preencha o campo matrícula.");
      return;
    }
    if (!password) {
      Alert.alert("Atenção", "Preencha o campo senha.");
      return;
    }
    if (matricula === "9876543" && password === "123") {
      navigation.replace("Saldo");
    } else {
      Alert.alert("Erro", "Matrícula ou senha incorretos.");
    }
  };

  const handleForgotPassword = () => {
    // Navegar ou alertar para tela de recuperação de senha, se desejar
    Alert.alert("Função ainda não disponível!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoTitleContainer}>
        <View style={styles.logoBox}>
          <Image source={require("../../assets/logo.png")} style={styles.logo} />
        </View>
        <Text style={styles.title}>Planeta Verde</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Matrícula</Text>
        <TextInput
          style={styles.input}
          placeholder="999999-0"
          placeholderTextColor="#b2b2b2"
          keyboardType="default"
          autoCapitalize="none"
          value={matricula}
          onChangeText={setMatricula}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#b2b2b2"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />

        {/* Checkbox para mostrar senha */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={showPassword}
            onValueChange={setShowPassword}
            color={showPassword ? "#4CAF50" : undefined}
          />
          <Text style={styles.checkboxLabel}>Mostrar Senha</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E20",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  logoBox: {
    width: 56,
    height: 56,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginRight: 12,
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  formContainer: {
    width: "90%",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 4,
    marginTop: 12,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#2E6136",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 5,
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPassword: {
    color: "#b2b2b2",
    marginTop: 1,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
