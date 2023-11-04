import { Mail } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const validateEmail = (text) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const IsValidEmail = emailRegex.test(text);
    setIsValid(IsValidEmail);
    setEmail(text);
  };

  return (
    <View className="w-full px-3">
      <View
        className={
          !isValid
            ? "flex flex-row items-center border-b-2 border-red-300 w-full "
            : isFocused
            ? "flex flex-row items-center border-b-2 border-blue-950 w-full "
            : "flex flex-row items-center border-b-2 border-gray-300 w-full "
        }
      >
        <View>
          <Mail
            color={
              !isFocused
                ? "rgb(252, 165, 165)"
                : isValid
                ? "rgb(209, 213, 219)"
                : isFocused
                ? "rgb(23, 37, 84)"
                : "rgb(252, 165, 165)"
            }
            absoluteStrokeWidth
          />
        </View>
        <View>
          <TextInput
            className="p-2"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={validateEmail}
            keyboardType="email-address"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
      </View>
      {!isValid && (
        <Text className="text-red-300">Endereço de e-mail inválido</Text>
      )}
    </View>
  );
};

export default EmailInput;
