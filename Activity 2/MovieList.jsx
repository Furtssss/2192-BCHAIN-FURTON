//Mark Lemuel B. Furton WD-401


import React from "react";
import Card from 'react-bootstrap/Card';
import { render } from "react-dom";

class MovieList extends React.Component {
    render(){
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/4/4d/Elemental_final_poster.jpg" />
            <Card.Body>
                <Card.Title>1. Elemental</Card.Title>
                <Card.Text>
                In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.
                </Card.Text>
                
            </Card.Body>

            
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg" />
            <Card.Body>
                <Card.Title>2. Coco</Card.Title>
                <Card.Text>
                Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. 
                Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, 
                the two new friends embark on an extraordinary journey to unlock the real story behind Miguel's family history.
                </Card.Text>
            
            </Card.Body>

            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/How_to_Train_Your_Dragon_Homecoming_poster.jpg/220px-How_to_Train_Your_Dragon_Homecoming_poster.jpg" />
            <Card.Body>
                <Card.Title>3. How To Train Your Dragon: Homecoming</Card.Title>
                <Card.Text>
                Hiccup organises a grand Snoggletog holiday pageant to celebrate dragons and gets a surprise visit from Toothless.
                </Card.Text>
            
            </Card.Body>
            </Card>
        );
    }
  
}

export default MovieList;


