import './index.css';

import * as serviceWorker from './serviceWorker';

import FluidFragment from "./components/fluid-fragment/FluidFragmentContainer";
import FragmentFactory from "./components/fragments/FragmentFactory";
import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";

ReactDOM.render(<Provider store={store()}><FluidFragment factory={FragmentFactory} /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
