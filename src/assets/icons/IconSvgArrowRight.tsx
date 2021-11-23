import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgArrowRight = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Path
        d="M15 12l.707-.707.707.707-.707.707L15 12zM9.707 5.293l6 6-1.414 1.414-6-6 1.414-1.414zm6 7.414l-6 6-1.414-1.414 6-6 1.414 1.414z"
        fill={color || '#CCD2E3'}
      />
    </Svg>
  );
};
