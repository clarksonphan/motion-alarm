import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import smiley from "./pictures/download.png";



const CardTable = () => {
  const cardData = [
    { title: 'Calvin Anderson', content: 'Content for Card 1', imageUrl: 'https://via.placeholder.com/200', linkUrl: "https://www.linkedin.com/in/calvin-anderson-3b34a6192/" },
    { title: 'Matthew Chiang', content: 'Hi! My name is Matthew Chiang and I\'m a first-year Math:CS student!', imageUrl: smiley, linkUrl:'https://www.linkedin.com/in/matthew-chiang-b8b048229/'},
    { title: 'Michael Dimapilis', content: 'Content for Card 3', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/michael-dimapilis/' },
    { title: 'Anna Ho', content: 'Content for Card 1', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/anna-ho-1104a8296/'},
    { title: 'Sam Lau', content: 'Content for Card 2', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/sam-lau-aa6217297/' },
    { title: 'Megan Liem', content: 'Content for Card 3', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/megan-elizabeth-liem-ba539b296/'},
    { title: 'Dylan Mirhan', content: 'Content for Card 1', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/dylan-mirhan/' },
    { title: 'Allison Nguyen', content: 'Content for Card 2', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/allison-nguyen-668598296/' },
    { title: 'Clarkson Phan', content: 'Content for Card 3', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/clarkson-phan-0966831a8/' },
    { title: 'Aden Tan', content: 'Content for Card 1', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/aden-tan-b14419272/' },
    { title: 'Hana Tjendrawasi', content: 'Content for Card 2', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/hanajuliatj/' },
    { title: 'Andy Truong', content: 'Content for Card 3', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/andy-truong-03310323b/' },
    { title: 'Norah Zhou', content: 'Content for Card 1', imageUrl: 'https://via.placeholder.com/200', linkUrl: 'https://www.linkedin.com/in/norah-zhou/' }
  ];
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {cardData.map((card, index) => (
        <Col key={index}>
          <Card>
            <Card.Body>
              <Card.Img variant='top' src={card.imageUrl}/>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.content}</Card.Text>
              <a href={card.linkUrl} target="_blank"><Button variant='primary'>linkedin</Button></a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardTable;