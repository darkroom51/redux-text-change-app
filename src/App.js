import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ChangeText from './ChangeText'

import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <ChangeText/>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
