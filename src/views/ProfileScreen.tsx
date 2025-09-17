import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const logo = require('../../assets/logo.png');
  const avatar = require('../../assets/avatar-placeholder.png');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Saldo')}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={logo} style={styles.smallLogo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Recicla Fácil</Text>
          <Text style={styles.headerSubtitle}>Perfil</Text>
        </View>
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('Menu')}
        >
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{ height: 34 }} />
      <View style={styles.avatarRow}>
        <Image source={avatar} style={styles.avatar} />
        <View style={{ marginLeft: 18 }}>
          <Text style={styles.userName}>Nome de Usuário</Text>
          <Text style={styles.userEmail}>usuario@email.com.br</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Ionicons
          name="pencil"
          size={22}
          color="#316241"
          style={styles.leftIcon}
        />
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Instagram')}>
        <Ionicons
          name="logo-instagram"
          size={22}
          color="#316241"
          style={styles.leftIcon}
        />
        <Text style={styles.buttonText}>Conectar Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Saldo')}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    padding: 10,
    paddingTop: 45,
    paddingHorizontal: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  backButton: {
    paddingRight: 10,
    paddingLeft: 2,
    paddingVertical: 4,
  },
  smallLogo: {
    width: 33,
    height: 33,
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
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 8,
    width: '100%',
    justifyContent: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e9e9e9',
  },
  userName: {
    color: COLOR_TITLE,
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 3,
  },
  userEmail: {
    color: COLOR_SUBTITLE,
    fontSize: 14,
  },
  button: {
    width: '90%',
    backgroundColor: COLOR_BTN,
    borderRadius: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 7,
    justifyContent: 'center',
  },
  leftIcon: {
    marginRight: 14,
  },
  buttonText: {
    color: COLOR_BTN_TEXT,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
