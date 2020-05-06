const SharedCountApi = require('../');
let sharedCountApiInstance = new SharedCountApi(YOUR_API_KEY);

//Return share counts for a URL.
var urlGetResponse = sharedCountApiInstance.get(url);

//Post a large number of URLs all at once to calculate bulk social counts.
//Get bulk_id from bulk post response, then using bulkGet to get result
var urls = ['url1', 'url2'];

var bulkPostResponse = sharedCountApiInstance.bulkPost(urls);

var bulkId = bulkPostResponse.data.bulk_id;

var bulkResponse = sharedCountApiInstance.bulkGet(bulkId);

//Return historical quota usage information.
var usage = sharedCountApiInstance.usage();

//Return information about your quota allocation for the day.
var quota = sharedCountApiInstance.quota();

//Return a list of domains added to your domain whitelist, and whether the domain whitelist is currently being enforced.
var domainWhiteList = sharedCountApiInstance.getWhiteListedDomains();

//Check to see if the SharedCount API is currently up.
var status = sharedCountApiInstance.status();

