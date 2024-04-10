import React, { useState } from "react";
import { Image, Text, View } from "react-native";

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
          <View className="flex-row items-center">
            <Image
              source={require("../../assets/meninoComOculos.png")}
              className="w-16 h-16 rounded-full mr-3"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
