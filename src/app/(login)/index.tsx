import { router } from "expo-router";
import { Lock, Mail } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ToastNotification from "../../components/Toast";
import Checkbox from "../../components/checkBox";

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
  const [loading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [showToast, setShowToast] = useState(false);

  const emailInput = useRef<TextInput>(null);

  useEffect(() => {
    if (emailInput.current) {
      //@ts-ignore
      emailInput.current.resetError();
    }
  }, [email]);

  //function handleClick
  function handleClick() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    // input.current.focus();
  }
  function onSubmit() {
    //fazer o tramite de submit aqui
    handleClick();

    if (email.trim() === "") {
      setShowToast(true);

      if (emailInput.current) {
        //@ts-ignore
        emailInput.current.focusOnError();
      }
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    } else {
      // Lógica de autenticação ou envio aqui
      router.replace("/(tabs)/home");
    }
  }

  //Necessário para chamar métodos no componente
  const input = useRef(null);

  //Construção da tela login
  return (
    <View className="flex-1 flex-col bg-white justify-center ">
      <ScrollView className="flex-col pb-0">
        <View className="flex-1">
          <Image
            className="justify-start w-full"
            source={require("../../assets/meninoComOculos.png")}
          />
        </View>

        <View className="flex-1 bg-white px-3 -mt-40 rounded-t-3xl">
          {showToast && (
            <ToastNotification
              toastMode="warning"
              titulo="Atenção"
              legenda="O campo de e-mail não pode estar vazio."
            />
          )}
          <Text className="text-4xl text-blue-900 font-bold mt-24 mb-10 px-3">
            Login
          </Text>

          <View className="mb-6">
            <Input
              ref={emailInput}
              //@ts-ignore
              value={email}
              onChangeText={setEmail}
              icon={Mail}
              placeholder="Seu e-mail"
              autoCapitalizeOn="none"
              autoCorrectOn={false}
              keyboardType="email-address"
            />
            <Input
              ref={emailInput}
              //@ts-ignore
              value={senha}
              onChangeText={setSenha}
              icon={Lock}
              secureTextEntry
              placeholder="Sua senha"
              autoCapitalizeOn="none"
              autoCorrectOn={false}
              keyboardType="default"
            />
          </View>
          <View className="m-3 mb-6">
            <Checkbox legenda="Mantenha-me logado" />
          </View>
          <View>
            <Button
              textColor="#fefefe"
              isLoading={loading}
              widthButton="100%"
              tituloButton="Fazer Login"
              bgColorButton="rgb(30 58 138)"
              onPress={() => onSubmit()}
              borderColor="rgb(30 58 138)"
            />
          </View>
          <View className="mt-2">
            <Button
              widthButton="100%"
              tituloButton="Criar uma conta"
              onPress={goToRegister}
              borderColor="rgb(30 58 138)"
              textColor="rgb(30 58 138)"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
