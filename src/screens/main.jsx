import { Center, Text } from "native-base";

export default function MainScreen() {
  return (
    <Center _light={{ bg: "gray.100" }} _dark={{ bg: "black" }} flex={1}>
      <Text>This is the main screen!</Text>
    </Center>
  );
}
