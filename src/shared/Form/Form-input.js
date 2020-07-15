import React from 'react';
import Is from '@flk/supportive-is';
import PropTypes from 'prop-types';
import { Input, View } from 'native-base';

export default class FormInput extends ReactorComponent {
    state = {
        validationError: {}
    };

    /**
     * Validate the input
     */
    validate() {
        let input = e.target,
            value = input.value;

        // reset validation input error
        let inputValidation = null;

        // validate required input
        // check if the input is not empty
        if (this.props.required === true && Is.empty(value)) {
            // he didn't access this body
            inputValidation = this.messages.required;
        }

        // check if the input value a valid email address
        // validate the email when?
        // when the validation.email is null 
        if (this.props.type === 'email' && inputValidation === null && !Is.empty(value) && !Is.email(value)) {
            inputValidation = this.messages.email;
        }

        this.set('validationError', inputValidation);
    }

    /**
     * {@inheritdoc}
     */
    render() {
        return (
            <View >
                <Input 
                    placeholder='Email'
                    placeholderTextColor="white"
                    type={this.props.type}

                    style={this.props.style}
                    value={this.props.value}
                    onChangeText={(username) => this.setState({ username })}
                    onChange={this.validate.bind(this)}
                />
              
                {
                    this.get('validationError') !== null &&
                    <label className="error">{this.get('validationError')}</label>
                }
            </View>
        );
    }
}

FormInput.propTypes = {
    required: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
    type: 'text',
};