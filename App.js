import { useState } from "react";
import { View } from "react-native";
import { Button } from "@rneui/themed";

import Form from "./src/Form.js";
import DayCircle from "./src/DayCircle.js";

export default function App() {
  const [viewForm, setViewForm] = useState(true);

  return (
    <View className="flex-1 items-center justify-center p-10">
      {viewForm ? <Form /> : <DayCircle />}
      <Button title="view" onPress={() => setViewForm(!viewForm)} />
    </View>
  );
}
