import { useState } from "react";
import { View } from "react-native";
import { Button } from "@rneui/themed";

import Form from "./src/Form.js";
import DayCircle from "./src/DayCircle.js";

export default function App() {
  const [viewForm, setViewForm] = useState(true);
  const [formData, setFormData] = useState({
    // we might need first pill date
    hormonePillsNum: { placeholder: "Number of hormone pills", value: 0 },
    placeboPillsNum: { placeholder: "Number of placebo pills", value: 0 },
    takenPillsNum: { placeholder: "How many pills were taken", value: 0 }
  });

  return (
    <View className="flex-1 items-center justify-center p-10">
      {viewForm ? (
        <Form formFields={formData} setFormData={setFormData} />
      ) : (
        <DayCircle dayNumber={formData?.takenPillsNum?.value || 0} />
      )}
      <Button
        title={viewForm ? "Show the circle" : "Update data"}
        onPress={() => setViewForm(!viewForm)}
      />
    </View>
  );
}
