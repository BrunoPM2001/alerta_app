import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

export default function AppContainer(props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  );
}
