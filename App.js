import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
