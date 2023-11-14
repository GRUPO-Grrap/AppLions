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
import { Mail } from "lucide-react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRef } from "react";

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
  function handleClick() {
    input.current.focus();
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sectionImage}>
          <Image
            style={styles.image}
            source={require("../../assets/meninoComOculos.png")}
          />
        </View>

        <View style={styles.sectionForm}>
          <View style={styles.form}>
            <Text style={styles.tituloLogin}>Cadastro</Text>
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
            <View style={styles.textCadastrar}>
              <Text style={styles.textCadastrar}>
                Para cadastrar-se na comunidade é necessário sua chave de
                registro com o responsável.
              </Text>
              <TouchableOpacity>
                <Text style={styles.linkText}>SOLICITAR CHAVE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textCadastrar}>
              <TouchableOpacity onPress={() => router.replace("/(login)")}>
                <Text style={styles.linkText}>Ir para área de login</Text>
              </TouchableOpacity>
            </View>
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
  sectionForm: {
    width: "100%",

    marginTop: "-35%",

    justifyContent: "center",

    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
  form: {
    width: "100%",

    marginTop: "20%",
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
  linkText: {
    color: "#1C509C",
    marginBottom: 40,
    textDecorationLine: "underline",
  },
});
