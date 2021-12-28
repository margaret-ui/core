import { createContext } from 'react';

export type AppContextData = {};

const defaultAppContext = {};

export const AppContext = createContext<AppContextData>(defaultAppContext);
