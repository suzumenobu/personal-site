import NextLink from 'next/link';
import {
  Button,
  Link,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hey there!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Andrey Semenov
            </Heading>
            <p>Full-stack developer</p>
          </Box>
          <Box
            flexsrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/idevtier.png"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Andrey Semenov has passion for building digital services and tools
            he wants. He was a knack for all things launching products, from
            planning and designing all the way to solving real-ife problems with
            code. In addition, he likes to customize linux setup, GNU Emacs and keyboards.
            When not online, he loves explore music, drink coffee and study. Currently,
            he is working on {' '}
            <NextLink href="/works/aishift">
              <Link>AIshift</Link>
            </NextLink>
            .
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Kazan
          </BioSection>
          <BioSection>
            <BioYear>2020 to 2023</BioYear>
            Graduates in Moscow Technical University of Communications and
            Informatics
          </BioSection>
          <BioSection>
            <BioYear>2020 to 2021</BioYear>
            Work in <NextLink href="/works/3bet"><Link>3bet</Link></NextLink> on sport plugs detection
          </BioSection>
          <BioSection>
            <BioYear>2021 to 2022</BioYear>
            Work with <NextLink href="/works/haasOnline"><Link>Haas Online</Link></NextLink> on
            automating crypto trading bots setup
          </BioSection>
          <BioSection>
            <BioYear>2022 to 2024</BioYear>
            Work in <Link href="https://pixelplex.io">pixelplex<ExternalLinkIcon /></Link> as senior Python software engineer
            on <NextLink href="/works/pixelplex"><Link>Web3 antivirus</Link></NextLink>
          </BioSection>
          <BioSection>
            <BioYear>early 2024 to mid 2024</BioYear>
            Work as lead software developer
            on <NextLink href="/works/cyberpass"><Link>cyberpass</Link></NextLink>
          </BioSection>
          <BioSection>
            <BioYear>2024 to present</BioYear>
            Work as tech co-founder
            in <NextLink href="/works/aishift"><Link>AIshift</Link></NextLink>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Hi-Res Music, Snowboarding, hackathons, OS customization, bouldering, Coffee and motorcycling
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
