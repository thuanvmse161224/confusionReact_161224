import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        if (this.props.dish != null) {
            return(
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name}/>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default DishDetail;
