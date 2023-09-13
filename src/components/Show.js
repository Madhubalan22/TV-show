import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Show = ({key, show}) => {
    
  return (
    <div className='show-card'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={show.image.medium} />
      <Card.Body>
        <Card.Title>{show.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{show.language}</ListGroup.Item>
        <ListGroup.Item>Rating: {show.rating.average}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default Show



