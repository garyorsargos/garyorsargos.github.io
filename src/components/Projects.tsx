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
      title: 'CARVER Matrix App',
      description: 'Developed a full-stack application for US Army Special Operations Command that digitizes target prioritization protocols. Features include user authentication with Keycloak, containerized microservices architecture with Docker, and a modern React frontend with Material UI.',
      technologies: ['TypeScript', 'Java', 'Docker', 'React', 'Material UI', 'Keycloak', 'PostgreSQL'],
      link: 'https://github.com/garyorsargos/carver-matrix'
    },
    {
      title: 'Pegasus Parking',
      description: 'Created a user-friendly application to help UCF students optimize their parking experience. Built with a modern tech stack, featuring real-time garage availability, permit-based recommendations, and a public API for campus-wide integration.',
      technologies: ['React', 'RESTful API', 'Geolocation', 'Database Design'],
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