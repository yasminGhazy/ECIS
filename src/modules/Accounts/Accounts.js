import * as React from 'react';
import Header from '../../Shared/Header/Header';
import Background from '../../Shared/background';
import AccountForm from './AccountForm';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import AddAccount from './AddAccount'
import { Card, FAB, Title, Paragraph, Subheading, Portal, configureFonts,Provider } from 'react-native-paper';
import Branches from '../../core/services/Branches'
import Accounts from '../../core/services/Accounts';
import ChequeBook from './ChequeBook';
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: {},
      banks: {},
      types: {},
      accounts:{},
      Reqvisible: false,
      addVisible: false,
      isLoading: true,
    };
  }

  ReqShowDialog = () =>{this.setState({ Reqvisible: true })}
  ReqHideDialog = () => this.setState({ Reqvisible: false })

  AddShowDialog = () =>{this.setState({ addVisible: true })}
  AddHideDialog = () => this.setState({ addVisible: false })


  async componentDidMount() {
    this.setState({ banks: await Branches.getAll() })
    this.setState({ currencies: await Accounts.getCurrencies() })
    this.setState({ types: await Accounts.getAccountTypes() })
    this.setState({ accounts: await Accounts.GetByCurrentUser() })
    console.log("accounts",this.state.accounts)
    this.setState({ isLoading: false })
  }
  render() {
    return (
      <Background>
        <Header />

        <AccountForm />
        <View style={{ margin: 20 }}>

          <Text style={{ color: "white" }}>
            <FontAwesome name="warning" size={16} color="#FFD54F" /> pending
      </Text>
          <Text style={{ color: "white" }}>
            {/* <AntDesign name="warning" size={16} color="#FFD54F" />  */}
            <Entypo name="block" size={14} color="#E57373" /> Rejected
      </Text>
          <Text style={{ color: "white" }}>
            <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} /> accepted
      </Text>
        </View>
        <FABGroup
            ReqShowDialog={this.ReqShowDialog}
            AddShowDialog={this.AddShowDialog}
        />
        <Portal>
          {!this.state.isLoading &&
          <>
            <AddAccount
              visible={this.state.addVisible}
              hideDialog={this.AddHideDialog}
              currencies={this.state.currencies}
              types={this.state.types}
              banks={this.state.banks}

            />
            <ChequeBook
            visible={this.state.Reqvisible}
            hideDialog={this.ReqHideDialog}
            accounts={this.state.accounts}
           

          />
          </>}
        </Portal>

      </Background>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: "green",
    margin: 30,
    right: 0,
    bottom: 0,
  },
  rect: {
    height: 180,
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 30,
    marginHorizontal: 40,
    marginVertical: 10
  },
})

function FABGroup(props) {

  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  return (
      <Provider>
          <Portal>
              <FAB.Group
                  open={open}
                  icon={open ? 'calendar-today' : 'plus'}

                  actions={[
                      {
                          icon: 'email',
                          label: 'Add new account',
                          onPress: props.AddShowDialog,
                      },
                      {
                          icon: 'email',
                          label: 'Request cheque book',
                          onPress: props.ReqShowDialog,
                      },
                  ]}
                  onStateChange={onStateChange}
                  onPress={() => {
                      if (open) {
                          // do something if the speed dial is open
                      }
                  }}
              />
          </Portal>
      </Provider>
  );
};

