import Svg, {Path, Rect} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgDownload = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Path
        d="M12 5l-.424-.424L12 4.15l.424.425L12 5zm.6 9a.6.6 0 11-1.2 0h1.2zM6.576 9.576l5-5 .848.848-5 5-.848-.848zm5.848-5l5 5-.848.848-5-5 .848-.848zM12.6 5v9h-1.2V5h1.2z"
        fill={color || '#fff'}
      />
      <Path
        d="M5 16v1a2 2 0 002 2h10a2 2 0 002-2v-1"
        stroke={color || '#fff'}
        strokeWidth={1.2}
      />
      <Rect
        x={5}
        y={15}
        width={14}
        height={4}
        rx={2}
        fill={color || '#fff'}
        fillOpacity={0.25}
      />
    </Svg>
  );
};
