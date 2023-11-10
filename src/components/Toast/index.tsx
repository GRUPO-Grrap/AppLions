import { AlertCircle } from "lucide-react-native";
import { Text, View } from "react-native";

interface ToastMode {
  legenda: string;
  toastMode: string;
}

const sucess =
  "bg-green-100 w-11/12 border-l-8 border-green-400 px-4 py-2 flex-row items-center h-20 rounded-lg";
const error =
  "bg-red-100 w-11/12 border-l-8 border-red-400 px-4 py-2 flex-row items-center h-20 rounded-lg";

const ToastNotification = ({ toastMode, legenda }: ToastMode) => {
  const selectedStyle = toastMode === "sucess" ? sucess : error;

  return (
    <View className={selectedStyle}>
      <AlertCircle color="rgb(248, 113, 113)" size={28} />
      <View className="px-4">
        <Text className="font-normal text-base p-1">{legenda}</Text>
      </View>
    </View>
  );
};

export default ToastNotification;
