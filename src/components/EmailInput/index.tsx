import { Mail } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
const EmailInput = () => {
  return (
    <View className="w-full px-3">
      <View className="flex-row  border-b-2 border-gray-300">
        <Mail color="rgb(209, 213, 219)" />
        <TextInput className="px-2"></TextInput>
      </View>
    </View>
  );
};

export default EmailInput;
