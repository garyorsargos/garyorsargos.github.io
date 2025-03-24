import { Box, Flex, Button, Container } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import { FaGithub } from 'react-icons/fa'

export const Header = () => {
  const navItems = ['About', 'Experience', 'Projects', 'Contact']

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="rgba(26, 26, 26, 0.8)"
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container maxW="90%" px={[4, 6, 8]}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link to="hero" smooth={true} duration={500} offset={-80}>
            <Button variant="ghost" fontSize="lg" fontWeight="bold">
              Portfolio
            </Button>
          </Link>

          <Flex gap={4} alignItems="center">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
              >
                <Button variant="ghost">{item}</Button>
              </Link>
            ))}
            <a 
              href="https://github.com/garyorsargos" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                _hover={{ color: 'blue.400' }}
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </Button>
            </a>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
} 