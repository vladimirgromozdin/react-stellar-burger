import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import rootReducer from "./services/reducers";
import {Provider} from "react-redux";
import {socketMiddleware} from "./services/middleware/socketMiddleware";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, socketMiddleware())));

ReactDOM.render(<React.StrictMode>
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
</React.StrictMode>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
