//Third Party Imports
import React, { FC, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useRecoilState, useRecoilValue } from 'recoil';

//First Party Imports
import { colorState, nameState, themeState } from '../RecoilState';
import { NEXT_THEME, THEME_COLORS, THEME_ICON, THEME_ICON_TYPE } from '../constants';
import { SText } from '../Components/SText';
import { MainStyles } from '../Styles/MainStyles';
import { STextInput } from '../Components/STextInput';


export const Settings: FC = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const colors = useRecoilValue(colorState);
  const [name, setName] = useRecoilState(nameState)

  return (
    <View style={{flex: 1, alignItems: "center", marginHorizontal: 10}}>
      <SText style={{marginBottom: 15, fontWeight: 'bold', fontSize: 25}}>Settings</SText>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <SText>Change Name: {name}</SText>
        <View style={{flexDirection: 'row', alignItems: 'center', width: "100%"}}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 4}}>
            <STextInput style={[MainStyles.textCenter, MainStyles.borderRadius2, 
            {color: colors.text, backgroundColor: colors.textInputBackground, marginVertical: 10}]}
            onChangeText={setName} value={name} autoCorrect={false} alignText="center"
            padding={10} placeholder="This"/>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, marginHorizontal: 15}}>
        <SText style={{flex: 1}}>Color Theme</SText>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 5}}>
          <View style={{...MainStyles.borderRadiusC, padding: 5}}>
            <TouchableOpacity onPress={() => {
              setTheme(NEXT_THEME[theme])
            }}>
              <Icon name={THEME_ICON[theme]} type={THEME_ICON_TYPE[theme]}
              color={theme === 'device' ? colors.text:THEME_COLORS[theme]}
              hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}