import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Input } from "@rneui/themed";

export default function Form(props) {
  const { formFields } = props;
  return (
    <>
      {Object.keys(formFields).map((fieldKey) => {
        const field = formFields[fieldKey];
        return (
          <Input
            value={field?.value}
            disabledInputStyle={{ background: "#ddd" }}
            placeholder={field.placeholder}
          />
        );
      })}
    </>
  );
}
