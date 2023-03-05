import { Center, Text } from "native-base";

export default function CreateScreen() {
  return (
    <Center _light={{ bg: "gray.100" }} _dark={{ bg: "black" }} flex={1}>
      <Text>This is the creation screen!</Text>
    </Center>
  );
}
