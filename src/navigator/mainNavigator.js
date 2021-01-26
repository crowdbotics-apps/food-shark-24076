import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile1196809Navigator from '../features/UserProfile1196809/navigator';
import BlankScreen1196807Navigator from '../features/BlankScreen1196807/navigator';
import BlankScreen0196806Navigator from '../features/BlankScreen0196806/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile1196809: { screen: UserProfile1196809Navigator },
BlankScreen1196807: { screen: BlankScreen1196807Navigator },
BlankScreen0196806: { screen: BlankScreen0196806Navigator },

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
