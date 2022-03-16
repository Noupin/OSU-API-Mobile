//Third Party Imports
import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useRecoilState, useRecoilValue } from 'recoil';

//First Party Imports
import { colorState, nameState, themeState } from '../RecoilState';
import { ATTENDANCE_ICON, NEXT_THEME, THEME_COLORS, THEME_ICON, THEME_ICON_TYPE } from '../Constants';
import { SText } from '../Components/SText';
import { MainStyles } from '../Styles/MainStyles';
import { STextInput } from '../Components/STextInput';
import { SButton } from '../Components/SButton';
import { settingsNavigate } from '../Helpers/Navigation';


export const Settings: FC = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const colors = useRecoilValue(colorState);
  const [name, setName] = useRecoilState(nameState)
  const [locName, setLocName] = useState('')

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: 'space-between'}}>
      <View style={{flex: 1, alignItems: "center"}}>
        <SText style={{marginBottom: 15, fontWeight: 'bold', fontSize: 25}}>Settings</SText>

        <SText style={[MainStyles.textCenter, {fontSize: 20, margin: 10, alignSelf: 'flex-start', marginLeft: 15}]}>
          Profile: {name}
        </SText>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', width: "100%"}}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 12}}>
              <STextInput style={[MainStyles.textCenter, MainStyles.borderRadius2, 
              {color: colors.text, backgroundColor: colors.textInputBackground, marginVertical: 10}]}
              onChangeText={setLocName} value={locName} autoCorrect={false} alignText="center"
              padding={10} placeholder="Your New Name"/>
            </View>
            <SButton style={[MainStyles.borderRadius2, MainStyles.center, {marginHorizontal: 10, flex: 2,
            height: 'auto', paddingVertical: 5}]} onPress={() => {if(locName !== '') setName(locName)}}>
              <Icon name='arrow-up-circle-outline' type='ionicon' color={colors.text}
                hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
            </SButton>
            <View style={{flex: 1}}></View>
          </View>
        </View>

        <SText style={[MainStyles.textCenter, {fontSize: 20, margin: 10, alignSelf: 'flex-start', marginLeft: 15}]}>
          Appearance
        </SText>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', width: "100%"}}>
            <View style={{flex: 1}}/>
            <View style={{flex: 12, justifyContent: 'center'}}>
              <SText>Color Theme</SText>
            </View>
            <View style={[MainStyles.borderRadiusC, MainStyles.center, {padding: 7, flex: 2, marginRight: 2}]}>
              <TouchableOpacity style={[MainStyles.borderRadiusC, {backgroundColor: colors.textInputBackground,
              padding: 5}]} onPress={() => {
                setTheme(NEXT_THEME[theme])
              }}>
                <Icon name={THEME_ICON[theme]} type={THEME_ICON_TYPE[theme]}
                color={theme === 'device' ? colors.text:THEME_COLORS[theme]}
                hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}/>
          </View>
        </View>
      </View>

      {/*<View style={{flexDirection: 'row', alignItems: 'center', width: "100%"}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 4}}>
          <SButton style={[MainStyles.borderRadius2, MainStyles.center,
          {padding: 10, margin: 5, flexDirection: 'row'}]} onPress={() => {settingsNavigate("Attendance")}}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 2}}>
              <SText style={[MainStyles.textCenter]}>Attendance</SText>
            </View>
            <View style={[MainStyles.left, {flex: 1}]}>
              <Icon name={ATTENDANCE_ICON.name} type={ATTENDANCE_ICON.type} color={colors.text}
                hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
            </View>
            <View style={{flex: 1}}></View>
          </SButton>
        </View>
        <View style={{flex: 1}}></View>
        </View>*/}
    </View>
  );
}