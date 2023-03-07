import { Fab, Icon, ScrollView } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import data from "../../data_sample/grupos.json";
import GroupContainer from "../components/grupoContainer";

export default function MainScreen({ navigation }) {
  return (
    <>
      <ScrollView _light={{ bg: "gray.100" }} _dark={{ bg: "black" }} w="100%">
        {data.map((grupo) => {
          return (
            <GroupContainer
              key={grupo.titulo}
              title={grupo.titulo}
              items={grupo.items}
            />
          );
        })}
      </ScrollView>
      <Fab
        renderInPortal={false}
        shadow={0}
        size="lg"
        right={30}
        bottom={50}
        bg="amber.400"
        icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />}
        onPress={() => navigation.navigate("Crear grupo")}
        _pressed={{
          bg: "amber.500",
        }}
      />
    </>
  );
}
