import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgClose = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 16} height={size || 16} viewBox="0 0 16 16">
      <Path
        d="M13.385.5L8 5.885 2.615.5.5 2.615 5.885 8 .5 13.385 2.615 15.5 8 10.115l5.385 5.385 2.115-2.115L10.115 8 15.5 2.615 13.385.5z"
        fill={color || '#212121'}
      />
    </Svg>
  );
};
