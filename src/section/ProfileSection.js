import React from 'react';
import { SlideFade, Box, Heading, Avatar, Image, Link, Flex, LightMode, ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import { FaLinkedin, FaStackOverflow, FaMedium } from 'react-icons/fa';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { socialButtons, resume } from '../constant/inde';
import SocialButton from '../components/SocialButton';
import {BiPhoneCall} from 'react-icons/bi';


const ProfileSection = () => {
    return (
        <SlideFade in offsetX={80}>
            <Box mt='5px'>
                <Flex alignItems="center" justifyContent="space-between">
                    <Heading
                        as="h1"
                        fontSize={{ base: '28px', md: '40px', lg: '48px' }}
                        mb={3}
                    >
                        Hey, I am Harsh Upadhayay! <span className="waving-hand">👋</span>
                    </Heading>
                    <Flex alignItems={"flex-end"}>
                       
                        <Image
  borderRadius='full'
  boxSize='200px'
  src='/profileresu.jpg'
  alt='Harsh Upadhayay'

/>
                    </Flex>
                </Flex>
                <Paragraph fontSize="2xl" lineHeight={1.6}>
                    Full Stack Web Developer from India
                </Paragraph>
                <Paragraph fontSize="2xl" lineHeight={1.6}>
                    Focused on {" "}
                    <Link color={useColorModeValue("blue.500", "blue.400")} href="https://reactjs.org/" fontWeight="500" isExternal>
                        MERN Stack
                    </Link>{" "}
                    {/* <Link color={useColorModeValue("blue.500", "blue.400")} href="https://www.apple.com/my/ios" fontWeight="500" isExternal>
                        iOS &
                    </Link>{" "}
                    <Link color={useColorModeValue("blue.500", "blue.400")} href="https://reactnative.dev/" fontWeight="500" isExternal>
                        React JS
                    </Link>. */}
                    {/* {"\n"}Passion in beautiful UI / UX */}
                    {/* <Link color={useColorModeValue("blue.500", "blue.400")} href="https://skynight1996.medium.com/" fontWeight="500" isExternal>
                        Medium
                    </Link>. 🔥 */}
                </Paragraph>

                <Box mt={5}>
                    <LightMode>
                        <ButtonGroup>
                            <SocialButton
                                social={resume}
                            />
                            <Link href={'https://www.linkedin.com/in/harsh-upadhyay-b27aa9202/'} style={{ textDecoration: 'none' }}>
                                <Button
                                    colorScheme="blue"
                                    size='sm'
                                    margin={'5px'}
                                    leftIcon={<SiLinkedin color='white'/>}
                                >
                                 Linkedin
                                </Button>
                            </Link>
                        </ButtonGroup>

                    </LightMode>
                </Box>

           
            </Box>
        </SlideFade >
    )
}

export default ProfileSection;
