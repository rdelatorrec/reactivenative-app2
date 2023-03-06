import { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
 } from "react-native";
import IconButton from "../components/IconButton";

function CategoryDetail({ route: {params}, navigation }) {
  const {title, cid} = params;

  function headerButtonPressHandler() {
    console.log("Pressed!");
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return <IconButton
          icon="star"
          color="white"
          onPress={headerButtonPressHandler} />
      }
    });
  }, [navigation]);

  return <View style={styles.containter}>
    <Text>{title} ID#{cid}</Text>
  </View>
}

export default CategoryDetail;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    padding: 16,
  },
});