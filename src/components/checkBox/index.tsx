import { Check, View } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Checkbox = ({ option = [], onChange }) => {
  return (
    <View>
      <View>
        <TouchableOpacity>
          <Check />
        </TouchableOpacity>
      </View>
      <Text>{}</Text>
    </View>
  );
};
