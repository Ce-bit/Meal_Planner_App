import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMeals, deleteMeal } from '../../actions/meals';

export class Meals extends Component {
    static propTypes = {
        meals: PropTypes.array.isRequired,
        getMeals: PropTypes.func.isRequired,
        deleteMeal: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getMeals();
    }

    render() {
        return (
            <Fragment>
                <h2>Saved Meals</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Meal</th>
                            <th>Link</th>
                            <th>SavedOn</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.meals.map( meal => (
                            <tr key={meal.id}>
                                <td>{meal.name}</td>
                                <td>{meal.link}</td>
                                <td>{meal.savedOn}</td>
                                <td><button onClick= {this.props.deleteMeal.bind(this, meal.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                    </table> 
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    meals: state.meals.meals
});

export default connect(mapStateToProps, { getMeals, deleteMeal })(Meals);
