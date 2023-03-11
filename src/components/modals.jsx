import { useState } from "react";
import {
  Button,
  Input,
  Select,
  FormControl,
  Text,
  Center,
  Modal,
} from "native-base";

const ModalCrearEnpoint = ({ isOpen, setIsOpen }) => {
  const [valueS, setValueS] = useState("");

  return (
    <Center>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        animationPreset="slide"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Agregar endpoint</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>
                <Text>Nombre:</Text>
              </FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt={3}>
              <FormControl.Label>
                <Text>Url:</Text>
              </FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt={3}>
              <FormControl.Label>
                <Text>Método:</Text>
              </FormControl.Label>
              <Select
                selectedValue={valueS}
                accessibilityLabel="Escoge el método"
                placeholder="Escoge el método"
                onValueChange={(value) => setValueS(value)}
              >
                <Select.Item label="GET" value="GET" />
                <Select.Item label="POST" value="POST" />
              </Select>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group>
              <Button
                variant="ghost"
                onPress={() => {
                  setIsOpen(false);
                }}
              >
                Cancelar
              </Button>
              <Button
                onPress={() => {
                  setIsOpen(false);
                }}
              >
                Guardar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export { ModalCrearEnpoint };
