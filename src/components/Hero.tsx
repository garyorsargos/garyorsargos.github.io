import { Box, Heading, Text, VStack, Container, Flex } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import { TechSphere } from './TechSphere'
import { useEffect, useState } from 'react'

const MotionBox = motion(Box)

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length) {
      // After typing is complete, wait 1 second then hide cursor
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false)
      }, 1000)

      return () => clearTimeout(cursorTimeout)
    }
  }, [currentIndex, text])

  return (
    <Heading as="h1" size={['2xl', '3xl']} fontWeight="bold">
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </Heading>
  )
}

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
        <Flex 
          direction={['column', 'column', 'row']} 
          align="center" 
          justify="space-between"
          gap={8}
        >
          <VStack spacing={6} align={['center', 'center', 'flex-start']} flex={1}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text fontSize={['lg', 'xl']} color="blue.400">
                Hey, I'm
              </Text>
            </MotionBox>
            
            <TypingText text="Gary Orsargos" />
            
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

          <Box 
            w={['100%', '100%', '40%']} 
            h={['300px', '400px', '500px']}
            display={['none', 'none', 'block']}
          >
            <TechSphere />
          </Box>
        </Flex>
      </Container>
      <Divider position="absolute" bottom={0} opacity={0.2} />
    </Box>
  )
} 
