import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


import Homepage from './components/Homepage';
import AddPage from './components/AddPage';
import EditPage from './components/EditPage';
import NotFound from './components/NotFound';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/add" component={AddPage}>
                    
                </Route>   
                <Route exact path="/edit/:id">
                    <EditPage />
            </Route> 
            <Route  component={NotFound} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));

