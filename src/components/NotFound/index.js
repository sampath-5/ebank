import {
  NotFoundContainer,
  Container,
  Image,
  Heading,
  Paragraph,
} from './styledComponents'

const NotFound = () => (
  <Container>
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <Heading>Page Not Found</Heading>
      <Paragraph>
        We are sorry, the page you requested could not be found
      </Paragraph>
    </NotFoundContainer>
  </Container>
)

export default NotFound
