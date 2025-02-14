import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="AIshift">
      <Container>
        <Title>
          AIshift <Badge>2024 to present</Badge>
        </Title>
        <P>
          AIshift is a tech consulting studio.<br/>
          We ship fast. We innovate boldly. We reject the boring. We shift.
        </P>
        <P>
          Here, I&apos;m responsible for overseeing the development and execution of the product&apos;s technology, ensuring it aligns with business goals. Lead technical strategy, build the development team, and manage the tech stack and infrastructure.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://aishift.co/">
              https://aishift.co/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Position</Meta>
            Co-founcder
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Rus, Javascript, PostgreSQL</span>
          </ListItem>
        </List>
      </Container>
    </Layout >
  )
}

export default Work;
