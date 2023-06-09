import { Text, HStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export default function ListHistory({ id, nombre, estado }) {
  return (
    <HStack
      id={id}
      display="flex"
      justifyContent="space-between"
      m="auto"
      w="80%"
      my={5}
    >
      <Text>{nombre}</Text>
      <AntDesign
        name={estado ? "checkcircleo" : "exclamationcircleo"}
        size={20}
      />
    </HStack>
  );
}
