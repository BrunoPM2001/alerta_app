import { ScrollView } from "native-base";
import data from "../../data_sample/historial.json";
import ListHistory from "../components/historialList";

export default function HistoryScreen() {
  return (
    <ScrollView _light={{ bg: "gray.100" }} _dark={{ bg: "black" }} w="100%">
      {data.map((item) => {
        return (
          <ListHistory
            key={item.id}
            nombre={item.nombre}
            estado={item.estado}
          />
        );
      })}
    </ScrollView>
  );
}
