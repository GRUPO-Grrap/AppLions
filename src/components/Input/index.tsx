import { Eye, EyeOff, Icon } from "lucide-react-native";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  ForwardedRef,
  useRef,
} from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface InputProps {
  icon: Icon;
  secureTextEntry?: boolean;
  placeholder: string;
  autoCapitalizeOn?: string | any;
  autoCorrectOn: boolean;
  keyboardType: string | any;
  focusMode?: string;
}

const Input = forwardRef(
  (
    {
      icon: I,
      secureTextEntry,
      placeholder,
      autoCapitalizeOn,
      autoCorrectOn,
      keyboardType,
      focusMode,
    }: InputProps,
    ref: ForwardedRef<TextInput>
  ) => {
    const [sec, setSec] = useState(secureTextEntry);
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState(false);
    const inputRef = useRef<TextInput>(null);

    //@ts-ignore
    useImperativeHandle(ref, () => ({
      focusOnError() {
        if (inputRef.current) {
          setError(true);
          inputRef.current.focus();
        }
      },
      resetError() {
        setError(false);
      },
    }));

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setError(false);
    };
    const borderFocus = isFocused
      ? "  border-b-2 rounded-sm border-blue-950 "
      : "  border-b-2 rounded-sm border-slate-200 ";

    const borderError = error
      ? " border-b-2 rounded-sm border-orange-400 "
      : " border-b-2 rounded-sm border-slate-200 ";

    const iconFocus = isFocused ? "rgb(23, 37, 84)" : "rgb(148, 163, 184)";
    const iconError = error ? "rgb(251 146 60)" : "rgb(148, 163, 184)";

    const selectedFocusStyle = (focusMode = error ? borderError : borderFocus);
    const selectedIconStyle = (focusMode = error ? iconError : iconFocus);

    return (
      <View className="w-full  mt-5">
        <View
          className={`${selectedFocusStyle}flex flex-row items-center h-11 px-3 py-3`}
        >
          <I color={selectedIconStyle} />
          <TextInput
            ref={inputRef}
            className="flex-1 px-3 text-gray-600 text-base"
            secureTextEntry={sec}
            placeholderTextColor={"rgb(148, 163, 184)"}
            placeholder={placeholder}
            autoCapitalize={autoCapitalizeOn}
            autoCorrect={autoCorrectOn}
            keyboardType={keyboardType}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setSec(!sec)}>
              {sec ? (
                <Eye
                  color={isFocused ? "rgb(23, 37, 84)" : "rgb(148, 163, 184)"}
                />
              ) : (
                <EyeOff
                  color={isFocused ? "rgb(23, 37, 84)" : "rgb(148, 163, 184)"}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

export default Input;
