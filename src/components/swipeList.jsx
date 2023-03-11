import { Box, Text, Pressable, Icon, HStack, VStack } from "native-base";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";

export default function SwipeList({ data }) {
  const [listData, setListData] = useState(data);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = (data) => (
    <Pressable
      _light={{ bg: "gray.100" }}
      _dark={{ bg: "black" }}
      onPress={() => console.log("You touched me")}
      py={3}
    >
      <HStack alignItems="center" pl={2}>
        <Text>{data.item.nombre}</Text>
      </HStack>
    </Pressable>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack h="100%">
      <Pressable
        w="25%"
        ml="auto"
        p="2px"
        bg="red.500"
        justifyContent="center"
        onPress={() => {
          console.log("Deleted ");
          deleteRow(rowMap, data.item.id);
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

  return (
    <SwipeListView
      keyExtractor={(item) => item.id}
      data={listData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      disableRightSwipe
      rightOpenValue={-70}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onRowDidOpen={onRowDidOpen}
    />
  );
}
