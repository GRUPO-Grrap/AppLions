import { Check } from "lucide-react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ICheckBox {
  legenda: string;
}

const Checkbox = ({ legenda }: ICheckBox) => {
  const [selected, setSelected] = useState(false);

  function toggle() {
    setSelected(!selected);
  }
  return (
    <View>
      <View className="flex-row items-center">
        <TouchableOpacity
          className={
            selected
              ? "h-6 w-6 rounded justify-center items-center bg-blue-200"
              : "h-6 w-6 rounded justify-center items-center bg-slate-200"
          }
          onPress={toggle}
        >
          {selected && <Check color="rgb(30 58 138)" />}
        </TouchableOpacity>
        <Text
          className={
            selected
              ? "ml-3 text-base font-normal text-blue-900"
              : "ml-3 text-base font-normal text-slate-400"
          }
        >
          {legenda}
        </Text>
      </View>
    </View>
  );
};

export default Checkbox;
