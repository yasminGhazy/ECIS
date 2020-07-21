import * as React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from '../Register/RegisterForm';
import { Portal } from 'react-native-paper';
import Branches from '../../core/services/Branches'
import Accounts from '../../core/services/Accounts';
import Background from '../../Shared/background';
import {  Image,View } from 'react-native'
import styles from './LoginStyle';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: {},
            banks: {},
            types: {},
            visible: false,
            isLoading: true,
        };
    }

    showDialog = () => this.setState({ visible: true })
    hideDialog = () => this.setState({ visible: false })

    async componentDidMount() {
        console.log(this.state.isLoading)

        this.setState({ banks: await Branches.getAll() })
        console.log(this.state.banks)
        this.setState({ currencies: await Accounts.getCurrencies() })
        this.setState({ types: await Accounts.getAccountTypes() })
        this.setState({ isLoading: false })
    }

    render() {
        return (
            <React.Fragment>
                <Background>
                <View style={styles.container}>

                    <Image
                        style={styles.tinyLogo}
                        source={require('./../../img/logo.png')}
                    />
                </View>
                {!this.state.isLoading &&
                    <>
                        <LoginForm onRegister={this.showDialog} navigation={this.props.navigation} isLoading={this.state.isLoading} />
                        <Portal>

                            <RegisterForm
                                visible={this.state.visible}
                                hideDialog={this.hideDialog}
                                currencies={this.state.currencies}
                                types={this.state.types}
                                banks={this.state.banks}

                            />
                        </Portal>
                    </>
                    
                }</Background>
            </React.Fragment>
        );
    }
}