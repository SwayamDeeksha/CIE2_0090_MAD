import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const CreateAccountScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const getStrength = () => {
    if (password.length > 8) return 'Strong';
    if (password.length > 4) return 'Medium';
    return 'Weak';
  };

  const handleCreateAccount = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (!agree) {
      Alert.alert("Error", "Please agree to the Privacy Policy");
      return;
    }

    Alert.alert("Success", "Account Created Successfully!");
  };

  return (
    <LinearGradient colors={['#5e72e4', '#825ee4']} style={styles.container}>

      {/* ICONS */}
      <View style={styles.topIcons}>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="notifications" size={26} color="white" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="cart" size={26} color="white" />
        </TouchableOpacity>
      </View>

      {/* BACK */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* HEADER */}
      <Text style={styles.header}>Create Account</Text>

      {/* CARD */}
      <View style={styles.card}>

        {/* SOCIAL */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <FAIcon name="github" size={20} />
            <Text style={{ marginLeft: 8 }}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <FAIcon name="google" size={20} color="red" />
            <Text style={{ marginLeft: 8 }}>Google</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.separator}>Or sign up</Text>

        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Text>Strength: {getStrength()}</Text>

        <View style={styles.checkboxRow}>
          <CheckBox value={agree} onValueChange={setAgree} />
          <Text style={{ marginLeft: 10 }}>I agree with Privacy Policy</Text>
        </View>

        <TouchableOpacity style={styles.createBtn} onPress={handleCreateAccount}>
          <Text style={styles.createText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  topIcons: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    zIndex: 10,
  },

  iconBtn: {
    marginLeft: 15,
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: 10,
    borderRadius: 25,
  },

  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
  },

  badgeText: { color: 'white', fontSize: 10 },

  backBtn: { position: 'absolute', top: 50, left: 20 },

  backText: { color: 'white', fontSize: 22 },

  header: {
    color: 'white',
    fontSize: 26,
    marginBottom: 20,
  },

  card: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f5f7',
    padding: 10,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
  },

  separator: {
    textAlign: 'center',
    marginVertical: 10,
  },

  input: {
    backgroundColor: '#f4f5f7',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  createBtn: {
    backgroundColor: '#5e72e4',
    padding: 15,
    marginTop: 15,
    borderRadius: 25,
    alignItems: 'center',
  },

  createText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;