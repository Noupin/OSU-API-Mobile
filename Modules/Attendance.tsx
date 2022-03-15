//Third Party Imports
import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Icon } from 'react-native-elements';

//First Party Imports
import { attendanceTypeState, colorState, nameState } from '../RecoilState';
import { SText } from '../Components/SText';
import { MainStyles } from '../Styles/MainStyles';
import { STextInput } from '../Components/STextInput';
import { SButton } from '../Components/SButton';
import { ATTENDANCE_TYPE_ICON, ATTENDANCE_TYPE_ICON_TYPE, NEXT_ATTENDANCE_TYPE } from '../Constants';


export const Attendance: FC = () => {
  const colors = useRecoilValue(colorState);
  const [name, setName] = useRecoilState(nameState)
  const [uuid, setUuid] = useState('')
  const [attendanceType, setAttendanceType] = useRecoilState(attendanceTypeState)

  return (
    <View style={{flex: 1, alignItems: "center", marginHorizontal: 10, marginBottom: 10,
    justifyContent: 'space-between'}}>
      <View>
        <SText style={[MainStyles.center, MainStyles.textCenter, {marginBottom: 15, fontWeight: 'bold',
        fontSize: 25}]}>
          Attendance
        </SText>
        <SText style={[MainStyles.center, MainStyles.textCenter, {fontSize: 20}]}>
          Meeting ID: {uuid ? uuid : 'No ID'}
        </SText>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center', width: "100%"}}>
            <View style={{flex: 1}}/>
            <View style={{flex: 12, justifyContent: 'center'}}>
              <SText>Attendance Type</SText>
            </View>
            <View style={[MainStyles.borderRadiusC, MainStyles.center, {padding: 7, flex: 2, marginRight: 2}]}>
              <TouchableOpacity style={[MainStyles.borderRadiusC, {backgroundColor: colors.textInputBackground,
              padding: 5}]} onPress={() => {
                setAttendanceType(NEXT_ATTENDANCE_TYPE[attendanceType])
              }}>
                <Icon name={ATTENDANCE_TYPE_ICON[attendanceType]} type={ATTENDANCE_TYPE_ICON_TYPE[attendanceType]}
                color={colors.text} hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}/>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', width: "100%"}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 12}}>
          <STextInput style={[MainStyles.textCenter, MainStyles.borderRadius2, 
          {color: colors.text, backgroundColor: colors.textInputBackground, marginVertical: 10}]}
          onChangeText={setUuid} value={uuid} autoCorrect={false} alignText="center"
          padding={10} placeholder="Meeting ID"/>
        </View>
        <SButton style={[MainStyles.borderRadius2, MainStyles.center, {marginHorizontal: 10, flex: 2,
        height: 'auto', paddingVertical: 5}]}>
          <Icon name='ios-checkmark-circle-outline' type='ionicon' color={colors.text}
            hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
        </SButton>
        <View style={{flex: 1}}></View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', width: "100%"}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 4}}>
          <SButton style={[MainStyles.borderRadius2, MainStyles.center,
          {padding: 10, margin: 5, flexDirection: 'row'}]}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 8}}>
              <SText style={[MainStyles.textCenter]}>Generate Meeting ID</SText>
            </View>
            <View style={[MainStyles.left, {flex: 2}]}>
              <Icon name='ios-refresh-circle-outline' type='ionicon' color={colors.text}
                hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
            </View>
            <View style={{flex: 1}}></View>
          </SButton>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
}