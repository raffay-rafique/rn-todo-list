import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  console.log(props.id);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={style.listItem}>
        <Text>
          {props.index}. {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10
  }
});
export default GoalItem;
