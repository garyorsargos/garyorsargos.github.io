import { Box, Container, Heading, SimpleGrid, Text, VStack, Link, Tag, Divider, Flex } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link?: string
}

const ProjectCard = ({ title, description, technologies, link }: ProjectCardProps) => (
  <Box
    p={[6, 8]}
    bg="gray.800"
    borderRadius="lg"
    _hover={{ 
      transform: 'translateY(-2px)',
      boxShadow: 'lg'
    }}
    transition="all 0.2s"
    h="100%"
  >
    <VStack align="flex-start" spacing={4} h="100%">
      <Flex justify="space-between" w="100%" align="center">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        {link && (
          <Link 
            href={link} 
            isExternal
            _hover={{ color: 'blue.400' }}
            transition="all 0.2s"
          >
            <FaGithub size={24} />
          </Link>
        )}
      </Flex>
      <Text color="gray.400" fontSize={['sm', 'md']}>
        {description}
      </Text>
      <Box mt="auto">
        {technologies.map((tech) => (
          <Tag 
            key={tech} 
            mr={2} 
            mb={2} 
            variant="subtle" 
            colorScheme="blue"
            size={['sm', 'md']}
          >
            {tech}
          </Tag>
        ))}
      </Box>
    </VStack>
  </Box>
)

export const Projects = () => {
  const projects = [
    {
      title: 'KarmaKit',
      description: 'Developed a flexible, extensible user reputation and trust system for Node.js applications. Implemented configurable scoring, trust levels, and rate limiting with Redis caching and PostgreSQL persistence. Built a comprehensive RESTful API for karma tracking, event logging, and user history management.',
      technologies: ['Node.js', 'PostgreSQL', 'Redis', 'RESTful API'],
      link: 'https://github.com/garyorsargos/karma-kit'
    },
    {
      title: 'CARVER Dashboard',
      description: 'Led full-stack development of a secure, containerized web app for the U.S. Army Special Operations Command, automating the CARVER protocol to prioritize defense targets. Built scalable backend services in Spring Boot with Redis caching and SQL persistence, enabling fast multi-user access and ranking workflows. Developed an intuitive React frontend for real-time collaboration, saving users hours in session planning and coordination.',
      technologies: ['Spring Boot', 'Redis', 'SQL', 'Docker', 'React'],
      link: 'https://github.com/garyorsargos/carver-matrix'
    },
    {
      title: 'Pegasus Parking',
      description: 'Developed a location-aware web and mobile app to help UCF students find valid parking based on their permits. Built RESTful APIs using Express.js to serve real-time parking data from a relational SQL backend. Implemented dynamic filtering and interactive maps in React, enabling quick identification of valid parking zones.',
      technologies: ['React', 'Express.js', 'SQL'],
      link: 'https://github.com/garyorsargos/pegasus-parking'
    }
  ]

  return (
    <Box id="projects" py={20} w="100%" position="relative">
      <Container maxW="90%" px={[4, 6, 8]}>
        <VStack spacing={8} align={['center', 'center', 'flex-start']} w="100%">
          <Heading as="h2" size="xl" textAlign={['center', 'center', 'left']}>
            Projects
          </Heading>
          
          <SimpleGrid 
            columns={[1, 1, 2]} 
            spacing={[6, 8]}
            w="100%"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
      <Divider position="absolute" bottom={0} opacity={0.2} />
    </Box>
  )
} 