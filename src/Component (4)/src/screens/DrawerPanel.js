import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import UntitledComponent from "../components/UntitledComponent";

function DrawerPanel(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <UntitledComponent style={styles.untitledComponent}></UntitledComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "#141f28"
  },
  untitledComponent: {
    height: 812,
    width: 276
  }
});

export default DrawerPanel;
