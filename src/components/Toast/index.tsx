import { AlertCircle } from "lucide-react-native";
import { Text, View } from "react-native";

const ToastNotification = () => {
  return (
    <View className="bg-red-50 w-11/12 border-l-8 border-red-300 px-4 py-2 flex-row items-center h-20 rounded-lg">
      <AlertCircle color="rgb(252, 165, 165)" size={28} />
      <View className="px-4">
        <Text className="font-bold text-base">Titulo</Text>
        <Text className="font-normal text-base">subtitulo</Text>
      </View>
    </View>
  );
};

export default ToastNotification;
