import { Box, Container, Heading, Text, SimpleGrid, VStack, Divider } from '@chakra-ui/react'

export const About = () => {
  const skills = [
    'JavaScript',
    'Python',
    'React',
    'Apache Groovy',
    'Postman',
    'CI Pipelines',
    'Machine Learning',
    'Project Management',
  ]

  return (
    <Box id="about" py={20} w="100%" position="relative">
      <Container maxW="90%" px={[4, 6, 8]}>
        <VStack spacing={8} align={['center', 'center', 'flex-start']} w="100%">
          <Heading as="h2" size="xl" textAlign={['center', 'center', 'left']}>
            About Me
          </Heading>

          <Text 
            color="gray.400" 
            fontSize={['md', 'lg']}
            textAlign={['center', 'center', 'left']}
            maxW={['100%', '100%', '800px']}
          >
            Based in Orlando, FL, I'm currently pursuing my Computer Science degree at the 
            University of Central Florida with a strong academic record of 3.9 GPA. My studies focus 
            on web development and machine learning, and I have practical experience through internships 
            at Hyatt Hotels where I've worked on automation and quality assurance projects.
          </Text>

          <Box w="100%">
            <Heading 
              as="h3" 
              size="md" 
              mb={6}
              textAlign={['center', 'center', 'left']}
            >
              Skills & Technologies
            </Heading>
            <SimpleGrid 
              columns={[2, 3, 4]} 
              spacing={[4, 5, 6]}
              w="100%"
            >
              {skills.map((skill) => (
                <Box
                  key={skill}
                  p={4}
                  bg="gray.800"
                  borderRadius="lg"
                  textAlign="center"
                  _hover={{ 
                    bg: 'gray.700',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg'
                  }}
                  transition="all 0.2s"
                >
                  <Text fontSize={['sm', 'md']}>{skill}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
      <Divider position="absolute" bottom={0} opacity={0.2} />
    </Box>
  )
} 