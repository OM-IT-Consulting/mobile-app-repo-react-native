import { createAppContainer, createStackNavigator,createDrawerNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import SampleScreen from 'App/Containers/Sample/SampleScreen'
import ForgotPasswordScreen from 'App/Containers/ForgotPassword/ForgotPasswordScreen'
import RegisterScreen from 'App/Containers/Register/RegisterScreen'
import DashBoardScreen from 'App/Containers/DashBoard/DashBoardScreen'
import DonorListScreen from 'App/Containers/DonorList/DonorListScreen'
import AdminListScreen from 'App/Containers/AdminList/AdminListScreen'
import AdminDonorShareScreen from 'App/Containers/AdminDonorShare/AdminDonorShareScreen'
import ForgotPasswordOTPScreen from 'App/Containers/ForgotPasswordOTP/ForgotPasswordOTPScreen'
import DrawerScreen from "../DrawerScreen/DrawerScreen";

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createDrawerNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: LoginScreen,
    //SampleScreen with initial data. Acts as a template to create new screens
    SampleScreen: SampleScreen,
    //InitialPage for ForgotPassword
    ForgotPasswordOTPScreen: ForgotPasswordOTPScreen,
    //ForgotPasswordScreen with initial data. For forgot password
    ForgotPasswordScreen: ForgotPasswordScreen,
    //RegisterScreen with initial data. For new user registration
    RegisterScreen: RegisterScreen,
    //DashBoardScreen with initial data. For dashboard loading
    DashBoardScreen: DashBoardScreen,
    // HomePage for the donors
    DonorListScreen: DonorListScreen,
    // HomePage for the admin
    AdminListScreen: AdminListScreen,
    // Screen to Share the details to donor for admin
    AdminDonorShareScreen: AdminDonorShareScreen
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
    contentComponent: DrawerScreen,
  }
)

export default createAppContainer(StackNavigator)
