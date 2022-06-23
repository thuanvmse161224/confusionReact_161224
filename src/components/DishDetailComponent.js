import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        if (this.props.dish != null) {
            const dish = this.props.dish;
            const comment = dish.comments.map((item) => {
                return (
                    <div>
                        <p>{item.comment}</p>
                        <p>{item.author} {item.date}</p>
                    </div>
                );
            });

            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-5">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-7">
                        <h2>comments</h2>
                        {comment}
                    </div>
                </div>
            </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default DishDetail;
