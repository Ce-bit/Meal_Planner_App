import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMeal } from '../../actions/meals';


export class Alerts extends Component {
    static PropTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message} = this.props
        if(error !== prevProps.error) {
            if(error.msg.name) alert.error(`Name: ${error.msg.name.join()}`)
            if(error.msg.link) alert.error(`Link: ${error.msg.link.join()}`)
            if(error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if (error.msg.username) alert.error(error.msg.username.join());
        }

        if(message !== prevProps.message) {
            if(message.mealDeleted) alert.success(message.mealDeleted);
            if(message.addMeal) alert.success(message.addMeal);
            if(message.passwordNotMatch) alert.error(message.passwordNotMatch);
        }
    }

    render() {
        return <Fragment />;  
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
