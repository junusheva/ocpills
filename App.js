import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center p-10">
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}}
        inputStyle={{}}
        labelStyle={{}}
        labelProps={{}}
        label=""
        placeholder="Number of hormone pills"
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}}
        inputStyle={{}}
        labelStyle={{}}
        labelProps={{}}
        label=""
        placeholder="Number of placebo pills"
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}}
        inputStyle={{}}
        labelStyle={{}}
        labelProps={{}}
        label=""
        placeholder="How many pills were taken"
      />
    </View>
  );
}
