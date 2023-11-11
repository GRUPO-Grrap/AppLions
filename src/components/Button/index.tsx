import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
interface IButton {
  tituloButton: String;
  onPress: () => void;
  isLoading?: boolean;
}

const Button = ({ tituloButton, onPress, isLoading = false }: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-blue-800 p-4 rounded-xl w-full flex items-center"
    >
      {isLoading ? (
        <ActivityIndicator color="#fefefe" size={18} />
      ) : (
        <Text className="text-white text-lg font-bold">{tituloButton}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
