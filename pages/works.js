import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import appThumbnail1 from '../public/images/fittrack.png'
import appThumbnail2 from '../public/images/vts.png'
import Layout from '../components/layouts/articles'

// https://www.youtube.com/watch?v=bSMZgXzC9AA check again at 54:22

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="app" title="FitTrack" thumbnail={appThumbnail1}>
                            FitTrack
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="vts" title="VTS" thumbnail={appThumbnail2}>
                            Virtual Transit Simulator
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works