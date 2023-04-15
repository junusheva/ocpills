import { Text, View } from "react-native";

const DayCircle = (props) => {
  const { dayNumber } = props;
  return (
    <View className="m-5 px-12 py-14 border-2 border-solid border-black rounded-full">
      <Text>Day {dayNumber}</Text>
    </View>
  );
};

export default DayCircle;
