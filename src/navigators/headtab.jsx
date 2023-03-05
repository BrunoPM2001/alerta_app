import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HistoryScreen from "../screens/history";
import MainScreen from "../screens/main";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={MainScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}
