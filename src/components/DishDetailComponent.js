import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    } 

    renderDish (dish) {
        //you received an object when get passed in tab 
        // as '{a}', and param form is 'a'
        //gotta need to de-ref 
        const disha = dish.dish;
        console.log("go to renderDish, success!");
        console.log("here in renderDish, dish = received this.props.dish, " +
                    "with another layer of dummy object, named 'dish' !");
        console.log(disha);        
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
        console.log(comments);
        console.log(comments.comments);
        
        const comment = comments.comments.map((item) => {
            console.log("access map func, success!");
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
            /*
            console.log("in render! dish here is ");
            console.log(dish);
            console.log("in render, when const dish gets call as {dish} then");
            console.log({dish});
            //here passing a new object that contains an object
            */
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
