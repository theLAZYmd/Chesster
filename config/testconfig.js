// NOTE: Neither of these files are committed and for good reason.
//       You must provide your own.
var token = require("./slack_token.js").token;
try {
    var test_chesster_slack_token = require("./test_chesster_slack_token.js").token;
} catch (e) {
    var test_chesster_slack_token = null;
}
var heltour_token = require("./test_heltour_token.js").token;

const UNSTABLE_BOT_ID = "C0VCCPMJ8";
const UNSTABLE_BOT_LONEWOLF_ID = "C0XQM31SL";

var config = require("./config.js");
config['watcherBaseURL'] = "https://en.stage.lichess.org/api/stream/games-by-users"
config['slack_tokens']['chesster'] = test_chesster_slack_token;
config['winston']['channel'] = "#modster-logging"; 
config['winston']['handleExceptions'] = false;

config["welcome"]["channel"] = "unstable_bot-lonewolf";

config["heltour"]["token"] = heltour_token;
config["heltour"]["baseEndpoint"] = "https://staging.lichess4545.com/api/";
config["leagues"]["45+45"]["heltour"]["token"] = heltour_token;
config["leagues"]["45+45"]["heltour"]["baseEndpoint"] = "https://staging.lichess4545.com/api/";
config["leagues"]["lonewolf"]["heltour"]["token"] = heltour_token;
config["leagues"]["lonewolf"]["heltour"]["baseEndpoint"] = "https://staging.lichess4545.com/api/";

config["leagues"]["45+45"]["scheduling"]["channel"] = "unstable_bot";
config["leagues"]["45+45"]["results"]["channel"] = "unstable_bot";
config["leagues"]["45+45"]["results"]["channel_id"] = UNSTABLE_BOT_ID;
config["leagues"]["45+45"]["gamelinks"]["channel"] = "unstable_bot";
config["leagues"]["45+45"]["gamelinks"]["channel_id"] = UNSTABLE_BOT_ID;
config["leagues"]["45+45"]["alternate"]["channel_id"] = UNSTABLE_BOT_ID;
config["leagues"]["lonewolf"]["scheduling"]["channel"] = "unstable_bot-lonewolf";
config["leagues"]["lonewolf"]["results"]["channel"] = "unstable_bot-lonewolf";
config["leagues"]["lonewolf"]["results"]["channel_id"] = UNSTABLE_BOT_LONEWOLF_ID;
config["leagues"]["lonewolf"]["gamelinks"]["channel"] = "unstable_bot-lonewolf";
config["leagues"]["lonewolf"]["gamelinks"]["channel_id"] = UNSTABLE_BOT_LONEWOLF_ID;

config["channel_map"][UNSTABLE_BOT_ID] = "45+45";
config["channel_map"]["unstable_bot"] = "45+45";
config["channel_map"]["unstabled_bot-lonewolf"] = "lonewolf";
config["channel_map"][UNSTABLE_BOT_LONEWOLF_ID] = "lonewolf";

config["messageForwarding"]["channel"] = "N/A";

module.exports = config;
