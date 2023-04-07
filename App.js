import { useState } from "react";
import { View } from "react-native";
import { Button } from "@rneui/themed";

import Form from "./src/Form.js";
import DayCircle from "./src/DayCircle.js";

export default function App() {
  const [viewForm, setViewForm] = useState(true);
  const [formData, setFormData] = useState({
    hormonePillsNum: { placeholder: "Number of hormone pills", value: "" },
    placeboPillsNum: { placeholder: "Number of placebo pills", value: "" },
    takenPillsNum: { placeholder: "How many pills were taken", value: "" }
  });

  return (
    <View className="flex-1 items-center justify-center p-10">
      {viewForm ? <Form formFields={formData} /> : <DayCircle />}
      <Button title="view" onPress={() => setViewForm(!viewForm)} />
    </View>
  );
}
