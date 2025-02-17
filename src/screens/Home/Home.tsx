import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";

import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextImput } from "../../components/BatTextImput/BatTextImput";

export default function Home() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatTextImput/>
      </View>
      
      <View>
        
      </View>
      <StatusBar style="light" />

    </View>

  );
}

