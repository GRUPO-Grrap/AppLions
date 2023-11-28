import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FileDown, Plus } from "lucide-react-native";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import Card from "../../components/card";
import LineSeparator from "../../components/lineSeparator";

export default function HomeScreen() {
  const goToRegisterSchool = () => {
    router.replace("/(forms)/registerSchool");
  };
  return (
    <>
      <StatusBar hidden />
      <View className=" flex-1 h-screen w-screen">
        <Card />
        <LineSeparator />
        <Text className="font-bold text-2xl p-3">
          Não há nenhuma escola cadastrada
        </Text>
        <View className="px-3 py-3">
          <Button
            icon={Plus}
            onPress={goToRegisterSchool}
            colorIcon="#fff"
            textColor="#fff"
            tituloButton="Adicionar escola"
            bgColorButton="#00AC64"
            borderColor="#00AC64"
            widthButton="50%"
          />
        </View>

        <View className="px-3 py-3">
          <Button
            icon={FileDown}
            colorIcon="#fff"
            textColor="#fefefe"
            widthButton="100%"
            tituloButton="Relatório Geral"
            bgColorButton="rgb(30 58 138)"
            borderColor="rgb(30 58 138)"
          />
        </View>

        <View className="flex-1"></View>
      </View>
    </>
  );
}
