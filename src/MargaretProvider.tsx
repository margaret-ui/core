import { useState, FC } from 'react';
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
  }
`;

export type MargaretProviderProps = {
  theme?: DefaultTheme;
  colors?: ColorsOverride;
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
        mainNavIsExpanded,
        expandMainNav: handleExpandMainNav,
        collapseMainNav: handleCollapseMainNav,
        toggleMainNav: handleToggleMainNav,
        colorMode,
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
