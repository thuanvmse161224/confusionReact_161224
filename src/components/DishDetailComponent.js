import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    renderDish (inputDish) {
        const dish = inputDish.inputDish; 
        return(
            <div className="col-12 col-sm-5">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
        
    }

    renderComments(comments) {        
        const comment = comments.comments.map((item) => {
            return (
                <div>
                    <p>{item.comment}</p>
                    <p>{item.author} {item.date}</p>
                </div>
            );
        });
        
        return (
            <div className="col-12 col-sm-7">
                <h2>comments</h2>
                {comment}
            </div>
        );
        
    }


    render() {
        if (this.props.dish != null) {
            const dish = this.props.dish;
            const comments = dish.comments;

            return (
                <div className="container">
                <div className="row">
                    <this.renderDish inputDish={dish}/>
                    <this.renderComments comments={comments} />
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
