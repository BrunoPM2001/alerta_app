import { Text, HStack, Checkbox } from "native-base";

export default function ListGroup({ id, nombre }) {
  return (
    <HStack alignItems="center">
      <Checkbox accessibilityLabel={nombre} />
      <Text m={2}>{nombre}</Text>
    </HStack>
  );
}
