import { useContext } from 'react';
import { AppContext } from '../contexts';

export const useMargaret = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error(`useMargaret must be used within a MargaretProvider`);
  }

  return context;
};
