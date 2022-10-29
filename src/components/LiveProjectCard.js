import React from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    VStack,
    LinkOverlay,
    Button,
    Link,
    HStack
} from "@chakra-ui/react";
import { MotionBox } from '../utils/motion';
import Paragraph from './Paragraph';
import { SiGithub } from 'react-icons/si';
import {FaLink} from 'react-icons/fa';
export const LiveProjectCard = ({ project }) => (
    <MotionBox whileHover={{ y: -5 }}>
        <Box
            p={4}
            display={{ md: "flex" }}
            borderWidth={1}
            margin={2}
            rounded={'10px'}
            _hover={{
                borderColor: "blue.500",
            }}
        >
            <Flex
                alignItems="center"
                justifyContent="space-around"
                direction={{ base: 'column', md: 'row' }}
            >
                <Image
                    margin="auto"
                    src={project.imageUrl}
                    alt={project.alt}
                    objectFit={'cover'}
                    boxSize={['100px', '150px', '150px', '150px']}
                />
                <Flex flexDirection="column" ml={[0, 5, 5]} mt={[5, 5, 0, 0]}>
                    <Heading as="h2" fontSize="lg" fontWeight="600" color={"blue.400"}>
                        {project.name}
                    </Heading>
                    <Paragraph mt={'10px'}>
                        <Text>{project.summary}</Text>
                    </Paragraph>

                    <HStack my={2} p={3}>
                        {/* <Button
                         
                            alt='playstore'
                            objectFit={'cover'}
                            onClick={() => window.open(project.playstore)}
                        ></Button> */}
                 <Button leftIcon={<SiGithub/>}  onClick={() => window.open(project.githublink)}>Github</Button>
              <Button colorScheme='blue'  leftIcon={<FaLink/>}  onClick={() => window.open(project.livelink)}>Go Live</Button>
                        {/* <Button
                            src={'/appstore.png'}
                            alt='appstore'
                            objectFit={'cover'}
                            onClick={() => window.open(project.appstore)}
                        ></Button> */}
                    </HStack>
                </Flex>
            </Flex>
        </Box>
    </MotionBox>

)
