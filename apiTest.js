const request = require('request');
request('https://www.metaweather.com/api/location/search/?query=san', function(error, response, body) {
    console.error('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('head:', response.headers);
    console.log('body:', JSON.parse(body));
});