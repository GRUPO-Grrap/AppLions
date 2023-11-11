import { StatusBar } from "expo-status-bar";
import { Lock, Mail } from "lucide-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "./src/components/Input";
import ToastNotification from "./src/components/Toast";

export default function App() {
  return (
    <View style={styles.container}>
      <ToastNotification
        toastMode="sucess"
        legenda="Verifique se os campos foram preenchidos corretamente"
      />
      <Input
        keyboardType={"email-address"}
        autoCapitalizeOn="none"
        placeholder="Seu email"
        icon={Mail}
        autoCorrectOn={false}
      />
      <Input
        keyboardType={"default"}
        autoCapitalizeOn="none"
        placeholder="Seu senha"
        icon={Lock}
        autoCorrectOn={false}
        secureTextEntry={true}
      />
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
