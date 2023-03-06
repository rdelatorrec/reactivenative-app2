import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {

    return <CategoryGridTile
      title={itemData.item.name}
      id={itemData.item.id}
    />;
  }

  const data = [
    {
      name: "Apple",
      id: 1,
    },
    {
      name: "Orange",
      id: 2,
    },
    {
      name: "Cherry",
      id: 3,
    },
    {
      name: "Chocolate",
      id: 4,
    },
  ];

  return <FlatList
    data={data}
    keyExtractor={item => '#' + item.id}
    renderItem={renderCategoryItem}
    numColumns={3}
  />
};

export default CategoriesScreen;