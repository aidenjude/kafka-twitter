const consumerkey = process.env.consumer_key || 'RUPtieBLsuPKrip11c9YIKU2r'

const consumersecret = process.env.consumer_secret || 'O2jCqHhMxC2YHUQxxtLoaRoIAUJTrIQtgDSJqcjYwI72NFchg6'
const accesstoken = process.env.access_token || '77773008-0y230izPaJKmBZ1qa1T8TG9T1OcxTZqiN3r8dfobs'
const accesstoken_secret = process.env.access_token_secret || 'ce8lZx90uIWY3kbjkOwe2IzIXCUELQ11BygktWH7AjMko'
const bootstrapserver1 = process.env.bootstrap_server1 || '40.113.233.72:9092'
const bootstrapserver2 = process.env.bootstrap_server2 || '40.113.233.72:9093'
const bootstrapserver3 = process.env.bootstrap_server3 || '40.113.233.72:9094'
const topicname = process.env.topic_name || 'tweeter_tweet'

const moconfigs = {
    consumerkey: consumerkey,
    consumersecret: consumersecret,
    accesstoken: accesstoken,
    accesstoken_secret: accesstoken_secret,
    bootstrapserver1: bootstrapserver1,
    bootstrapserver2: bootstrapserver2,
    bootstrapserver3: bootstrapserver3,
    topicname: topicname

}
module.exports = {
    moconfigs
};