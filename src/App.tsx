import { Stack, Avatar, Divider } from './components';
import MargaretProvider from './MargaretProvider';

const App = () => {

  return (
    <MargaretProvider>
      <Stack
        alignX="center"
        alignY="center"
        direction={{
          default: 'row',
          tablet: 'column',
          medium: 'row',
          desktop: 'column',
        }}
        padding={2}
        gap={1}
        divider={<Divider />}
      >
        <Avatar name="Cynthia Henaff" size="medium" imageUrl={'https://tym8.link/baseball-sort-push'}
        />
        <Avatar name="Henri Michel" />
      </Stack>
    </MargaretProvider>
  );
};

export default App;
