const axios = require('axios')
const domain = "sharedcount.com";
class SharedCountApi {
    constructor(apiToken, subDomain = "api") {
        this.apiToken = apiToken;
        this.url = "https://" + subDomain + "." + domain + "/v1.0";
    }
    async quota() {
        let res = await axios.get(this.url + "/quota?apikey=" + this.apiToken);
        return res
    }
    async usage() {
        let res = await axios.get(this.url + "/usage?apikey=" + this.apiToken);
        return res
    }
    async get(urlToCheck) {
        if (!urlToCheck || !urlToCheck instanceof String) {
            throw new Error("Url must be a string");
        }
        let res = await axios.get(this.url + "/?apikey=" + this.apiToken + "&url=" + urlToCheck);
        return res
    }
    async getWhiteListedDomains() {
        let res = await axios.get(this.url + "/domain_whitelist?apikey=" + this.apiToken);
        return res
    }
    async status() {
        let res = await axios.get(this.url + "/status");
        return res
    }
    async bulkGet(bulkId) {
        let res = await axios.get(this.url + "/bulk?bulk_id=" + bulkId + "&apikey=" + this.apiToken);
        return res
    }
    async bulkPost(urlsToCheck) {
        if (!Array.isArray(urlsToCheck)) {
            throw new Error("Array must be provided");
        }
        let res = await axios.post(this.url + "/bulk?apikey=" + this.apiToken, urlsToCheck.join("\n"), {
            headers: {
                "Content-Type": "text/plain",
            },
        });
        return res;
    }

}
module.exports = SharedCountApi;