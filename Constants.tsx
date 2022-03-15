//Third Party Imports
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { threeHexToSixHex } from './Helpers/Colors';

//First Party Imports
import { IColors } from './Interfaces/IColors';
import { IDevice } from './Interfaces/IDevice';
import { IIcon } from './Interfaces/IIcon';
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
        button: '#BD8181',
        overlay: '#FFFFFFB0',
    },
    dark: {
        background: Colors.darker,
        text: Colors.lighter,
        statusBar: 'light-content',
        placeholderText: darkPlaceholder,
        textInputBackground: '#FFFFFF10',
        button: '#BD8181',
        overlay: '#000000B0',
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
    Settings: 'ios-cog',
    Join: 'account-group',
}

export const TAB_ICON_TYPE = {
    Home: 'ionicon',
    Settings: 'ionicon',
    Join: 'material-community',
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

export const BACK_ICON: IIcon = {
    name: 'ios-chevron-back-outline',
    type: 'ionicon',
}

export const ATTENDANCE_ICON: IIcon = {
    name: 'clipboard',
    type: 'entypo',
}

export const RADIUS_SIZE = 25;
export const TOP_BAR_SIZE = 30;


/*
Prosthetics Devices
*/
export const NULL_DEVICE: IDevice = {
    name: "",
    modelURI: "",
    imageURI: "",
    type: "Finger",
    category: "",
    brand: "",
}

export const DEVICES: IDevice[] = [
    {
        name: "Unlimted Phoenix",
        modelURI: "",
        imageURI: "https://hub.e-nable.org/file/file/download?guid=25c4fcb7-f926-4822-9ceb-422381f5c2ed",
        type: "Hand",
        category: "Closed Back",
        brand: "Phoenix",
    },
    {
        name: "Phoenix V2",
        modelURI: "",
        imageURI: "https://enablingthefuture.org/wp-content/uploads/2018/10/PETG_e-NABLE_Hand.jpg",
        type: "Hand",
        category: "Closed Back",
        brand: "Phoenix",
    },
    {
        name: "Phoenix Hand Reborn",
        modelURI: "",
        imageURI: "https://enablingthefuture.org/wp-content/uploads/2015/12/reborn_hand-600x451.jpg",
        type: "Hand",
        category: "Closed Back",
        brand: "Phoenix",
    },
    {
        name: "Osprey",
        modelURI: "",
        imageURI: "https://cdn.thingiverse.com/renders/5f/e5/0a/3a/72/P7020104_preview_featured.JPG",
        type: "Hand",
        category: "Closed Back",
        brand: "Phoenix",
    },
    {
        name: "Raptor Reloaded",
        modelURI: "",
        imageURI: "https://cdn.thingiverse.com/renders/f1/78/e1/76/d1/IMG_5635_preview_featured.JPG",
        type: "Hand",
        category: "Closed Back",
    },
    {
        name: "Cyborg Beast",
        modelURI: "",
        imageURI: "https://cdn.thingiverse.com/renders/a7/d5/a3/98/e2/shea2_preview_featured.jpg",
        type: "Hand",
        category: "Closed Back",
    },
    {
        name: "Flexy-Hand 2",
        modelURI: "",
        imageURI: "https://cdn.thingiverse.com/assets/f8/48/6d/53/13/20140727_105125_zps8api5uvi.jpg",
        type: "Hand",
        category: "Closed Back",
    },
    {
        name: "Talon",
        modelURI: "",
        imageURI: "https://www.usine-digitale.fr/mediatheque/0/0/1/000198100_homePageUne/prothese-de-main-imprimee-3d.jpg",
        type: "Hand",
        category: "Open Back",
    },
    {
        name: "Ody-Hand",
        modelURI: "",
        imageURI: "https://cdn.thingiverse.com/renders/6c/80/53/de/e7/P5050443_preview_featured.jpg",
        type: "Hand",
        category: "Open Back",
    },
    {
        name: "Gripper Thumb",
        modelURI: "",
        imageURI: "https://cdn.thingiverse.com/renders/4e/d6/58/83/1a/2666a97802c6b49ef60c16e13b5c70b8_preview_featured.jpg",
        type: "Finger",
        category: "Thumb",
    },
]