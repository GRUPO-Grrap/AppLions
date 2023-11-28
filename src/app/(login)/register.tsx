import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import { Lock, Mail, ShieldCheck, User } from "lucide-react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRef } from "react";
import Checkbox from "../../components/checkBox";

const RegisterScreen = () => {
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
  // function handleClick() {
  //   input.current.focus();
  // }
  return (
    <SafeAreaView className="flex-1 flex-col bg-white justify-center ">
      <ScrollView className="flex-col pb-0">
        <View className="flex-1">
          <Image
            className="justify-start w-full"
            source={require("../../assets/meninaComOculos.png")}
          />
        </View>

        <View className="bg-white w-full pt-16 -top-28 justify-center px-3 rounded-t-3xl">
          <Text className="text-4xl text-blue-900 font-bold  mb-3 px-3">
            Login
          </Text>
          <Input
            icon={User}
            placeholder="Insira seu nome"
            autoCapitalizeOn="none"
            autoCorrectOn={false}
            keyboardType="defaut"
          />
          <Input
            icon={Mail}
            placeholder="Insira seu melhor e-mail"
            autoCapitalizeOn="none"
            autoCorrectOn={false}
            keyboardType="email-address"
          />

          <Input
            icon={Lock}
            placeholder="Insira sua senha"
            autoCapitalizeOn="none"
            autoCorrectOn={false}
            keyboardType="defaut"
          />
          <Input
            icon={Lock}
            placeholder="Confirme sua senha"
            autoCapitalizeOn="none"
            autoCorrectOn={false}
            keyboardType="defaut"
          />
          <Input
            icon={ShieldCheck}
            placeholder="Insira sua chave de registro"
            autoCapitalizeOn="none"
            autoCorrectOn={false}
            keyboardType="defaut"
          />
          <View
            className="px-3 py-6
          "
          >
            <Checkbox legenda="Li e concordo com os termos de privacidade" />
          </View>

          <Button
            onPress={() => onSubmit()}
            textColor="#fefefe"
            widthButton="100%"
            tituloButton="Criar conta"
            bgColorButton="rgb(30 58 138)"
            borderColor="rgb(30 58 138)"
          />

          <View className="mt-2">
            <Button
              widthButton="100%"
              tituloButton="Já tenho uma conta"
              onPress={() => router.replace("/(login)")}
              borderColor="rgb(30 58 138)"
              textColor="rgb(30 58 138)"
            />
          </View>
          <View className="py-3">
            <Text className="text-center text-base">
              Para cadastrar-se na comunidade é necessário sua chave de registro
              com o responsável.
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-900 font-medium py-3 underline text-center">
                SOLICITAR CHAVE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  keyboardAvoidingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 0,
  },
  scrollContainer: {
    flexDirection: "column",
    paddingBottom: 0,
  },
  tituloLogin: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },

  sectionImage: {
    justifyContent: "flex-start",
    width: "100%",
  },
  image: {
    justifyContent: "flex-start",
    width: "100%",
  },
  textCadastrar: {
    textAlign: "center",
    alignItems: "center",
  },
});
