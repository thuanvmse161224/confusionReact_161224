import React , { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle , Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link }from 'react-router-dom';

function RenderMenuItem ({dish}) {
    return (
        <Card>
            <Link to= {`/Menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <div>
                        <RenderMenuItem dish={dish} />
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;
