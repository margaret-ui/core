import { Stack, Avatar, ButtonReset, Divider, Container } from './components';
import MargaretProvider from './MargaretProvider';

const App = () => {
  return (
    <MargaretProvider>
      <Container size="narrow">
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
            size="medium"
            imageUrl="https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
          <Avatar>CH</Avatar>
          <ButtonReset onClick={() => console.log('click')}>
            <Avatar>{Avatar.getInitials('Henri Michel')}</Avatar>
          </ButtonReset>
        </Stack>
        <Avatar.Group size="medium" showBorder spacing={-2}>
          <Avatar
            size="medium"
            imageUrl="https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
          <Avatar bg="tomato">CH</Avatar>
          <Avatar bg="rebeccapurple" name="Henri Michel"></Avatar>
          <Avatar bg="blue">{Avatar.getInitials('Henri Michel')}</Avatar>
          <Avatar bg="blue">{Avatar.getInitials('Henri Michel')}</Avatar>
          <Avatar bg="blue">{Avatar.getInitials('Henri Michel')}</Avatar>
          <Avatar bg="blue">{Avatar.getInitials('Henri Michel')}</Avatar>
          <Avatar bg="blue">{Avatar.getInitials('Henri Michel')}</Avatar>
          <Avatar bg="blue">{Avatar.getInitials('Henri Michel')}</Avatar>
        </Avatar.Group>
      </Container>
    </MargaretProvider>
  );
};

export default App;
