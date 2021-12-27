import { createContext, useState, useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  injectPalette,
  injectMargaret,
  theme as defaultTheme,
  colors as defaultColors,
} from './ui';
import { createBreakpoint } from 'react-use';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';

const AppContext = createContext();

export const useMargaret = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error(`useMargaret must be used within a MargaretProvider`);
  }

  return context;
};

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

const MargaretProvider = ({ theme, children, colors }) => {
  const [mainNavIsExpanded, setMainNavIsExpanded] = useState();
  const [colorMode, setColorMode] = useState('light');
  const breakpoint = useBreakpoint();

  const isMobile = breakpoint === 'mobile';
  const isDesktop = breakpoint === 'desktop';
  const isMobileOrTablet = !isDesktop;

  const handleExpandMainNav = () => setMainNavIsExpanded(true);
  const handleCollapseMainNav = () => setMainNavIsExpanded(false);
  const handleToggleMainNav = () => setMainNavIsExpanded(!mainNavIsExpanded);
  const handleSwitchColorMode = () =>
    setColorMode(colorMode === 'light' ? 'dark' : 'light');

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
