import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMeal } from '../../actions/meals'

export class Form extends Component {
    state = {
        name: '',
        link: '',
    }

    static propTypes = {
        addMeal: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const {name , link } = this.state;
        const meal = {name, link};
        this.props.addMeal(meal);
    };

    render() {
        const { name, link } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add New Meal</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Link</label>
            <input
              className="form-control"
              type="text"
              name="link"
              onChange={this.onChange}
              value={link}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addMeal })(Form);
