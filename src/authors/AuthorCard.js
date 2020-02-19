import React from "react";
import { Card,Button } from "react-bootstrap";

export function AuthorCard (props) {
    return (
        <Card style={{ width: "16em"}}>
            <Card.Img variant="top" src="https://www.seekpng.com/png/full/233-2332278_reading-smiley-clip-art-treble-clef-and-book.png" />
            <Card.Body>
                <Card.Title>{props.authors.author}</Card.Title>
                <Card.Text>Title: {props.authors.title}</Card.Text>
                <Button variant="warning">View Author Info</Button>
            </Card.Body>
        </Card>
    );
}