import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Modal
} from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <Button title="ADD" onPress={addGoalHandler}></Button>
          </View>
          <View style={styles.buttons}>
            <Button
              title="CANCEL"
              color="red"
              onPress={props.onCancel}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  buttons: {
    width: "40%"
  }
});

export default GoalInput;
