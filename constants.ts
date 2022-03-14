//Third Party Imports
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { threeHexToSixHex } from './Helpers/Colors';

//First Party Imports
import { IColors } from './Interfaces/IColors';
import { IDevice } from './Interfaces/IDevice';
import { TThemeArray } from './Types/TTheme';


/*
Colors & Themes
*/
const lightPlaceholder = `${threeHexToSixHex(Colors.darker as string)}70`
const darkPlaceholder = `${threeHexToSixHex(Colors.lighter as string)}70`

export const COLORS: IColors = {
    light: {
        background: Colors.lighter,
        text: Colors.darker,
        statusBar: 'dark-content',
        placeholderText: lightPlaceholder,
        textInputBackground: '#00000010',
    },
    dark: {
        background: Colors.darker,
        text: Colors.lighter,
        statusBar: 'light-content',
        placeholderText: darkPlaceholder,
        textInputBackground: '#FFFFFF10',
    }
}

export const TAB_COLOR = '#CE0F3D'

export const THEME_ICON = {
    light: 'light-up',
    dark: 'moon',
    device: 'phone-portrait-outline',
}

export const THEME_ICON_TYPE = {
    light: 'entypo',
    dark: 'entypo',
    device: 'ionicon',
}

export const TAB_ICON = {
    Home: 'home',
    Settings: 'player-settings',
    Join: 'people',
}

export const TAB_ICON_TYPE = {
    Home: 'ionicons',
    Settings: 'fontisto',
    Join: 'simple-line-icons',
}

export const THEME_COLORS = {
    light: '#DF711B',
    dark: '#995edb',
}

export const NEXT_THEME = {
    light: TThemeArray[0],
    dark: TThemeArray[2],
    device: TThemeArray[1]
}

export const RADIUS_SIZE = 25;
export const TOP_BAR_SIZE = 30;


/*
Prosthetics Devices
*/
export const DEVICES: IDevice[] = [
    {
        name: "Unlimted Phoenix",
        modelURI: "",
        imageURI: "",
        type: "Hand",
        category: "Closed Back",
        brand: "Phoenix",
    },
    {
        name: "Phoenix V2",
        modelURI: "",
        imageURI: "",
        type: "Hand",
        category: "Closed Back",
        brand: "Phoenix",
    },
    {
        name: "Phoenix Hand Reborn",
        modelURI: "",
        imageURI: "",
        type: "Hand",
        category: "Closed Back",
        brand: "Phoenix",
    },
    {
        name: "Osprey",
        modelURI: "",
        imageURI: "",
        type: "Hand",
        category: "Closed Back",
        brand: "Phoenix",
    },
    {
        name: "Raptor Reloaded",
        modelURI: "",
        imageURI: "",
        type: "Hand",
        category: "Closed Back",
    },
    {
        name: "Cyborg Beast",
        modelURI: "",
        imageURI: "",
        type: "Hand",
        category: "Closed Back",
    },
    {
        name: "Flexy-Hand 2",
        modelURI: "",
        imageURI: "",
        type: "Hand",
        category: "Closed Back",
    },
    {
        name: "Talon",
        modelURI: "",
        imageURI: "",
        type: "Hand",
        category: "Open Back",
    },
    {
        name: "Ody-Hand",
        modelURI: "",
        imageURI: "",
        type: "Hand",
        category: "Open Back",
    },
    {
        name: "Gripper Thumb",
        modelURI: "",
        imageURI: "",
        type: "Finger",
        category: "Thumb",
    },
]