import React, { FC } from 'react';
import merge from 'lodash.merge';
import { ThemeProvider as Provider } from '@material-ui/core/styles';
import { baseTheme } from './assets/theme';

interface Props {
  theme: any;
}

export const ThemeProvider: FC<Props> = ({ theme, children }) => {
  const mergedTheme = merge(baseTheme, theme);
  return <Provider theme={mergedTheme}>{children}</Provider>;
};
