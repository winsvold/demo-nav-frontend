import React from 'react';
import './App.less';
import {Normaltekst, Sidetittel} from "nav-frontend-typografi";
import Panel from "nav-frontend-paneler";
import {Hovedknapp} from "nav-frontend-knapper";

const App = () => {
    return (
        <div className="App">
            <Panel border={true}>
                <Sidetittel>Designsystemet</Sidetittel>
                <Normaltekst>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, iure!</Normaltekst>
            </Panel>
            <Panel>
                <Hovedknapp onClick={() => alert('hei')}>Send inn søknad</Hovedknapp>
            </Panel>
        </div>
    );
};

export default App;
