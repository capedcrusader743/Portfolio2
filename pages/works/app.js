import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/articles'

const Work = () => {
    return (
        <Layout title="FitTrack">
            <Container>
                <Title>
                    FitTrack <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A fitness tracking app that tracks your workout progress through time
                    to remind you how much how you are able to lift and the chance to
                    push it further.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/ThomasWinn/FitnessApp">
                            https://github.com/ThomasWinn/FitnessApp <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Material UI, Chart.js, Firebase Authentication, Cloud Firestone</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/fittrack.png' alt="FitTrack" />
            </Container>
        </Layout>
    )
}

export default Work

