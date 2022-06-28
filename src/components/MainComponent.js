import React, {Component} from "react";
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
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
                <Home/>
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
                    <Route exact path='/Menu' component={() => <Menu dishes={this.state.dishes} /> } />
                    <Redirect to="/Home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}


export default Main;