//Third Party Imports
import { atom } from "recoil";

//First Party Imports
import { COLORS } from "./Constants";
import { TAttendanceType } from "./Types/TAttendanceType";
import { TTheme } from "./Types/TTheme";


export const themeState = atom<TTheme>({
    key: 'theme',
    default: 'device',
});

export const colorState = atom({
    key: 'colors',
    default: COLORS.light,
});

export const nameState = atom({
    key: 'name',
    default: 'Me',
});

export const initialState = atom({
    key: 'initial',
    default: false,
});

export const attendanceTypeState = atom<TAttendanceType>({
    key: 'attendanceType',
    default: 'global',
});
