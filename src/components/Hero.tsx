import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/layout'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const Hero = () => {
  return (
    <Box
      id="hero"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="90%" px={[4, 6, 8]}>
        <VStack spacing={6} align={['center', 'center', 'flex-start']} w="100%">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize={['lg', 'xl']} color="blue.400">
              Hey, I'm
            </Text>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading as="h1" size={['2xl', '3xl']} fontWeight="bold">
              Gary Orsargos III
            </Heading>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Text fontSize={['xl', '2xl']} color="gray.400">
              Computer Science Student & Software Engineer
            </Text>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            w="100%"
          >
            <Text 
              maxW="800px" 
              color="gray.400"
              textAlign={['center', 'center', 'left']}
              fontSize={['md', 'lg']}
            >
              Computer Science major at UCF with a strong academic foundation and hands-on 
              experience in software development. Passionate about building innovative solutions 
              across various technologies, from web applications to machine learning. Proven 
              track record of delivering impactful projects and adapting to new challenges.
            </Text>
          </MotionBox>
        </VStack>
      </Container>
      <Divider position="absolute" bottom={0} opacity={0.2} />
    </Box>
  )
} 