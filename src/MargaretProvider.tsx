import { useState, FC } from 'react';
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components';
import { createBreakpoint } from 'react-use';
import {
  injectPalette,
  injectMargaret,
  theme as defaultTheme,
  colors as defaultColors,
} from './ui';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import { ColorMode, ColorsOverride } from './types';
import { AppContext } from './contexts';

export const useBreakpoint = createBreakpoint({
  loading: 0,
  mobile: 1,
  ...defaultTheme?.breakpoints,
});

export const GlobalVars = createGlobalStyle`
  :root {
    ${({ theme }) => injectPalette({ palette: theme.colors, prefix: 'colors' })}
    ${({ theme }) => injectPalette({ palette: theme.ui, prefix: 'ui' })}
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
  const breakpoint = useBreakpoint();

  const isMobile = breakpoint === 'mobile';
  const isDesktop = breakpoint === 'desktop';
  const isMobileOrTablet = !isDesktop;

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
        breakpoint,
        isMobile,
        isMobileOrTablet,
        isDesktop,
        colorMode,
        switchColorMode: handleSwitchColorMode,
      }}
    >
      <ThemeProvider
        theme={injectMargaret({
          theme: { ...defaultTheme, ...theme, colorMode },
          colors: { ...defaultColors, ...colors },
        })}
      >
        <GlobalVars />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default MargaretProvider;
