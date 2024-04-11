import React from 'react';
import {CardImg,CardGroup,CardBody,Card,CardTitle,CardText,CardSubtitle,Button} from 'reactstrap';

import logo1 from './component/akar.png';
import logo2 from './loga.png';
import logo3 from './prolin.png';

export default function Produk() {
  return (
    <div>
      <h1>Produk Poster Mindmap</h1>

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
        Bilangan berpangkat
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        KD 3.1
      </CardSubtitle>
      <CardText>
        Akar
      </CardText>
      <Button>
        AKAR
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
        Persamaan
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        KD 3.4
      </CardSubtitle>
      <CardText>
        PLDV
      </CardText>
      <Button>
        2 var
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
        Program Linier
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        KD 3.5
      </CardSubtitle>
      <CardText>
        logaritma
      </CardText>
      <Button>
        prolin
      </Button>
    </CardBody>
  </Card>
</CardGroup>


    </div>
  )
}
