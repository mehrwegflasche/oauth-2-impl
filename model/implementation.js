const model = { 

    // Promises
    getAccessToken: function() { 
        return new Promise('works');
    },

    // Node-style callback
    getAuthorizationCode: function(done) {
        done(null, 'works');
    },

    // Using generators
    getClient: function*() { 
        yield somethingAsync();
        return 'works'
    },

    // async/wait (using Babel)
    getUser: async function() {
        await somethingAsync();
        return 'works';
    }
}

const OAuth2Server = require('oauth2-server');
let oauth = new OAuth2Server({model: model});
