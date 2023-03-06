import { Text, useColorModeValue, Box, HStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import ListGroup from "./grupoList";

export default function GroupContainer({ title, items }) {
  return (
    <Box
      bgColor={useColorModeValue("white", "dark.100")}
      borderRadius={15}
      p={5}
      my={3}
      w="90%"
      m="auto"
    >
      <HStack mb={3} display="flex" justifyContent="space-between">
        <Text>{title}</Text>
        <HStack>
          <Text mx={5}>{items.size}</Text>
          <AntDesign name="downcircleo" size={24} color="black" />
        </HStack>
      </HStack>
      {items.map((item) => {
        return <ListGroup key={item.id} id={item.id} nombre={item.nombre} />;
      })}
    </Box>
  );
}
