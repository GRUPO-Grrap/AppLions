import { Eye, EyeOff, Icon } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface InpuProps {
  icon: Icon;
  secureTextEntry?: boolean;
  placeholder: string;
  autoCapitalizeOn?: string | any;
  autoCorrectOn: boolean;
  keyboardType: string | any;
}

const Input = ({
  icon: I,
  secureTextEntry,
  placeholder,
  autoCapitalizeOn,
  autoCorrectOn,
  keyboardType,
}: InpuProps) => {
  const [sec, setSec] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View className="w-full  mt-5">
      <View
        className={
          isFocused
            ? " flex flex-row items-center border-b-2 rounded-sm border-blue-950 h-11 px-3 py-3"
            : " flex flex-row items-center border-b-2 rounded-sm border-slate-200 h-11 px-3 py-3"
        }
      >
        <I color={isFocused ? "rgb(23, 37, 84)" : "rgb(148, 163, 184)"} />
        <TextInput
          className="flex-1 px-3 text-gray-600 text-base"
          secureTextEntry={sec}
          placeholderTextColor={"rgb(148, 163, 184)"}
          placeholder={placeholder}
          autoCapitalize={autoCapitalizeOn}
          autoCorrect={autoCorrectOn}
          keyboardType={keyboardType}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setSec(!sec)}>
            {sec ? (
              <Eye
                color={isFocused ? "rgb(23, 37, 84)" : "rgb(148, 163, 184)"}
              />
            ) : (
              <EyeOff
                color={isFocused ? "rgb(23, 37, 84)" : "rgb(148, 163, 184)"}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
