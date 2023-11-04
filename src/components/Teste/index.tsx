import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";

const MyForm = () => {
  const emailInputRef = React.createRef();

  const [formData, setFormData] = useState({ email: "" });
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {
    emailInputRef.current.focus(); // Ativa o campo de entrada quando o componente é carregado
    setIsFocused(true); // Define isFocused como true quando o campo é focado
  }, []); // O segundo argumento vazio faz com que o useEffect seja executado apenas uma vez

  const handleBlurEmail = () => {
    emailInputRef.current.blur();
    setIsFocused(false); // Define isFocused como false quando o campo perde o foco
  };

  const handleSubmit = () => {
    // Validação e processamento de formulário aqui
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        ref={emailInputRef}
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        onBlur={handleBlurEmail}
        style={{
          borderBottomColor: isFocused ? "blue" : "black",
          borderBottomWidth: 2,
        }}
      />
      <Button className="" title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default MyForm;
