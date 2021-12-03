import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../screens';
import {LearnScreen} from '../../screens/tabs/LearnScreen';
import {HomeScreen} from '../../screens/tabs/home/HomeScreen';
import {CollationTestScreen} from '../../screens/tabs/test/CollationTestScreen';
import {SelectTestScreen} from '../../screens/tabs/test/SelectTestScreen';
import {VisualizationTestScreen} from '../../screens/tabs/test/VisualizationTestScreen';
import {WritingTestScreen} from '../../screens/tabs/test/WritingTestScreen';

const Stack = createStackNavigator();

export const TabsStack = (
  <>
    <Stack.Screen name={screens.HOME} component={HomeScreen} />
    <Stack.Screen name={screens.LEARN} component={LearnScreen} />
    <Stack.Screen name={screens.SELECT_TEST} component={SelectTestScreen} />

    <Stack.Screen
      name={screens.COLLATION_TEST}
      component={CollationTestScreen}
    />
    <Stack.Screen
      name={screens.VISUALIZATION_TEST}
      component={VisualizationTestScreen}
    />

    <Stack.Screen name={screens.WRITING_TEST} component={WritingTestScreen} />
  </>
);
