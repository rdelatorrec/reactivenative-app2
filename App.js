import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryDetail from './screens/CategoryDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Categories' screenOptions={{
          headerStyle: {
            backgroundColor: '#0ba888',
          },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: 'white',
          },
          // headerRight: () => {
          //   return <Button title="Tap me!" onPress={() => } />
          // }
        }}>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={({ route: { params }, navigation }) => {
              return {
                title: 'Las Categorias',
              };
            }}
          />
          <Stack.Screen
            name="CategoryDetail"
            component={CategoryDetail}
            // options={({ route: { params }, navigation }) => {
            //   const {cid} = params;
 
            //   return {
            //     title: 'El detalle => ' + cid,
            //     // headerStyle: {
            //     //   backgroundColor: '#0ba888',
            //     // },
            //     // headerTintColor: 'white',
            //     // contentStyle: {
            //     //   backgroundColor: 'white',
            //     // },
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;

