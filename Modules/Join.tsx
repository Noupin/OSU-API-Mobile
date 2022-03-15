//Third Party Imports
import React, { FC } from 'react';
import { View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

//First Party Imports
import { colorState, nameState, themeState } from '../RecoilState';
import { SText } from '../Components/SText';
import { MainStyles } from '../Styles/MainStyles';
import { SButton } from '../Components/SButton';
import { openLink } from '../Helpers/Links';
import { Icon } from 'react-native-elements';
import { STeamCard } from '../Components/STeamCard';


export const Join: FC = () => {
  const colors = useRecoilValue(colorState);

  return (
    <View style={[MainStyles.container, {marginHorizontal: 10, justifyContent: 'space-between'}]}>
      <SText style={[MainStyles.textCenter, {marginBottom: 15, fontWeight: 'bold', fontSize: 25}]}>
        Join OSU API
      </SText>

      <View style={{flex: 1}}/>

      <View style={[MainStyles.center, {flex: 5}]}>
        <SText style={[MainStyles.textCenter, {fontSize: 20, marginTop: 10, marginBottom: 10}]}>
          Teams
        </SText>
        <View style={[MainStyles.center, {flexDirection: 'row', marginTop: 10, marginBottom: 10, flex: 1}]}>
          <STeamCard name='Education' style={[{...MainStyles.textCenter, flex: 1, margin: 5}]}
            description='To educate amputees about their options for technologies'/>
          <STeamCard name='Communications' style={[{...MainStyles.textCenter, flex: 1, margin: 5}]}
            description='Ensuring amputees and professions know how to work with us'/>
        </View>
        <View style={[MainStyles.center, {flexDirection: 'row', marginTop: 10, marginBottom: 10, flex: 1}]}>
          <STeamCard name='Production' style={[{...MainStyles.textCenter, flex: 1, margin: 5}]}
            description='Manufacturing affordable open-source prosthetics'/>
          <STeamCard name='Sustainability' style={[{...MainStyles.textCenter, flex: 1, margin: 5}]}
            description='Guarantee prothetics are made with recycled materials'/>
        </View>

        <SButton style={[MainStyles.borderRadius2, MainStyles.center, {padding: 10, margin: 5,
        flexDirection: 'row', marginHorizontal: 25}]}
        onPress={() => openLink('https://forms.gle/NXdRubsF6wfLjPUX8')}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 3}}>
            <SText style={[MainStyles.textCenter]}>Fill Out The Form</SText>
          </View>
          <View style={[MainStyles.left, {flex: 1}]}>
            <Icon name='form' type='antdesign' color={colors.text}
              hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
          </View>
          <View style={{flex: 1}}></View>
        </SButton>
      </View>

      <View style={{flex: 1}}/>

      <View>
        <SText style={[MainStyles.textCenter]}>
          Email Us: <SText style={{fontWeight: 'bold'}}>president@apiprosthetics.org</SText>
        </SText>
        <SText style={[MainStyles.textCenter]}>
          On Socials: <SText style={{fontWeight: 'bold'}}>@apiprosthetics</SText>
        </SText>
      </View>
    </View>
  );
}