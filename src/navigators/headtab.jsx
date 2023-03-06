import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MyTabBar } from "../components/tabBar";
import HistoryScreen from "../screens/history";
import MainScreen from "../screens/main";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Lista" component={MainScreen} />
      <Tab.Screen name="Historial" component={HistoryScreen} />
    </Tab.Navigator>
  );
}
