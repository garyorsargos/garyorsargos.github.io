import { Box, Container, Heading, Text, VStack, HStack, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Contact = () => {
  const contacts = [
    {
      platform: 'GitHub',
      link: 'https://github.com/garyorsargos',
      icon: FaGithub,
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gary-orsargos-316210261/',
      icon: FaLinkedin,
    },
    {
      platform: 'Email',
      link: 'mailto:gary.orsargos@yahoo.com',
      icon: FaEnvelope,
    },
  ]

  return (
    <Box id="contact" py={20}>
      <Container maxW="6xl">
        <VStack spacing={8} align="center" textAlign="center">
          <Heading as="h2" size="xl">
            Get In Touch
          </Heading>
          
          <Text color="gray.400" maxW="600px">
            I'm always open to new opportunities.
            Feel free to reach out through any of the links below!
          </Text>

          <HStack spacing={6}>
            {contacts.map(({ platform, link, icon }) => (
              <Link
                key={platform}
                href={link}
                isExternal
                _hover={{ color: 'blue.400' }}
                transition="all 0.2s"
              >
                <Icon as={icon} boxSize={8} />
              </Link>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
} 