import { useState } from 'react';
import { Stack, Avatar } from './components';
import MargaretProvider from './MargaretProvider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <MargaretProvider>
      <Stack direction="column" gap={2}>
        <Avatar name="Cynthia Henaff" shape="rounded" size="huge" />
        <div>Coucou</div>
        <div>Coucou</div>
        <div>Coucou</div>
      </Stack>
    </MargaretProvider>
  );
}

export default App;
