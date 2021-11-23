import Svg, {Ellipse, Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgDelete = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Ellipse
        cx={12}
        cy={7}
        rx={7}
        ry={3}
        stroke={color || '#fff'}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path d="M7 18L5 7l3 3h8l3-3-2 11-3 2h-4l-3-2z" fill={color || '#fff'} />
      <Path
        d="M5 7l1.996 10.98a.068.068 0 00.019.035v0a7.05 7.05 0 009.97 0v0a.068.068 0 00.019-.036L19 7"
        stroke={color || '#fff'}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};
