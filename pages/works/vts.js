import { Container, Badge, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/articles'

const Work = () => {
    return (
        <Layout title="VTS">
            <Container>
                <Title>
                    Virtual Transit Simulator <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A project from school that models vehicle transit around the University of Minnesota campus. 
                    Specifically, the software simulates the behavior of vehicles and passengers on campus.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Java, Javascript</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/vts.png' alt="VTS" />
            </Container>
        </Layout>
    )
}

export default Work

