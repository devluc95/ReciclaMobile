import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [bio, setBio] = useState('');
  const navigation = useNavigation();

  const avatar = require('../../assets/avatar-placeholder.png');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={require('../../assets/logo.png')} style={styles.smallLogo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Recicla Fácil</Text>
          <Text style={styles.headerSubtitle}>Editar Perfil</Text>
        </View>
        <View style={{ width: 30 }} />
      </View>

      {/* Espaço header/avatar */}
      <View style={{ height: 20 }} />

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatar} />
      </View>
      <TouchableOpacity style={styles.changePhotoButton}>
        <Text style={styles.changePhotoText}>Alterar foto</Text>
      </TouchableOpacity>

      {/* Formulário */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          placeholderTextColor="#b2b2b2"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="usuario@email.com.br"
          placeholderTextColor="#b2b2b2"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(61)9999-9999"
          placeholderTextColor="#b2b2b2"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
        />
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.bioInput]}
          placeholder="Apaixonado por reciclagem"
          placeholderTextColor="#b2b2b2"
          value={bio}
          onChangeText={setBio}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.saveButtonText}>Salvar</Text>
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
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  backButton: {
    paddingRight: 10,
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
    marginTop: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e9e9e9',
  },
  changePhotoButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 32,
    alignSelf: 'center',
    marginBottom: 1,
  },
  changePhotoText: {
    color: '#fff',
    fontSize: 16,
  },
  form: {
    width: '100%',
    marginBottom: 5,
  },
  label: {
    color: COLOR_TITLE,
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 2,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 7,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 8,
  },
  bioInput: {
    height: 56,
    textAlignVertical: 'top',
  },
  saveButton: {
    width: '100%',
    backgroundColor: COLOR_BTN,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  saveButtonText: {
    color: COLOR_BTN_TEXT,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EditProfileScreen;
