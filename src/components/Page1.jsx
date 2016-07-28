var React = require('react');
var GitHub = require('github-api');

var Page1 = React.createClass({
    onSubmit: function () {
        var gh = new GitHub({
            token: "MY_OAUTH_CODE"
        });
        const me = gh.getUser();
        me.listNotifications(function(err, notifcations) {
           console.log("notifcations", notifcations);
        });
        var yahoo = gh.getOrganization('yahoo');
        yahoo.getRepos(function(err, repos) {
           console.log("repos", repos);
        })

    },
    render: function() {
        return (
            <div>
                <h1>GH Authorization</h1>
                <button
                    className="btn btn-primary"
                    onClick={this.onSubmit}
                >
                    Authorize1
                </button>
            </div>
        )
    }
});

module.exports = Page1;
