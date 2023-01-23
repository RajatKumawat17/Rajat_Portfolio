import {
  Box,
  Flex,
  Heading,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Badge,
  Img,
} from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaKaggle,
  FaPython,
  FaReact,
  FaTwitter,
  FaGit,
  FaFileCode,
} from 'react-icons/fa'
import { SiJupyter } from 'react-icons/si'
import '../index.css'

export default function Header() {
  return (
    <>
      <Flex>
        <Container maxW="60ch">
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 30, md: '5rem' }}
            direction="column"
          >
            <Box w="36" marginX="auto">
              <Img
                borderRadius="full"
                src="https://i.pinimg.com/originals/b0/87/b3/b087b3c8d66d073456152aceff907115.jpg"
              />
            </Box>
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.100')}
              paddingX="6"
              paddingY="3"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Heading
                fontWeight={400}
                fontSize={{ base: 20, md: 40 }}
                alignItems="center"
                lineHeight="110%"
                fontFamily="mono"
              >
                Hey, I'm Rajat <span className="wave"> 👋</span>
              </Heading>
            </Box>
            <Box alignItems="center">
              <Text
                fontWeight={300}
                fontFamily="mono"
                fontSize={{ md: 'large' }}
                marginX="1"
                boxSizing="content-box"
              >
                <span className="highlighted-word">
                  Computer-Science student
                </span>
                , <span className="highlighted-word">frontend developer</span>{' '}
                and <span className="highlighted-word">ML/AI enthusiast</span>.
              </Text>
            </Box>
            <Box justifyContent="center">
              <Badge
                as="a"
                variant="outline"
                marginBottom="5"
                fontSize="1.2rem"
              >
                stack
              </Badge>
              <Stack
                paddingX="14"
                justify="center"
                direction="row"
                wrap="wrap"
                fontSize="3.2rem"
                spacing="6"
              >
                <Link pointerEvents="none" isExternal>
                  <Icon as={FaPython} />
                </Link>
                <Link pointerEvents="none" as="span">
                  <Icon as={FaJs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaHtml5} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaCss3} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaGit} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaKaggle} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={SiJupyter} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaReact} />
                </Link>
              </Stack>
              <Badge
                as="a"
                variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
              >
                On the web
              </Badge>
              <Stack as={Box} marginY="5" spacing="5">
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://github.com/RajatKumawat17" isExternal>
                    <Icon as={FiGithub} /> @RajatKumawat17
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link
                    href="https://www.linkedin.com/in/rajat-kumawat/"
                    isExternal
                  >
                    <Icon as={FiLinkedin} /> @Rajat-Kumawat
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://twitter.com/SilverKumawat17" isExternal>
                    <Icon as={FaTwitter} /> @SilverKumawat17
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://twitter.com/SilverKumawat17" isExternal>
                    <Icon as={FaFileCode} /> Download Resume
                  </Link>
                </Text>
              </Stack>
              <Text marginTop="6" fontFamily="mono">
                Get in touch <span>👉</span>{' '}
                <a className="mail" href="mailto:kumawatrajat124@gmail.com">
                  kumawatrajat124@gmail.com
                </a>
              </Text>
            </Box>
          </Stack>
        </Container>
      </Flex>
    </>
  )
}
