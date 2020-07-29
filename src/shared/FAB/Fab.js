import * as  React from 'react';
import { FAB, Provider, Portal } from 'react-native-paper';

export default function Fab(props) {

    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'close' : 'plus'}
                    fabStyle={{ backgroundColor: "white" }}

                    actions={[
                        {
                            icon: 'plus',
                            label: 'Add Beneficiary',
                            onPress: props.AddBeneficiaryShowDialog,
                        },
                        {
                            icon: 'database',
                            label: 'Your Beneficiaries',
                            onPress: props.BeneficiaryShowDialog,
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

