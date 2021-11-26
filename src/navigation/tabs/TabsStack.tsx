import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../screens';
import {LearnScreen} from '../../screens/tabs/LearnScreen';
import {HomeScreen} from '../../screens/tabs/home/HomeScreen';
import {TestScreen} from '../../screens/tabs/TestScreen';

const Stack = createStackNavigator();

export const TabsStack = (
  <>
    <Stack.Screen name={screens.HOME} component={HomeScreen} />
    <Stack.Screen name={screens.LEARN} component={LearnScreen} />
    <Stack.Screen name={screens.TEST} component={TestScreen} />
  </>
);
