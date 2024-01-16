//Mark Lemuel B. Furton WD-401

import React from "react";
import { render } from "react-dom";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function BookList(){
    return (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>1. Harry Potter and the Cursed Child</ListGroup.Item>
            <ListGroup.Item>2. She's Dating the Gangster</ListGroup.Item>
            <ListGroup.Item>3. ABNKKBSNPLAKo?</ListGroup.Item>
          </ListGroup>
        </Card>
      );
}

export default BookList;