import React, { useState } from 'react'
import './Home.css'
import {Container, Row, Col, Form,Card} from 'react-bootstrap'
function Home() {

    const [city,setCity]=useState('')
    const [weather,setWeather]=useState({})

    const api={
      key:'319332d780a9ad226575fa583a641983',
      base:'https://api.openweathermap.org/data/2.5/'
    }
   
    const search=(evt)=>{
      if(evt.key==='Enter'){
        fetch(`${api.base}weather?q=${city}&appid=${api.key}&units=metric`)
        .then(res=>res.json())
        .then(result=>{
          setCity('')
          setWeather(result)
          console.log(result)
        })
      }
    }
  return (
    <Container fluid className='main  '>
    <Row>
      <Col>
        <Form.Group className='p-4'>
          <Form.Control type="text" placeholder="Search A place..." onChange={(e)=>setCity(e.target.value)} value={city} onKeyDown={search}/>
        </Form.Group>
      </Col>
    </Row>
    {typeof weather.main!='undefined'?(
      <div>
    <Row>
      <Col className='p-3 mt-5'>
        <h1 className='cname'>{weather.name},{weather.sys.country}</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className='card p-3'  >
          <Card.Body>
            <Card.Title className='temp'>{Math.round(weather.main.temp)}℃</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col className='p-3'>
        <h1 className='condition'>{weather.weather[0].main}</h1>
      </Col>
    </Row>
    </div>
    ):('')}
  </Container>
  )
}

export default Home