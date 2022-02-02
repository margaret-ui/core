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
        <Avatar
          name="Cynthia Henaff"
          size="medium"
          imageUrl="https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <Avatar name="Cynthia Henaff" />
      </Stack>
    </MargaretProvider>
  );
};

export default App;
