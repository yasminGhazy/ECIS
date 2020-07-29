import * as React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from '../Register/RegisterForm';
import { Portal, Snackbar } from 'react-native-paper';
import Branches from '../../core/services/Branches'
import Accounts from '../../core/services/Accounts';
import Background from '../../Shared/background';
import { Image, View } from 'react-native'
import styles from './LoginStyle';
import * as Animatable from 'react-native-animatable';
import NetworkUtils from '../../core/NetworkUtils ';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: {},
            banks: {},
            types: {},
            visible: false,
            isLoading: true,
            show:false,
            connectionStatus: '',
        };
    }

    showDialog = () => this.setState({ visible: true })
    hideDialog = () => this.setState({ visible: false })

    async componentDidMount() {
        //  console.log(this.state.isLoading)
        if (await NetworkUtils.isNetworkAvailable()) {
            this.setState({ banks: await Branches.getAll() })
            //  console.log(this.state.banks)
            this.setState({ currencies: await Accounts.getCurrencies() })
            this.setState({ types: await Accounts.getAccountTypes() })
            this.setState({ isLoading: false })
         
        }
        else {this.setState({ connectionStatus: 'check your connections and try again' })
       this.setState({ show: true })}


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

                    <>
                        <LoginForm onRegister={this.showDialog} navigation={this.props.navigation} isLoading={this.state.isLoading} />
                        <Portal>
                            {!this.state.isLoading &&
                                <RegisterForm
                                    visible={this.state.visible}
                                    hideDialog={this.hideDialog}
                                    currencies={this.state.currencies}
                                    types={this.state.types}
                                    banks={this.state.banks}

                                />}
                        </Portal>
                    </>
                    <Snackbar
                        visible={this.state.show}
                    >
                        {this.state.connectionStatus}
                    </Snackbar>
                </Background>
            </React.Fragment>
        );
    }
}