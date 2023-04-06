import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Input } from "@rneui/themed";

export default function Form() {
  return (
    <>
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
    </>
  );
}
