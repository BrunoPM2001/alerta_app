import { Box, Text, Pressable, Icon, HStack, VStack } from "native-base";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";

export default function SwipeList({ data }) {
  const [listData, setListData] = useState(data);

  const onRowDidOpen = (rowKey) => {
    console.log("This is open ", rowKey);
  };

  const renderItem = ({ item, index }) => {
    return (
      <Pressable
        _light={{ bg: "gray.100" }}
        _dark={{ bg: "black" }}
        onPress={() => {
          console.log("Touch!");
        }}
      >
        <HStack alignItems="center">
          <Text my={3} key={item.nombre} fontSize={16}>
            {item.nombre}
          </Text>
        </HStack>
      </Pressable>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HStack>
        <Pressable
          w="25%"
          ml="auto"
          p="1px"
          bg="red.500"
          justifyContent="center"
          onPress={() => {
            console.log("Deleted");
          }}
        >
          <VStack alignItems="center" justifyContent="space-around">
            <MaterialIcons name="delete-outline" size={20} color="white" />
            <Text color="white" fontSize="xs" fontWeight="medium">
              Eliminar
            </Text>
          </VStack>
        </Pressable>
      </HStack>
    );
  };

  return (
    <SwipeListView
      data={listData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-130}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onRowDidOpen={onRowDidOpen}
    />
  );
}
