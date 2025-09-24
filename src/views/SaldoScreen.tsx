import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSaldoViewModel } from "../viewmodels/SaldoViewModel";

export default function SaldoScreen({ navigation }) {
  const { saldo, getItens } = useSaldoViewModel();
  const movimentos = getItens();

  // Demo para dividir saldo entre resgatável e pendente
  const saldoResgate = 20.0;
  const saldoPendente = 10.0;

  // Função para ícone, vermelho se pendente, verde se aprovado
  const getIconData = (item, idx) => {
    if (idx === 0) {
      return { name: "alert-circle", color: "#a12b22" };
    }
    return { name: "checkmark-circle", color: "#607e6a" };
  };

  const renderItem = ({ item, index }) => {
    const iconData = getIconData(item, index);
    return (
      <View style={styles.movimentoRow}>
        <Ionicons
          name={iconData.name}
          size={18}
          color={iconData.color}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.movimentoTexto}>{`R$ ${parseFloat(item.valor).toFixed(2).replace(".", ",")}`}</Text>
        <View style={{ flex: 1 }} />
        <Text style={styles.movimentoData}>{item.data}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Planeta Verde</Text>
          <Text style={styles.headerSubtitle}>Saldo</Text>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Saldo label */}
      <Text style={styles.saldoInfo}>Seu saldo para resgate</Text>
      <Text style={styles.saldoResgate}>
        R$ {saldoResgate.toFixed(2).replace(".", ",")}
      </Text>
      <Text style={styles.saldoInfo}>Saldo Pendente de Aprovação</Text>
      <Text style={styles.saldoPendente}>
        R$ {saldoPendente.toFixed(2).replace(".", ",")}
      </Text>

      {/* Movimentações */}
      <FlatList
        data={movimentos}
        renderItem={renderItem}
        keyExtractor={(_, idx) => String(idx)}
        contentContainerStyle={styles.movimentoContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Botões */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Extrato")}>
          <Text style={styles.buttonText}>Ver Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")}>
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 12,
  },
  menuButton: {
    marginLeft: "auto",
    padding: 3,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginLeft: 6,
    marginRight: 3,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  headerSubtitle: {
    color: "#bbd9c6",
    fontSize: 13,
    marginTop: 1,
    fontWeight: "500",
    letterSpacing: 0.1,
  },
  saldoInfo: {
    color: "#fff",
    textAlign: "center",
    marginTop: 32,
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.94,
    marginBottom: 4,
  },
  saldoResgate: {
    color: "#fff",
    fontSize: 52,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginBottom: 11,
    textAlign: "center",
  },
  saldoPendente: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginBottom: 16,
    textAlign: "center",
  },
  movimentoContainer: {
    flexGrow: 0,
    marginHorizontal: 32,
    marginBottom: 31,
    marginTop: 20,
  },
  movimentoRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 7,
    marginBottom: 7,
    minHeight: 22,
  },
  movimentoTexto: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    marginRight: 16,
  },
  movimentoData: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 220,
    marginTop: 19,
    gap: 18,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 32,
    marginHorizontal: 8,
    minWidth: 128,
    elevation: 3,
  },
  buttonText: {
    color: "#276846",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0.2,
  },
});