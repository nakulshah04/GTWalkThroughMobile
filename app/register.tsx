import AuthInput from '@/components/AuthInput';
import { auth } from '@/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Missing fields', 'Please enter both email and password.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      Alert.alert('Success', 'Account created!');
    } catch (err: any) {
      Alert.alert('Registration Error', err.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Register Screen</Text>
      <AuthInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <AuthInput label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}