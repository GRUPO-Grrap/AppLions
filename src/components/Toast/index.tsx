import { AlertCircle, CheckCircle2 } from "lucide-react-native";
import { Text, View } from "react-native";

interface ToastMode {
  titulo: string;

  legenda: string;
  toastMode: string;
}

const ToastNotification = ({ toastMode, titulo, legenda }: ToastMode) => {
  const sucess =
    "bg-green-100 w-full border-l-8 border-green-400 absolute bottom-3/4 px-4 py-2 flex-row items-center h-20 rounded-lg";

  const waring =
    "bg-orange-100 w-full border-l-8 border-orange-400 absolute bottom-3/4 px-4 py-2 flex-row items-center h-20 rounded-lg";

  const selectedStyle = toastMode === "success" ? sucess : waring;

  return (
    <View className="w-full absolute  mx-3 -mt-14">
      <View className={selectedStyle}>
        {toastMode === "success" ? (
          <CheckCircle2 color="rgb(74, 222, 128)" size={28} />
        ) : (
          <AlertCircle color="rgb(251 146 60)" size={28} />
        )}
        <View className="px-4 ">
          <Text className="font-bold text-base p-0">{titulo}</Text>

          <Text className="font-normal text-base py-0">{legenda}</Text>
        </View>
      </View>
    </View>
  );
};

export default ToastNotification;
