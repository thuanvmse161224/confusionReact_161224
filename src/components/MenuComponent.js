import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
class Menu extends Component {
    renderMenuItem (dish, onClick) {
        /* debug sec
        console.log("in renderMenuItem");
        console.log(dish);
        console.log(dish.dish);
        console.log(dish.onClick);
        console.log(onClick);
        console.log("in renderMenuItem ending");
        */
        const disha = dish.dish;
        return (
            <Card onClick={() => dish.onClick(disha.id)} >
                <CardImg width="100%" src={disha.image} alt={disha.name} />
                <CardImgOverlay>
                    <CardTitle>{disha.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
        
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            /*
            console.log("in menu render");
            console.log(dish);
            console.log(this.props.onClick);
            */
            return (
                <div className="col-12 col-md-5 m-1">
                    <this.renderMenuItem dish={dish} onClick={this.props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;
