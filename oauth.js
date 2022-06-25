const OAuth2Server = require('oauth2-server')
const Request = OAuth2Server.Request
const Response = OAuth2Server.Response

const oauth = new OAuth2Server({
    model: require('./model/implementation.js')
}) 

let request = new Request({
    method: 'GET',
    query: {},
    headers: {Authorization: 'Bearer foobar'}
});

let response = new Response({
    headers: {}
});

oauth.authenticate(request, response)
    .then((token) => { 
        // Request was successfully authenticated
    })
    .catch((err) => { 
        // Request failed authentication
    })