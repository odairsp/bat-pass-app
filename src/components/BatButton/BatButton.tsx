import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyles';
import { BatTextImput } from '../BatTextImput/BatTextImput';
import generatePassword from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';


export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    let generateToken = generatePassword();

    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BatTextImput pass={pass} />

      <Pressable
        style={styles.button}
        onPress={handleGenerateButton}>
        <Text style={styles.text}>🔐 GENERATE</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={handleCopyButton}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>

    </>
  );
}