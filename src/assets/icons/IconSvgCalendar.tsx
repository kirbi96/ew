import Svg, {Path, Rect} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgCalendar = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Rect
        x={3}
        y={6}
        width={18}
        height={15}
        rx={2}
        stroke={color || '#fff'}
      />
      <Path
        d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10H3z"
        fill={color || '#fff'}
      />
      <Path d="M7 3v3M17 3v3" stroke={color || '#fff'} strokeLinecap="round" />
    </Svg>
  );
};
