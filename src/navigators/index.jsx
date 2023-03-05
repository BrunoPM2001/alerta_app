import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/main";
import CreateScreen from "../screens/create";
import TabNavigator from "./headtab";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen
        name="Crear grupo"
        options={{ headerShown: true }}
        component={CreateScreen}
      />
    </Stack.Navigator>
  );
}
