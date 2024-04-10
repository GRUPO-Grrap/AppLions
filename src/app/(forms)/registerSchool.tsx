import React from "react";
import LineSeparator from "../../components/lineSeparator";
import { SafeAreaView, StatusBar } from "react-native";
import { FileDown, Locate, MapPin, UserSquare, View } from "lucide-react-native";
import Input from "../../components/Input";
import Card from "../../components/card";
import Button from "../../components/Button";

const FormRegisterSchool = () => {
  return (
    
    <SafeAreaView className="bg-white">
    
      <StatusBar hidden />

      <LineSeparator />

        <Input
          icon={UserSquare}
          placeholder="Seu e-mail"
          autoCapitalizeOn="none"
          autoCorrectOn={false}
          keyboardType="defaut"
        />
         <Input
          icon={MapPin}
          placeholder="Seu e-mail"
          autoCapitalizeOn="none"
          autoCorrectOn={false}
          keyboardType="defaut"
        />
      <LineSeparator />
    

<Input
  icon={UserSquare}
  placeholder="Seu e-mail"
  autoCapitalizeOn="none"
  autoCorrectOn={false}
  keyboardType="defaut"
/>
 <Input
  icon={MapPin}
  placeholder="Seu e-mail"
  autoCapitalizeOn="none"
  autoCorrectOn={false}
  keyboardType="defaut"  
/>
<LineSeparator />
<Input
  icon={MapPin}
  placeholder="Seu e-mail"
  autoCapitalizeOn="none"
  autoCorrectOn={false}
  keyboardType="defaut"
/>

<Input
  icon={MapPin}
  placeholder="Seu e-mail"
  autoCapitalizeOn="none"
  autoCorrectOn={false}
  keyboardType="defaut"
/>
<LineSeparator />

    </SafeAreaView>
  );
};

export default FormRegisterSchool;
