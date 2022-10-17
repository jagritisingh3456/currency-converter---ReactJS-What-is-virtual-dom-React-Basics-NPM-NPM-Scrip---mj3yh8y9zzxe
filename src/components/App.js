import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Loadable from 'react-loadable';
import '../src/converter/style.css'

/* Here we can add dynamic component (chunks) 
    which helps to reduce our bundle size
*/
 
function Loading({ error }) {
    if (error) {
        return 'Oh nooess!';
    } else {
        return <h3>Loading...</h3>;
    }
}

const Converter = Loadable({
    loader: () => import('./converter/index.jsx'),
    loading: Loading
});


class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router history={browserHistory}>
                <div className="container center W600p main-container">
                    <Switch>
                        <Route exact path="/" component={Converter} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;