import { Dialog } from 'react-native-paper';
import { ScrollView } from 'react-native';
import * as  React from 'react';

const CustomDialog = (props) => {
    
    return (
        <Dialog visible={props.visible} onDismiss={props.onDismiss} style={{ backgroundColor: `${props.color}`, margin: 20 ,padding:20 }} >
            <Dialog.ScrollArea>
                <ScrollView contentContainerStyle={{ margin: 0 }}>
                   {props.children}
                </ScrollView>
            </Dialog.ScrollArea>
        </Dialog>

    )
}

export default CustomDialog;