import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen8196814Navigator from '../features/BlankScreen8196814/navigator';
import BlankScreen7196813Navigator from '../features/BlankScreen7196813/navigator';
import UserProfile6196812Navigator from '../features/UserProfile6196812/navigator';
import BlankScreen5196811Navigator from '../features/BlankScreen5196811/navigator';
import BlankScreen4196810Navigator from '../features/BlankScreen4196810/navigator';
import UserProfile1196809Navigator from '../features/UserProfile1196809/navigator';
import BlankScreen1196807Navigator from '../features/BlankScreen1196807/navigator';
import BlankScreen0196806Navigator from '../features/BlankScreen0196806/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen8196814: { screen: BlankScreen8196814Navigator },
BlankScreen7196813: { screen: BlankScreen7196813Navigator },
UserProfile6196812: { screen: UserProfile6196812Navigator },
BlankScreen5196811: { screen: BlankScreen5196811Navigator },
BlankScreen4196810: { screen: BlankScreen4196810Navigator },
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
