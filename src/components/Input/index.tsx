import { Eye, EyeOff, Icon } from "lucide-react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface InpuProps {
  icon: Icon;
  secureTextEntry?: boolean;
  placeholder: string;
  autoCapitalize: string;
}

const Input = ({
  icon: I,
  secureTextEntry,
  placeholder,
  autoCapitalize,
}: InpuProps) => {
  const [sec, setSec] = useState(secureTextEntry);
  return (
    <View className="w-full px-3 mt-5">
      <View className=" flex flex-row items-center border-b-2 rounded-lg border-slate-200 h-11 px-3 py-3">
        <I color="rgb(203, 213, 225)" />
        <TextInput
          className="flex-1 px-3 text-gray-600"
          secureTextEntry={sec}
          placeholderTextColor={"rgb(148, 163, 184)"}
          placeholder={placeholder}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setSec(!sec)}>
            {sec ? (
              <Eye color="rgb(148, 163, 184)" />
            ) : (
              <EyeOff color="rgb(148, 163, 184)" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
