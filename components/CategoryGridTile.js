import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({title, id}) {
  const navigation = useNavigation();

  return <View style={styles.gridItem}>
    <Pressable 
    style={({pressed}) => [
      styles.button, 
      pressed ? styles.buttonPressed : null
    ]} 
    android_ripple={{color: '#ccc'}}
    onPress={() => navigation.navigate('CategoryDetail', {
      title,
      cid: id,
    })}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, // andriod
    backgroundColor: '#0f92ac',
    shadowColor:' black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2, },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});