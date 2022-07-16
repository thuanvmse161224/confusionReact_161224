import React, {Component} from "react";
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments'; 
import {PROMOTIONS} from '../shared/promotions'; 
import {LEADERS} from '../shared/leaders'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom'
import Contact from "./ContactComponent";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
            //selectedDish: null
        };
    }
/*
    onDishSelect(dishID) {
        this.setState( {selectedDish: dishID});
    }
*/
    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0] }
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0] }
                    leader={this.state.leaders.filter((leader) => leader.featured)[0] }
                />
            )
        };
        const DishWithId = ({match}) => {
            return (
                <DishDetail 
                    dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
                />
            )
        };
        return (
            <div>
                <Header/>
                {//<Menu dishes={this.state.dishes} onClick={(dishID) =>  this.onDishSelect(dishID)} />
                //DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } />
                }
                <Switch>
                    <Route path='/Home' component={HomePage} />
                    <Route exact path='/ContactUs' component={Contact} />
                    <Route exact path='/AboutUs' component={() => <About leaders={this.state.leaders}/>} />
                    <Route exact path='/Menu' component={() => <Menu dishes={this.state.dishes} /> } />
                    <Route path='/Menu/:dishId' component={DishWithId} />
                    <Redirect to="/Home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}


export default Main;