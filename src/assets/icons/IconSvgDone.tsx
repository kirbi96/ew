import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgDone = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Path
        d="M5 14l3.233 2.425a1 1 0 001.374-.167L18 6"
        stroke={color || '#CCD2E3'}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};
