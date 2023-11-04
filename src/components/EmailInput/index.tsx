import { Mail } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";

const EmailInput = () => {
  const emailInputRef = React.createRef();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // @ts-ignore
    emailInputRef.current.focus();
    setIsFocused(true);
  }, []);

  const handleBlurEmail = () => {
    // @ts-ignore
    emailInputRef.current.blur();
    setIsFocused(false);
  };
  false;
  return (
    <View className="w-full px-3">
      <View
        // @ts-ignore
        ref={emailInputRef}
        className={
          isFocused
            ? "flex-row  border-b-2 border-blue-950"
            : "flex-row  border-b-2 border-gray-300"
        }
      >
        <Mail color={isFocused ? "rgb(27, 33, 84)" : "rgb(209, 213, 219)"} />

        <TextInput className="px-2"></TextInput>
      </View>
    </View>
  );
};

export default EmailInput;
