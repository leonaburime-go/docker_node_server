var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var request = require('request');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var PORT = 3002;

function getMsgPromise(resolve, reject){

  request('http://localhost:' + PORT, function(error, response, body){
  	debugger
		if(!error && response.statusCode == 200){
	    console.log(body);
	    resolve(body)
		}
		else{
			reject(body);
		}

  })

}


it('should return phrase "Are you connecting" asynchronously', function() {
  
  var result = new Promise(getMsgPromise);

  return expect(result).to.eventually.equal('Are you connecting');
});



