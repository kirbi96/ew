import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgFilter = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Path
        d="M9.658 19.78l.158.475-.158-.474zm5-1.666l.158.474-.158-.474zm5.05-10.821l.353.353-.354-.353zm-4.415 4.414l-.354-.353.354.353zM5 4.5h14v-1H5v1zm-.5 2.086V5h-1v1.586h1zm4.56 4.768L4.647 6.939l-.707.707 4.415 4.415.707-.707zm-.56 1.06v6.892h1v-6.892h-1zm0 6.892a1 1 0 001.316.949l-.316-.949h-1zm1.316.949l5-1.667-.316-.948-5 1.666.316.949zm5-1.667a1 1 0 00.684-.948h-1l.316.948zm.684-.948v-5.226h-1v5.226h1zm3.854-10.7l-4.415 4.414.707.707 4.415-4.415-.707-.707zM19.5 5v1.586h1V5h-1zm.56 2.646a1.5 1.5 0 00.44-1.06h-1a.5.5 0 01-.146.353l.707.707zm-4.56 4.768a.5.5 0 01.146-.353l-.707-.707a1.5 1.5 0 00-.439 1.06h1zm-7.146-.353a.5.5 0 01.146.353h1a1.5 1.5 0 00-.44-1.06l-.706.707zM3.5 6.586c0 .398.158.78.44 1.06l.706-.707a.5.5 0 01-.146-.353h-1zM19 4.5a.5.5 0 01.5.5h1A1.5 1.5 0 0019 3.5v1zm-14-1A1.5 1.5 0 003.5 5h1a.5.5 0 01.5-.5v-1z"
        fill={color || '#fff'}
      />
    </Svg>
  );
};