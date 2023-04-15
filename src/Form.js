import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Input } from "@rneui/themed";

export default function Form(props) {
  const { formFields, setFormData } = props;
  const onChange = (value, fieldKey) => {
    const copy = { ...formFields };
    const fieldCopy = { ...copy[fieldKey] };
    fieldCopy.value = value;
    copy[fieldKey] = fieldCopy;
    setFormData(copy);
  };
  return (
    <>
      {Object.keys(formFields).map((fieldKey) => {
        const field = formFields[fieldKey];
        return (
          <Input
            onChangeText={(value) => onChange(value, fieldKey)}
            key={field?.placeholder}
            value={`${field?.value}`}
            disabledInputStyle={{ background: "#ddd" }}
            placeholder={field.placeholder}
            keyboardType="numeric"
          />
        );
      })}
    </>
  );
}
