import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const FollowInstagramScreen: React.FC = () => {
  const logo = require('../../assets/logo.png');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => { /* ação voltar */ }}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={logo} style={styles.smallLogo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.headerTitle}>Recicla Fácil</Text>
          <Text style={styles.headerSubtitle}>Seguir agora</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={{ height: 36 }} />

      <View style={styles.instagramIconContainer}>
        <Ionicons name="logo-instagram" size={54} color="#fff" />
      </View>

      <Text style={styles.title}>Nos siga no instagram!</Text>
      <Text style={styles.subTitle}>
        Acompanhe dicas de reciclagem e novidades sobre sustentabilidade!
      </Text>

      <TouchableOpacity style={styles.buttonFilled} onPress={() => Linking.openURL('https://instagram.com')}>
        <Text style={styles.buttonFilledText}>Seguir agora</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutlined}>
        <Text style={styles.buttonOutlinedText}>Pular por agora</Text>
      </TouchableOpacity>
    </View>
  );
};

const COLOR_BG = '#316241';
const COLOR_BTN_FILLED = '#fff';
const COLOR_BTN_OUTLINE = '#316241';
const COLOR_BTN_TEXT_FILLED = '#316241';
const COLOR_BTN_TEXT_OUTLINE = '#fff';
const COLOR_TITLE = '#fff';
const COLOR_SUBTITLE = '#d6eedb';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BG,
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
    marginTop: 2,
  },
  menuButton: {
    marginLeft: 'auto',
    marginRight: 0,
    padding: 8,
  },
  instagramIconContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: COLOR_TITLE,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subTitle: {
    color: COLOR_SUBTITLE,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 38,
    marginHorizontal: 4,
  },
  buttonFilled: {
    width: '90%',
    backgroundColor: COLOR_BTN_FILLED,
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 14,
  },
  buttonFilledText: {
    color: COLOR_BTN_TEXT_FILLED,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonOutlined: {
    width: '90%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonOutlinedText: {
    color: COLOR_BTN_TEXT_OUTLINE,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FollowInstagramScreen;