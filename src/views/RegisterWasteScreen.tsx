import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

import { useRegisterWasteViewModel } from "../viewmodels/RegisterWasteViewModel";

export default function RegisterWasteScreen() {
  const {
    wasteType,
    setWasteType,
    weight,
    setWeight,
    handleUploadPhoto,
    handleRegister,
  } = useRegisterWasteViewModel();

  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    { label: "Papel", value: "papel" },
    { label: "Plástico", value: "plastico" },
    { label: "Metal", value: "metal" },
    { label: "Vidro", value: "vidro" },
    { label: "Eletrônico", value: "eletronico" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Botão de seta voltar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            /* ação futura */
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Recicla Fácil</Text>
          <Text style={styles.headerSubtitle}>Cadastrar de Resíduos</Text>
        </View>
      </View>

      <Text style={styles.label}>Tipo de Resíduo</Text>

      <DropDownPicker
        open={open}
        value={wasteType}
        items={items}
        setOpen={setOpen}
        setValue={setWasteType}
        setItems={setItems}
        placeholder="Selecione um tipo"
        style={{
          backgroundColor: "#2E7D32",
          borderColor: "#2E7D32",
          marginTop: 6,
        }}
        dropDownContainerStyle={{
          backgroundColor: "#388E3C",
          borderColor: "#2E7D32",
        }}
        textStyle={{
          color: "#fff",
        }}
        placeholderStyle={{
          color: "#ccc",
        }}
      />

      <Text style={styles.label}>Peso (Kg)</Text>

      <TextInput
        style={styles.input} keyboardType="numeric" value={weight}onChangeText={(text) => setWeight(text)}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPhoto}>
        <Text style={styles.uploadText}>📷 Upload Foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Cadastrar Resíduo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1B5E20", padding: 25 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    paddingTop: 15,
  },

  backButton: {
    marginRight: 12,
  },

  logo: { 
    width: 40, 
    height: 40, 
    borderRadius: 6, 
    marginRight: 0 
  },

  headerTitle: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  },

  headerSubtitle: { 
    color: "#fff", 
    fontSize: 14 
  },

  label: { 
    color: "#fff", 
    fontSize: 16, 
    marginTop: 10 
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 6,
  },

  uploadButton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  uploadText: { color: "#1B5E20", fontWeight: "bold" },

  registerButton: {
    backgroundColor: "#2E7D32",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#fff",
  },

  registerText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
