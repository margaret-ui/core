//import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  Stack,
  Avatar,
  ButtonReset,
  Button,
  Divider,
  Container,
  Heading,
  Text,
  VisuallyHidden,
} from './components';
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
        <Stack gap={2} paddingTop={2}>
          <Button>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>
          <Button variant="link">Hello</Button>
        </Stack>
        <Stack gap={2} paddingTop={2}>
          <Button disabled>Hello</Button>
          <Button variant="outline" disabled>
            Hello
          </Button>
          <Button variant="ghost" disabled>
            Hello
          </Button>
          <Button variant="link" disabled>
            Hello
          </Button>
        </Stack>
        <Stack gap={2} paddingTop={2}>
          <Button variant="solid" size="small">
            Hello
          </Button>
          <Button variant="solid" size="default">
            Hello
          </Button>
          <Button variant="solid" size="large">
            Hello
          </Button>
        </Stack>

        <Stack direction="column" gap={1} marginTop={4}>
          <Heading as="h1">Typographie</Heading>
          <Heading as="h1" fontStyles="heading2">
            Coucou
          </Heading>
          <Heading as="h2">Coucou</Heading>
          <Heading as="h2" color="primary">
            Coucou
          </Heading>
          <Text fontStyles="body2">
            Coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou,
            coucou, coucou, coucou.
          </Text>
          <Text color="primary" fontSize="footnote2">
            Coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou,
            coucou, coucou, coucou.
          </Text>
          <Text marginBottom={2} fontStyles="footnote2">
            Coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou,
            coucou, coucou, coucou.
          </Text>
        </Stack>
        <Stack>
          <Button variant="outline" size="small">
            ❌<VisuallyHidden>Close the modal</VisuallyHidden>
          </Button>
        </Stack>
      </Container>
    </MargaretProvider>
  );
};

export default App;
