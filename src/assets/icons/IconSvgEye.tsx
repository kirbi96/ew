import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgEye = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.92 12.799a4 4 0 00-4.719-4.719l4.72 4.719zM8.667 9.788a4 4 0 005.545 5.545l-1.474-1.474a2 2 0 01-2.598-2.598L8.668 9.789z"
        fill={color || '#CCD2E3'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.52 17.64l-1.47-1.469c-.972.51-2.002.829-3.05.829-1.526 0-3.014-.678-4.34-1.632-1.32-.95-2.396-2.112-3.076-2.938-.1-.121-.174-.212-.236-.291a2.047 2.047 0 01-.1-.139c.02-.031.051-.075.1-.139.062-.08.136-.17.236-.291.665-.808 1.71-1.938 2.99-2.875l-1.43-1.43C4.797 8.297 3.723 9.47 3.04 10.3l-.073.088c-.314.375-.737.883-.737 1.613s.423 1.238.737 1.613l.073.088c.74.899 1.94 2.203 3.451 3.29C7.994 18.073 9.891 19 12 19c1.67 0 3.206-.581 4.52-1.36zM8.806 5.686C9.79 5.269 10.864 5 12 5c2.11 0 4.006.927 5.509 2.009 1.51 1.087 2.711 2.391 3.45 3.29l.074.088c.314.375.737.883.737 1.613s-.423 1.238-.737 1.613l-.073.088a20.491 20.491 0 01-2.015 2.123l-1.416-1.416a18.45 18.45 0 002.123-2.27 2.07 2.07 0 00.1-.138 2.07 2.07 0 00-.1-.139 13.85 13.85 0 00-.236-.291c-.68-.826-1.756-1.989-3.075-2.938C15.014 7.678 13.526 7 12 7c-.551 0-1.097.088-1.632.246l-1.561-1.56z"
        fill={color || '#CCD2E3'}
      />
      <Path d="M5 2l16 16" stroke={color || '#CCD2E3'} strokeWidth={2} />
    </Svg>
  );
};
