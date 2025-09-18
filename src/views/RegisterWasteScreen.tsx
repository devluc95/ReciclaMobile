import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const materialGroups = [
  {
    type: 'Plastico',
    options: [
      'Selecione',
      'PEAD Branco',
      'PEAD Colorido',
      'PET Azul',
      'PET Incolor',
      'PET Misturada',
      'PET Verde',
      'PET Óleo',
      'PP Colorido',
      'PEBD Colorido',
      'PEBD Incolor',
      'PVC',
      'PP Branco',
    ],
  },
  {
    type: 'Papel',
    options: ['Selecione','Papel Misto', 'Ondulado 1', 'Caixaria', 'Longa Vida (Tetrapak)'],
  },
  {
    type: 'Vidro',
    options: ['Selecione','Vidro temperado', 'Vidro comum', 'Vidro laminado', 'Vidro Misto'],
  },
  {
    type: 'Metal',
    options: ['Selecione','Alumínio Latinha', 'Ferro Sucata', 'Aço Inox'],
  },
  {
    type: 'Orgânico',
    options: ['Orgânico'],
  },
];

const pickerValues: Record<string, number> = {
  'PEAD Branco': 2.5,
  'PEAD Colorido': 2.5,
  'PET Azul': 2.5,
  'PET Incolor': 2.5,
  'PET Misturada': 1.5,
  'PET Verde': 2.5,
  'PET Óleo': 0.5,
  'PP Colorido': 2.5,
  'PEBD Colorido': 0.3,
  'PEBD Incolor': 1.2,
  'PVC': 0.5,
  'PP Branco': 1,
  'Papel Misto': 0.07,
  'Ondulado 1': 0.25,
  'Caixaria': 2,
  'Longa Vida (Tetrapak)': 0.1,
  'Vidro temperado': 0,
  'Vidro comum': 0,
  'Vidro laminado': 0,
  'Vidro Misto': 0.05,
  'Alumínio Latinha': 4,
  'Ferro Sucata': 0.7,
  'Aço Inox': 1.1,
  'Orgânico': 0,
};

const RegisterWasteScreen: React.FC = () => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [selectedSubtype, setSelectedSubtype] = useState(materialGroups[0].options[0]);
  const [weight, setWeight] = useState('1');
  const [menuVisible, setMenuVisible] = useState(false);

  const logo = require('../../assets/logo.png');

  const navigation = useNavigation();

  const handleTypeSelect = (index: number) => {
    setSelectedTypeIndex(index);
    setSelectedSubtype(materialGroups[index].options[0]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Saldo')}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Image source={logo} style={styles.smallLogo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Planeta Verde</Text>
          <Text style={styles.headerSubtitle}>Cadastrar de Resíduos</Text>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Barra de seleção dos tipos */}
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={styles.arrowButton}
          disabled={selectedTypeIndex === 0}
          onPress={() => handleTypeSelect(Math.max(0, selectedTypeIndex - 1))}
        >
          <Ionicons name="chevron-back" size={20} color="#fff" />
        </TouchableOpacity>
        {materialGroups.map((group, index) => (
          <TouchableOpacity
            key={group.type}
            style={[
              styles.filterButton,
              selectedTypeIndex === index && styles.filterButtonSelected,
            ]}
            onPress={() => handleTypeSelect(index)}
          >
            <Text
              style={[
                styles.filterText,
                selectedTypeIndex === index && styles.filterTextSelected,
              ]}
            >
              {group.type}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.arrowButton}
          disabled={selectedTypeIndex === materialGroups.length - 1}
          onPress={() => handleTypeSelect(Math.min(materialGroups.length - 1, selectedTypeIndex + 1))}
        >
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Formulário */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{ width: '100%', marginTop: 12 }}>
          <Text style={styles.label}>Tipo de Resíduo</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedSubtype}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedSubtype(itemValue)}
              dropdownIconColor="#316241"
            >
              {materialGroups[selectedTypeIndex].options.map((option) => (
                <Picker.Item label={option} value={option} key={option} />
              ))}
            </Picker>
          </View>
          {pickerValues[selectedSubtype] !== undefined && (
            <Text style={styles.priceLabel}>
              {`Preço: R$ ${pickerValues[selectedSubtype].toFixed(2)} /kg`}
            </Text>
          )}

          <Text style={styles.label}>Peso (Kg)</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            keyboardType="decimal-pad"
          />

          <TouchableOpacity style={styles.photoButton}>
            <Ionicons name="camera-outline" size={24} color="#316241" style={{ marginRight: 8 }} />
            <Text style={styles.photoButtonText}>Tirar Foto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('ConfirmWaste')}>
            <Text style={styles.mainButtonText}>Cadastrar Resíduo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const COLOR_BG = '#1B5E20';
const COLOR_BTN = '#fff';
const COLOR_BTN_TEXT = '#316241';
const COLOR_TITLE = '#fff';
const COLOR_SUBTITLE = '#d6eedb';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BG,
    paddingTop: 48,
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  backButton: {
    paddingRight: 8,
    paddingVertical: 4,
  },
  smallLogo: {
    width: 28,
    height: 28,
    borderRadius: 6,
    marginLeft: 2,
  },
  headerTitle: {
    color: COLOR_TITLE,
    fontSize: 16,
    fontWeight: '600',
  },
  headerSubtitle: {
    color: COLOR_SUBTITLE,
    fontSize: 13,
    marginTop: 2,
  },
  menuButton: {
    marginLeft: 'auto',
    marginRight: 0,
    padding: 8,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 14,
    paddingHorizontal: 6,
    marginBottom: 32,
    marginTop: 20,
  },
  arrowButton: {
    padding: 2,
  },
  filterButton: {
    paddingVertical: 7,
    paddingHorizontal: 7,
    marginHorizontal: 3,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  filterButtonSelected: {
    backgroundColor: '#fff',
  },
  filterText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  filterTextSelected: {
    color: '#316241',
    fontWeight: 'bold',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 48,
  },
  label: {
    color: COLOR_TITLE,
    fontWeight: '500',
    marginBottom: 8,
    marginLeft: 3,
    fontSize: 16,
    marginTop: 8,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 4,
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#316241',
  },
  priceLabel: {
    color: '#ffffffba',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 22,
    paddingVertical: 13,
    marginBottom: 20,
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_BTN,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 36,
    alignSelf: 'center',
    marginBottom: 22,
    elevation: 2,
    marginTop: 20,
  },
  photoButtonText: {
    color: COLOR_BTN_TEXT,
    fontSize: 16,
    fontWeight: '600',
  },
  mainButton: {
    backgroundColor: COLOR_BTN,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    alignSelf: 'center',
    width: '88%',
    elevation: 2,
    marginTop: 20,
  },
  mainButtonText: {
    color: COLOR_BTN_TEXT,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RegisterWasteScreen;
