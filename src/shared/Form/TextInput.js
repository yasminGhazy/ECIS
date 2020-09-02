import React from 'react';
import Is from '@flk/supportive-is';
import PropTypes from 'prop-types';
import { HelperText } from 'react-native-paper';
import { Item, Input } from 'native-base';

export default class TextInput extends React.Component {
    state = {
        validation: {}
    };

    validateEmpty = value => {

        let input = value.nativeEvent.text;
        let validation = this.state.validation;
        validation.empty = null;
 
        if (Is.empty(input) && this.props.required) {
            validation.empty = this.props.placeholder? `${this.props.placeholder} is required` : 'This field is required'
        }

        this.setState({
            validation,
        })

    };
    render() {
        return (
            <>
                <Item>
                    {this.props.children}
                   
                    <Input
                        placeholder={this.props.placeholder}
                        placeholderTextColor={this.props.placeholderTextColor}
                        onChangeText={this.props.onChangeText}
                        onChange={(value) => this.validateEmpty(value)}

                    />
                </Item >
                {
                    this.state.validation.empty != null &&
                    <HelperText type="error" visible>
                        {this.state.validation.empty}
                    </HelperText>
                }

                {/* <Input
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
                } */}
            </>
        );
    }
}

TextInput.propTypes = {
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    onChangeText:PropTypes.func.isRequired,
    placeholderTextColor:PropTypes.string,
    // type: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  
};