import React from 'react'
import ShowsList from './ShowsList'
import { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../resource/ivshowicon.png'

const Searchbar = () => {
  const [searchText, setSearchText] = useState('');
  const [showData, setShowData] = useState([]);

  async function handleSearch(e) {
    e.preventDefault()
    setSearchText()
    const config = { params: { q: searchText } };
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config);
    setShowData(response.data);
    
  }
  

  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Tv Show App
      </Navbar.Brand>
        <Navbar>
          
          <Form className="d-flex" onSubmit={e => { e.preventDefault(); }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="primary"  onClick={handleSearch}>Search</Button>
          </Form>
        </Navbar>
      </Container>
    </Navbar>
      <ShowsList showData={showData} />
    </div>
  )
}

export default Searchbar