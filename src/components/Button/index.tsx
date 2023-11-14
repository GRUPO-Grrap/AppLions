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
  bgColorButton?: string;
  widthButton: String | number;
  borderColor?: String | number;
  textColor: String;
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
  borderColor,
  textColor,
}: IButton) => {
  return (
    <TouchableOpacity
      //@ts-ignore
      style={
        disable
          ? {
              backgroundColor: "rgb(156 163 175)",
              width: widthButton,
              borderColor: borderColor,
              color: textColor,
            }
          : {
              backgroundColor: bgColorButton,
              width: widthButton,
              borderColor: borderColor,
              color: textColor,
            }
      }
      disabled={isLoading || disable}
      onPress={onPress}
      className={
        disable
          ? "bg-gray-400  border-2 p-3 rounded-xl flex-row items-center justify-center"
          : `p-3 rounded-xl border-2 flex-row items-center justify-center`
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
          <Text
            //@ts-ignore

            style={
              disable
                ? {
                    color: textColor,
                  }
                : {
                    color: textColor,
                  }
            }
            className="text-lg font-bold"
          >
            {tituloButton}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
