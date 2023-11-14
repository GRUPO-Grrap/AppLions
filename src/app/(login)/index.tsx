import { router } from "expo-router";
import { useRef } from "react";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import { Mail } from "lucide-react-native";
import Button from "../../components/Button";

const LoginScreen = () => {
  //Condição de login
  // useEffect(()=>{
  //   if(usuario ta logado){
  //     router.replace("/(tabs)/home");
  //   }
  // },[aqui voce vai colocar a dependencia de usuario])

  //Rotas
  const goToRegister = () => {
    router.replace("/(login)/register");
  };
  function onSubmit() {
    //fazer o tramite de submit aqui
    router.replace("/(tabs)/home");
  }

  //Necessário para chamar métodos no componente
  const input = useRef(null);
  //function handleClick
  function handleClick() {
    // input.current.focus();
  }

  //Construção da tela login
  return (
    <SafeAreaView className="flex-1 flex-col bg-white">
      <ScrollView
        className="flex-col pb-0"
        // contentContainerStyle={styles.scrollContainer}
      >
        <View className="flex-1">
          <Image
            className="justify-start w-full"
            source={require("../../assets/meninoComOculos.png")}
          />
        </View>

        <View className="flex-1 bg-white -mt-52 rounded-t-3xl">
          <Text className="text-3xl font-bold mb-10 px-3">Login</Text>
          <Input
            icon={Mail}
            placeholder="Seu e-mail"
            autoCapitalizeOn="none"
            autoCorrectOn={false}
            keyboardType="email-address"
          />
          <Input
            icon={Mail}
            placeholder="Seu e-mail"
            autoCapitalizeOn="none"
            autoCorrectOn={false}
            keyboardType="email-address"
          />
          <Button
            widthButton="100%"
            tituloButton="Fazer Login"
            bgColorButton="#1C509C"
            onPress={() => onSubmit()}
          />

          <View className="items-center">
            <Text>Quer fazer parte da nossa comunidade?</Text>
            <Text onPress={goToRegister} className="text-blue-600 underline">
              CADASTRE-SE
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginScreen;
