import { Box, Container, Heading, VStack, Text, Flex, Divider } from '@chakra-ui/react'
import { ExperienceLogo } from './ExperienceLogo'

interface ExperienceItemProps {
  title: string
  company: string
  periods: string[]
  description: string[]
  logo: string
}

const ExperienceItem = ({ title, company, periods, description, logo }: ExperienceItemProps) => (
  <Box
    w="100%"
    p={[6, 8]}
    bg="gray.800"
    borderRadius="lg"
    _hover={{ 
      transform: 'translateY(-2px)',
      boxShadow: 'lg'
    }}
    transition="all 0.2s"
  >
    <Flex direction={['column', 'row']} gap={8}>
      <Box flex={0.6}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text color="blue.400" mb={4}>{company}</Text>
        <VStack align="flex-start" spacing={2}>
          {description.map((item, index) => (
            <Text key={index} color="gray.400" fontSize={['sm', 'md']}>
              • {item}
            </Text>
          ))}
        </VStack>
      </Box>
      <VStack spacing={4} align="flex-end" flex={0.4} minW="200px">
        <ExperienceLogo src={logo} alt={`${company} logo`} />
        <VStack spacing={1} align="flex-end">
          {periods.map((period, index) => (
            <Text key={index} color="gray.500" fontSize={['sm', 'md']} textAlign="right">
              {period}
            </Text>
          ))}
        </VStack>
      </VStack>
    </Flex>
  </Box>
)

export const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer in Test Intern',
      company: 'Hyatt Hotels, Chicago, IL',
      periods: ['June 2024 - August 2024'],
      description: [
        'Enhanced site reliability by creating over 200 new automated tests for pages and components utilized by hundreds of developer created branches',
        'Streamlined deployment processes by integrating automated checks and reducing manual testing efforts, maintaining test accuracy above 97%',
        'Trained and integrated AI models to perform advanced page analysis, extending automated testing capabilities'
      ],
      logo: 'hyatt-logo.png'
    },
    {
      title: 'Automation Engineer Intern',
      company: 'Hyatt Hotels, Chicago, IL',
      periods: ['June 2023 - August 2023'],
      description: [
        'Refactored unstable testing suites within an Agile/Scrum environment, increasing test coverage by over 50%',
        'Reduced technical debt for DevOps by improving testing integration into deployment pipeline',
        'Utilized Postman to analyze RESTful API endpoints, developing integration suites to verify data integrity and consistency'
      ],
      logo: 'hyatt-logo.png'
    },
    {
      title: 'University of Central Florida',
      company: 'Computer Science (Bachelor of Science)',
      periods: ['Expected Graduation: August 2025'],
      description: [
        'Current GPA: 3.92',
      ],
      logo: 'ucf-logo.png'
    },
    {
      title: 'Indian River State College',
      company: 'Computer Information Technology (Associate of Science)',
      periods: ['Graduated: May 2022'],
      description: [
        'Graduation GPA: 3.97'
      ],
      logo: 'irsc-logo.png'
    }
  ]

  return (
    <Box id="experience" py={20} w="100%" position="relative">
      <Container maxW="90%" px={[4, 6, 8]}>
        <VStack spacing={8} align={['center', 'center', 'flex-start']} w="100%">
          <Heading as="h2" size="xl" textAlign={['center', 'center', 'left']}>
            Experience & Education
          </Heading>
          
          <VStack spacing={6} w="100%">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </VStack>
        </VStack>
      </Container>
      <Divider position="absolute" bottom={0} opacity={0.2} />
    </Box>
  )
} 