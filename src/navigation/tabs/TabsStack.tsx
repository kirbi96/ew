import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../screens';
import {LearnScreen} from '../../screens/tabs/LearnScreen';
import {HomeScreen} from '../../screens/tabs/home/HomeScreen';

const Stack = createStackNavigator();

export const TabsStack = (
  <>
    <Stack.Screen name={screens.HOME} component={HomeScreen} />
    <Stack.Screen name={screens.LEARN} component={LearnScreen} />
  </>
);
