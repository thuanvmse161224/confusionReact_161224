import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    } 

    renderDish (dish) {
        const disha = dish.dish; 
        return(
            <Card>
                <CardImg top src={disha.image} alt={disha.name}/>
                <CardBody>
                    <CardTitle>{disha.name}</CardTitle>
                    <CardText>{disha.description}</CardText>
                </CardBody>
            </Card>                
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
                <div>
                        <this.renderDish dish={dish}/>
                        <this.renderComments comments={comments} />
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
