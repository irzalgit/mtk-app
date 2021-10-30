import React from 'react';
import {CardImg,CardGroup,CardBody,Card,CardTitle,CardText,CardSubtitle,Button} from 'reactstrap';
// import logo1 from './akar.png';
// import logo2 from './loga.png';
// import logo3 from './prolin.png';
import logo1 from './akar.png';
import logo2 from './loga.png';
import logo3 from './prolin';

export default function Produk() {
  return (
    <div>
      <h1>Produk</h1>

<CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={logo3}
      top
      width="10%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={logo1}
      top
      width="25%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={logo2}
      
      top
      width="25%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
</CardGroup>


    </div>
  )
}
