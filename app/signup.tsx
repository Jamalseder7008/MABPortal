// SignUpScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [parentPhoneNumber, setParentPhoneNumber] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://mabportal-1484d20829f2.herokuapp.com/auth/signup', {
        name,
        email,
        password,
        parentPhoneNumber,
      });
      // Assuming the server responds with a success message upon successful sign-up
      Alert.alert('Success', response.data.message);
      // Navigate to the sign-in screen or any other screen
    } catch (error) {
      Alert.alert('Error', 'Failed to sign up. Please try again.');
      console.error('Error signing up:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Parent Phone Number"
        onChangeText={setParentPhoneNumber}
        value={parentPhoneNumber}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default SignUp;
