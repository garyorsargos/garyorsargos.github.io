import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface ExperienceLogoProps {
  src: string
  alt: string
}

const MotionBox = motion(Box)

export const ExperienceLogo = ({ src, alt }: ExperienceLogoProps) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      minH="75px"
      maxH="75px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src={src}
        alt={alt}
        h="100%"
        w="auto"
        objectFit="contain"
        filter="brightness(0) invert(1)"
      />
    </MotionBox>
  )
} 