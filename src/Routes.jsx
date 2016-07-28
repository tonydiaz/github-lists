var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;
var useRouterHistory = require('react-router').useRouterHistory;
var createHashHistory = require('history/lib/createHashHistory');

var History = require("history");

var UseRouterHistory = require('react-router').useRouterHistory;

var CreateHashHistory = History.createHashHistory;

var appHistory = UseRouterHistory(CreateHashHistory)({ queryKey: false });

//
// console.log(createHashHistory.default)
// var History = createHashHistory.default();

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={Base}>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
        </Route>
    </Router>

);

module.exports = Routes;
