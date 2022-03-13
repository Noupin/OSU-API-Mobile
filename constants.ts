//Third Party Imports
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { threeHexToSixHex } from './Helpers/Colors';

//First Party Imports
import { IColors } from './Interfaces/IColors';
import { TThemeArray } from './Types/TTheme';

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

export const THEME_ICON = {
    light: 'light-up',
    dark: 'moon',
    device: 'smartphone',
}

export const THEME_ICON_TYPE = {
    light: 'entypo',
    dark: 'entypo',
    device: 'material',
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
