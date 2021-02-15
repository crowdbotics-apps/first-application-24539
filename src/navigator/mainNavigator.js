import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4205384Navigator from '../features/BlankScreen4205384/navigator';
import BlankScreen3205383Navigator from '../features/BlankScreen3205383/navigator';
import BlankScreen2205382Navigator from '../features/BlankScreen2205382/navigator';
import BlankScreen0205380Navigator from '../features/BlankScreen0205380/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4205384: { screen: BlankScreen4205384Navigator },
BlankScreen3205383: { screen: BlankScreen3205383Navigator },
BlankScreen2205382: { screen: BlankScreen2205382Navigator },
BlankScreen0205380: { screen: BlankScreen0205380Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
