import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle , Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom';

export function RenderDish ({dish}) {
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

export function RenderComments({comments}) {
    const comment = comments.map((item) => {
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

class DishDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.dish != null) {
            const dish = this.props.dish;
            const comments = this.props.comments;
            console.log(dish);
            console.log(comments);
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/Menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={comments} />
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
