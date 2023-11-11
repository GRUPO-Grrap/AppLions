import { StatusBar } from "expo-status-bar";
import { Lock, Mail } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Input from "./src/components/Input";
import ToastNotification from "./src/components/Toast";
import Button from "./src/components/Button";

export default function App() {
  const [loading, setIsLoading] = useState(false);

  function handleButtonPress() {
    setIsLoading(true);
    console.log("ok");
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <View style={styles.container}>
      <Button
        isLoading={loading}
        onPress={handleButtonPress}
        tituloButton="Fazer Login"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
