import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      Website is inspired by{' '}
      <Link href='https://www.craftz.dog/'>Takuya Matsuyama </Link>
      and art is from Walfie.
    </Box>
  )
}

export default Footer