import React from 'react';
import {
    Container,
    Divider,
    SlideFade,
    Heading,
    Flex,
    Header,
    Stack,
    Box,
    VStack,
    useColorMode,
    Text
} from '@chakra-ui/react';



import Paragraph from '../components/Paragraph';

function About() {
    const { colorMode } = useColorMode();

    return (
       
           
             
                    <SlideFade in offsetX={80}>
                        <Box>
                         
                                <Flex alignItems={'center'}>
                                 
                                    <Heading>About Me</Heading>
                                </Flex>
                         

                            <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                                I am a passionate web developer from Meerut, Uttar Pradesh. I earned my bachelor’s degree in B.Tech from NIT(National Institute of Technology), Mizoram. I have done various group as well as individual projects in my coding journey. Check out some of my work in the Projects section.
                              
                            </Paragraph>

                            <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                            I am driven to build web applications that
            are both beautiful and user-friendly. I am excited about problem-solving
            and building technologies that have a positive impact on the world.
                            </Paragraph>    

                         

                        </Box>
                    </SlideFade>
           

     
    )
}

export default About;

