import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: "#4272f5",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 10,
    height: 10,
    borderColor: "#4272f5",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
