import * as React from 'react';
import Background from './background';
import CustomHeader from './Header';


export default function Layout(props) {
    // console.log(props)
    return (
        <Background>
<>
            <CustomHeader />
            {props.childern}
</>
        </Background>

    )
}
