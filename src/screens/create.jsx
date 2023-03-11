import { useState } from "react";
import {
  Container,
  Input,
  FormControl,
  Text,
  Stack,
  HStack,
  ScrollView,
  Button,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import data from "../../data_sample/creacion.json";
import SwipeList from "../components/swipeList";
import { ModalCrearEnpoint } from "../components/modals";

export default function CreateScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container
      _light={{ bg: "gray.100" }}
      _dark={{ bg: "black" }}
      // bgColor="red.500"
      w="100%"
      mx="auto"
      mt="50px"
      p="10px"
    >
      <FormControl>
        <Stack space={5}>
          <Stack>
            <FormControl.Label>
              <Text fontSize={15} mb={3}>
                Nombre:
              </Text>
            </FormControl.Label>
            <Input
              borderColor="amber.400"
              _focus={{
                borderColor: "amber.400",
                bgColor: "transparent",
              }}
              fontSize={14}
              variant="outline"
              p={2}
              placeholder="Nombre del grupo"
            />
          </Stack>
          <Stack>
            <HStack display="flex" justifyContent="space-between" py={5}>
              <Text fontSize={15}>Lista de endpoints:</Text>
              <AntDesign
                name="pluscircleo"
                size={24}
                onPress={() => {
                  console.log("Crear endpoint");
                  setIsOpen(true);
                }}
              />
            </HStack>
            <ScrollView h="60%" w="95%" m="auto">
              <SwipeList data={data} />
            </ScrollView>
          </Stack>
          <HStack justifyContent="space-between">
            <Button w="45%" bgColor="amber.400">
              Cancelar
            </Button>
            <Button w="45%" bgColor="amber.400">
              Guardar
            </Button>
          </HStack>
        </Stack>
      </FormControl>
      <ModalCrearEnpoint isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
}
