//Third Party Imports
import { StyleSheet } from 'react-native';
import { RADIUS_SIZE } from '../Constants';


export const MainStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    left: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    textCenter: {
        textAlign: 'center',
    },
    spreadColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    spreadRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    borderRadius1: {
        borderRadius: (RADIUS_SIZE*0.2),
    },
    borderRadius2: {
        borderRadius: (RADIUS_SIZE*0.4),
    },
    borderRadius3: {
        borderRadius: (RADIUS_SIZE*0.6),
    },
    borderRadius4: {
        borderRadius: (RADIUS_SIZE*0.8),
    },
    borderRadius5: {
        borderRadius: RADIUS_SIZE,
    },
    borderRadiusC: {
        borderRadius: Number.MAX_SAFE_INTEGER,
    },
});