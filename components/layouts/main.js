import Head from 'next/head';
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react';
// import VoxelAme from '../voxel-ame';
import dynamic from 'next/dynamic'
import VoxelAmeLoader from '../voxel-ame-loader'
import Footer from '../footer';

const LazyVoxelAme = dynamic(() => import('../voxel-ame'), {
    ssr: false,
    loading: () => <VoxelAmeLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Tin Tran - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {/* <NoSsr>
                    <VoxelAme />
                </NoSsr> */}
                {/* <VoxelAme /> */}
                <LazyVoxelAme />
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main;