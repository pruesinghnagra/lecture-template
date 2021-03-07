import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/EDA-square.png'
import virtualDomImg from '../images/virtual-dom.png'

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
        tertiary: 'pink'
    },
    fonts: {
        header: 'monospace',
        text: 'monospace'
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

const transition = {
    from: {
      position: 'fixed',
      transform: 'translate(100%, 0%)'
    },
    enter: {
      position: 'fixed',
      transform: 'translate(0, 0%)'
    },
    leave: {
      position: 'fixed',
      transform: 'translate(-100%, 0%)'
    }
  };

function SlideDeck () {
    return (
        <Deck theme={theme} template={template} transition={transition}>
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
                <CodePane
                    language="javascript"
                    theme="solarizedlight"
                    highlightRanges={[5, 11]}>
                    {`
                        function App () {
                            const [greeting, setGreeting] = useState('')
                            const [count, setCount] = useState(0)
                          
                            useEffect(() => {
                              getGreeting()
                                .then((greeting) => {
                                  console.log(greeting)
                                  setGreeting(greeting)
                                })
                            }, [count])
                          
                            return (
                              <>
                              {count}
                              <h1>{greeting}</h1>
                              <button onClick={() => setCount(count + 1)}>Click</button>
                              </>
                            )
                        }
                    `}
                </CodePane>
            </Slide>
            <Slide>
                <Heading>Maybe a concept?</Heading>
                <Text fontSize="35px">Virtual DOM - is an in-memory representation of the real DOM elements generated by React components before any changes are made to the page.</Text>
                <Grid
                    alignItems="center"
                    justifyContent="center"
                    gridRowGap={1}
                >
                    <FlexBox paddingTop={0} flex={1}>
                    <Image src={virtualDomImg} width={600} />
                    </FlexBox>
                </Grid>
            </Slide>
            <div>
                <Slide>
                    <Heading>This is a slide embedded in a div</Heading>
                </Slide>
            </div>
            <MarkdownSlide backgroundColor='primary'>
            {`
                # This is a Markdown Slide
                `}
            </MarkdownSlide>
            <MarkdownSlideSet>
            {`
                # This is the first slide of a Markdown Slide Set
                ---
                # This is the second slide of a Markdown Slide Set
                `}
            </MarkdownSlideSet>
            <Slide>
                <h2>To the <Link to="/demo">Demo</Link></h2>
            </Slide>
        </Deck>
    )
} 

export default SlideDeck
