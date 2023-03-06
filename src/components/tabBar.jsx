import { HStack, Text } from "native-base";

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <HStack mt="40px" h="30px">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: "List",
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Text
            textAlign="center"
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            color={isFocused ? "amber.500" : "black"}
          >
            {label}
          </Text>
        );
      })}
    </HStack>
  );
};

export { MyTabBar };
