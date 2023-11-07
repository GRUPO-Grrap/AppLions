import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EmailInput from "./src/components/Input";
import { Coffee, Mail, Lock } from "lucide-react-native";
import Input from "./src/components/Input";
import ToastNotification from "./src/components/Toast";

export default function App() {
  return (
    <View style={styles.container}>
      <ToastNotification />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
