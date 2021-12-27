import { useState } from 'react';
import { Stack } from './components';
import MargaretProvider from './MargaretProvider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <MargaretProvider>
      <Stack direction="column" gap={2}>
        <div>Coucou</div>
        <div>Coucou</div>
        <div>Coucou</div>
      </Stack>
    </MargaretProvider>
  );
}

export default App;
