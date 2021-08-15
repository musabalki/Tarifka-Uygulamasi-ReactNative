import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Category from "./pages/Category"
import Detail from "./pages/Detail"
import Meals from "./pages/Meals"

const Stack = createNativeStackNavigator();

const Router = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CategoryPage" component={Category} options={{headerTitleAlign: 'center',headerTitleStyle: { textAlign: 'center' },title:"Categories",headerTintColor:"orange"}} />
                <Stack.Screen name="MealsPage" component={Meals} options={{title:"Meals",headerTintColor:"orange"}} />
                <Stack.Screen name="DetailPage" component={Detail} options={{title:"Detail",headerTintColor:"orange"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router