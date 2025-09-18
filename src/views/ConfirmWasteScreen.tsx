import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ConfirmWasteScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons
          name="checkmark-circle"
          size={82}
          color="#fff"
        />
      </View>
      <Text style={styles.title}>Resíduo Cadastrado!</Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoKg}>kg</Text>
        <Text style={styles.infoValue}>+R$</Text>
      </View>
      <Text style={styles.subtitle}>Parabéns, você contribuiu para um mundo mais sustentável!</Text>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Saldo')}
      >
        <Text style={styles.primaryText}>Ver saldo atualizado</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Extrato')}
      >
        <Text style={styles.secondaryText}>Ver Histórico</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5E20',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  iconBox: {
    marginBottom: 14,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 22,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  infoCard: {
    backgroundColor: '#6da486',
    borderRadius: 15,
    width: '78%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    marginBottom: 13,
  },
  infoKg: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 8,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  infoValue: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 36,
    marginTop: 4,
    fontWeight: '500',
    lineHeight: 18,
    opacity: 0.94,
  },
  primaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    width: '78%',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  primaryText: {
    color: '#276846',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.1,
  },
  secondaryButton: {
    borderWidth: 1.5,
    borderColor: '#5b7c6e',
    paddingVertical: 12,
    borderRadius: 10,
    width: '78%',
    alignItems: 'center',
    marginBottom: 0,
  },
  secondaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ConfirmWasteScreen;
