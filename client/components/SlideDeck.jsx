import React from 'react'
import logo from '../images/EDA-square.png'

import {
    FlexBox,
    Heading,
    UnorderedList,
    CodeSpan,
    OrderedList,
    ListItem,
    FullScreen,
    Progress,
    Appear,
    Slide,
    Deck,
    Text,
    Grid,
    Box,
    Image,
    CodePane,
    MarkdownSlide,
    MarkdownSlideSet,
    Notes
  } from 'spectacle';


const theme = {
    colors: {
        primary: 'white',
        secondary: 'black',
        tertiary: 'blue'
    },
    fontSizes: {
        header: '3.5rem',
        paragraph: '1rem'
    },
    fonts: {
        header: 'monospace, Helvetica, Arial, sans-serif',
        text: 'Helvetica, Arial, sans-serif'
    }
}

const template = () => (
    <FlexBox
        justifyContent="space-between"
        position="absolute"
        bottom={0}
        width={1}
    >
        <Box padding="0 1em">
        <FullScreen />
        </Box>
        <Box padding="1em">
        <Progress />
        </Box>
    </FlexBox>
)

function SlideDeck () {
    return (
        <Deck theme={theme} template={template}>
            <Slide backgroundColor='primary'>
                <Image src={logo} width={100} />
                <Heading>Mean as slides.</Heading>
            </Slide>
            <Slide backgroundColor='primary' color='secondary'>
                <Heading>Animated fun times.</Heading>
                <OrderedList color='secondary'>
                    <Appear>
                        <ListItem>What do you want to explain?</ListItem>
                    </Appear>
                    <Appear stepIndex={3}>
                        <ListItem>Redux?</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>
                            Databases?
                        </ListItem>
                    </Appear>
                </OrderedList>
            </Slide>
            <Slide backgroundColor='primary' color='secondary'>
            <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';
        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });
        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
            </Slide>
        </Deck>
    )
} 

export default SlideDeck
