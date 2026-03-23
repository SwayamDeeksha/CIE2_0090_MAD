import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#5e72e4', '#825ee4']} style={styles.container}>

      {/* 🔵 BUBBLES */}
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />
      <View style={[styles.circle, styles.circle3]} />
      <View style={[styles.circle, styles.circle4]} />

      {/* LOGO */}
      <Text style={styles.logo}>argon</Text>

      {/* CENTER CONTENT */}
      <View style={styles.center}>
        <Text style={styles.title}>Design System</Text>
        <Text style={styles.subtitle}>
          Fully coded React Native components
        </Text>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-between',
  },

  /* 🔵 BUBBLES */
  circle: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 200,
  },

  circle1: {
    width: 200,
    height: 200,
    top: -50,
    left: -50,
  },

  circle2: {
    width: 150,
    height: 150,
    bottom: 100,
    right: -40,
  },

  circle3: {
    width: 100,
    height: 100,
    top: 200,
    right: 50,
  },

  circle4: {
    width: 120,
    height: 120,
    bottom: 50,
    left: 30,
  },

  logo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    zIndex: 1,
  },

  center: {
    alignItems: 'center',
    zIndex: 1,
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtitle: {
    color: 'white',
    marginTop: 10,
  },

  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    zIndex: 1,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;