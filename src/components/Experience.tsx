import { Box, Container, Heading, VStack, Text, Flex, Divider } from '@chakra-ui/react'

interface ExperienceItemProps {
  title: string
  company: string
  periods: string[]
  description: string[]
}

const ExperienceItem = ({ title, company, periods, description }: ExperienceItemProps) => (
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
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Flex 
      direction={['column', 'row']} 
      justify="space-between" 
      mb={4}
      gap={[1, 0]}
    >
      <Text color="blue.400">{company}</Text>
      <VStack spacing={0} align={['start', 'end']}>
        {periods.map((period, index) => (
          <Text key={index} color="gray.500" fontSize={['sm', 'md']}>
            {period}
          </Text>
        ))}
      </VStack>
    </Flex>
    <VStack align="flex-start" spacing={2}>
      {description.map((item, index) => (
        <Text key={index} color="gray.400" fontSize={['sm', 'md']}>
          • {item}
        </Text>
      ))}
    </VStack>
  </Box>
)

export const Experience = () => {
  const experiences = [
    {
      title: 'Software/Automation Engineer Intern',
      company: 'Hyatt Hotels, Chicago, IL',
      periods: ['June 2024 - August 2024', 'June 2023 - August 2023'],
      description: [
        'Built test suites for new pages with documented regression suites and success rates in line with company standards',
        'Trained artificial intelligence models for quality assurance verification on the frontend',
        'Worked in an AGILE team to develop and maintain regression testing suites',
        'Used Postman to analyze API endpoints and create data integrityverification tests',
      ],
    },
    {
      title: 'Computer Science (Bachelor of Science)',
      company: 'University of Central Florida',
      periods: ['Expected Graduation: August 2025'],
      description: [
        'Current GPA: 3.92',
      ],
    },
    {
      title: 'Computer Information Technology (Associate of Science)',
      company: 'Indian River State College',
      periods: ['Graduated: May 2022'],
      description: [
        'Graduation GPA: 3.97'
      ],
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