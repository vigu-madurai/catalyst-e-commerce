import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './modules/Home';
import Product from './modules/Product';

import './App.css';

function App() {
	return (
		<Fragment>
			<Helmet>
				<html lang='en' />
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
				<meta name='msapplication-TileColor' content='#2b2b2b' />
				<title>ABCD Gold Shop</title>
			</Helmet>
			<div className='App'>
				<Header />
				<div className='content-body'>
					<BrowserRouter>
						<Switch>
							<Route path='/home' component={Home} />
							<Route path='/shop/category/product/:product_id' component={Product} />
							<Redirect exact path='/' to='/home' />
						</Switch>
					</BrowserRouter>
				</div>

				<footer>&#169; Copyright 2020 | ABCD Gold Shop | Contact: kvigneshwaranit@gmail.com</footer>
			</div>
		</Fragment>
	);
}

export default App;
