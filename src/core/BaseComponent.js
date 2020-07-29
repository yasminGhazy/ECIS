import * as  React from 'react';


export default class BaseComponent extends React.Component {
    isMounting = true;

    set(newState) {
        if (this.isMounting) return;

        this.setState(newState);
    }
}
