import React, { useState } from "react";
import { Text, View } from "react-native";

export default function Card() {
  return (
    <View className="h-32 w-full justify-center">
      <View className="justify-between mx-3 flex flex-row ">
        <View className="gap-2 font-bold">
          <Text className="text-3xl">Olá, Maria</Text>
          <Text className="text-base text-blue-800">
            Seja bem vinda ao Lions app
          </Text>
        </View>
        <View>
          <Text>foto</Text>
        </View>
      </View>
    </View>
  );
}
