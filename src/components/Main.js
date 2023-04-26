import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import books from '../data/scifi.json'
import SingleCard from '../components/SingleCard';

function Main() {

  return (
    <Container className='mt-5 mb-5'>
      <Row className='g-3'>
        {
          books.map((book) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <SingleCard 
                  asin={book.asin}
                  title={book.title}
                  img={book.img}
                  price={book.price}
                />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  );
}

export default Main;