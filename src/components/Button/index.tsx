import React from "react";
import { Icon } from "lucide-react-native";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
interface IButton {
  tituloButton: String;
  onPress: () => void;
  disable?: boolean;
  isLoading?: boolean;
  icon?: Icon;
  colorIcon?: string;
  bgColorButton: string;
  widthButton: String | number;
}

const Button = ({
  icon: IconComponent,
  tituloButton,
  onPress,
  disable,
  colorIcon,
  isLoading = false,
  bgColorButton,
  widthButton,
}: IButton) => {
  return (
    <TouchableOpacity
      //@ts-ignore
      style={
        disable
          ? { backgroundColor: "rgb(156 163 175)", width: widthButton }
          : { backgroundColor: bgColorButton, width: widthButton }
      }
      disabled={isLoading || disable}
      onPress={onPress}
      className={
        disable
          ? "bg-gray-400  p-4 rounded-xl flex-row items-center justify-center"
          : `p-4 rounded-xl  flex-row items-center justify-center`
      }
    >
      {isLoading ? (
        <ActivityIndicator color="#fefefe" size={24} />
      ) : (
        <>
          {IconComponent && (
            <View className="mx-3">
              <IconComponent color={colorIcon} />
            </View>
          )}
          <Text className="text-white text-lg font-bold">{tituloButton}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
