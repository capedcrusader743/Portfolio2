import {Button, Container, Box, Heading, Image, Link, useColorModeValue, ListItem, List } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import { BioSection, BioYear } from '../components/bio';
import Layout from "../components/layouts/articles";
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
                    Hello, I&apos;m a developer 
                </Box>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Tin Tran
                        </Heading>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/ame.png" 
                        alt="Profile Image" />
                    </Box>
                </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Paragraph>
                    Tin is a recent graduate student in Computer Science with a passion of
                    making apps to help people. He always tries to learn new things from others
                    to become better and ready for any kind of job. When not online, he likes to
                    hit the gym for a healthy lifestyle. Currently, he is coming up with project
                    ideas to do for himself and practice more programming techniques. He is looking
                    for positions such as software developer, front end developer, and back end 
                    developer. 
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Tuy Hoa, Phu Yen, Vietnam.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Completed the Associate&apos;s of Science Degree in Computer
                    Science in North Seattle College
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Completed the Bachelor&apos;s of Science Degree in Computer Science 
                    in University of Minnesota - Twin Cities
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Hobbies
                </Heading>
                <Paragraph>
                    Comic Books, Movies, Music, Playing Guitar, Biking, Video Games
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    Social Media
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/capedcrusader743" target="_blank">
                            <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoGithub />}
                            >
                                @capedcrusader743
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/tin-tran-7a380b175/" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoLinkedin />}
                            >
                                @Tin Tran
                            </Button>                            
                        </Link>

                    </ListItem>
                </List>
            </Section>

            </Container>
        </Layout>
    )
}

export default Page;