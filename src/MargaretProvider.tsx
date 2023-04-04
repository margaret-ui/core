import { useState, FC, ReactNode } from 'react';
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components';
import {
  injectPalette,
  injectMargaret,
  theme as defaultTheme,
  colors as defaultColors,
} from './ui';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import { ColorMode, ColorPaletteWrapper, ColorsOverride } from './types';
import { AppContext } from './contexts';
import { merge } from 'lodash-es';

export const GlobalVars = createGlobalStyle`
  :root {
    ${({ theme }) =>
      injectPalette({
        palette: theme.colors as ColorPaletteWrapper,
        prefix: 'colors',
      })}

    ${({ theme }) =>
      injectPalette({
        palette: theme.ui as ColorPaletteWrapper,
        prefix: 'ui',
      })}

    ${({ theme }) =>
      injectPalette({
        palette: theme.fontStacks as ColorPaletteWrapper,
        prefix: 'fonts',
      })}

    ${({ theme }) =>
      injectPalette({
        palette: Object.entries(theme.breakpoints || {}).reduce(
          (breakpoints: any, [breakpoint, value]) => {
            breakpoints[breakpoint as string] = `${value / 16}rem`;
            return breakpoints;
          },
          {},
        ) as any,
        prefix: 'breakpoint',
      })}

    ${({ theme }) =>
      injectPalette({
        palette: theme.borderRadius as ColorPaletteWrapper,
        prefix: 'border-radius',
      })}

    ${({ theme }) =>
      injectPalette({
        palette: theme.shadows as ColorPaletteWrapper,
        prefix: 'shadows',
      })}
  }

  :root {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export type MargaretProviderProps = {
  theme?: Omit<DefaultTheme, 'media' | 'spacing'>;
  colors?: ColorsOverride;
  children?: ReactNode;
};

const MargaretProvider: FC<MargaretProviderProps> = ({
  theme,
  children,
  colors,
}) => {
  const [mainNavIsExpanded, setMainNavIsExpanded] = useState<boolean>(false);
  const [colorMode, setColorMode] = useState<ColorMode>(ColorMode.Light);

  const handleExpandMainNav = () => setMainNavIsExpanded(true);
  const handleCollapseMainNav = () => setMainNavIsExpanded(false);
  const handleToggleMainNav = () => setMainNavIsExpanded(!mainNavIsExpanded);
  const handleSwitchColorMode = () =>
    setColorMode(
      colorMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light,
    );

  return (
    <AppContext.Provider
      value={{
        colorMode,
        mainNavIsExpanded,
        expandMainNav: handleExpandMainNav,
        collapseMainNav: handleCollapseMainNav,
        toggleMainNav: handleToggleMainNav,
        switchColorMode: handleSwitchColorMode,
      }}
    >
      <ThemeProvider
        theme={injectMargaret({
          theme: {
            ...merge(defaultTheme, theme),
            colorMode,
          } as DefaultTheme,
          colors: merge(defaultColors, colors),
        })}
      >
        <GlobalVars />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default MargaretProvider;
