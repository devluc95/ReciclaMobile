import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSaldoViewModel } from "../viewmodels/SaldoViewModel";
import { useNavigation } from "@react-navigation/native"; // Import navigation

export default function SaldoScreen() {
  const { saldo } = useSaldoViewModel();
  const navigation = useNavigation(); // Instanciação do navigation

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Recicla Fácil</Text>
          <Text style={styles.headerSubtitle}>Saldo</Text>
        </View>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Menu")}
        >
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Saldo */}
      <Text style={styles.saldoLabel}>Seu saldo atual</Text>
      <Text style={styles.saldoValor}>R$ {saldo.total},00</Text>

      {/* Movimentações */}
      <FlatList
        data={saldo.movimentos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.movimento}>
            <Text style={styles.movimentoTexto}>R$ {item.valor},00</Text>
            <Text style={styles.movimentoData}>{item.data}</Text>
          </View>
        )}
      />

      {/* Botões */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Extrato")} // Navega para Extrato
        >
          <Text style={styles.buttonText}>Ver Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")} // Navega para Profile
        >
          <Text style={styles.buttonText}>Ver Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E20",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 25,
  },
  menuButton: {
    marginLeft: 'auto',
    marginRight: 0,
    padding: 8,
  },
  logo: {
    width: 32,
    height: 32,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 12,
  },
  saldoLabel: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 4,
    marginTop: 85,
  },
  saldoValor: {
    color: "#fff",
    fontSize: 50,
    textAlign: "center",
    marginBottom: 24,
  },
  movimento: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 5,
    marginLeft: 35,
    marginRight: 35,
  },
  movimentoTexto: {
    color: "#fff",
    fontSize: 16,
  },
  movimentoData: {
    color: "#fff",
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 32,
    marginVertical: 400,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: 150,
  },
  buttonText: {
    color: "#1B5E20",
    fontWeight: "bold",
    textAlign: "center",
  },
});
