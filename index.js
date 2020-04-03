const Twit = require('twit')
const kafka = require('kafka-node')
const keys = require('./keys');

//create a twitter client
var T = new Twit({
    consumer_key: keys.moconfigs.consumerkey,
    consumer_secret: keys.moconfigs.consumersecret,
    access_token: keys.moconfigs.accesstoken,
    access_token_secret: keys.moconfigs.accesstoken_secret,
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
    //strictSSL:            true,     // optional - requires SSL certificates to be valid.
})


//create a producer
const Client = kafka.KafkaClient
const Producer = kafka.Producer
const KeyedMessage = kafka.KeyedMessage

var client = new Client({ kafkaHost: keys.moconfigs.bootstrapserver1 + ',' + keys.moconfigs.bootstrapserver2 + ',' + keys.moconfigs.bootstrapserver3 })
//'40.113.233.72:9092, 40.113.233.72:9093, 40.113.233.72:9094' 
var argv = require('optimist').argv
var topic = argv.topic || keys.moconfigs.topicname
var p = argv.p || 6
var a = argv.a || 0

//properties of producer, create producer
var producer = new Producer(client, { requireAcks: 1 })
producer.on('ready', function () {


    //Test tweets
    var stream = T.stream('statuses/filter', { track: 'italy' })


    stream.on('tweet', function (tweet) {
        console.log(tweet.user.name)
        producer.send([{ topic: topic, messages: [tweet.user.name] }], function (
            err,
            result
        ) {
            console.log(err || result);
            setTimeout(() => {
                process.exit();
            }, 1000 * 10 * 6)

        });
    })

});

producer.on('error', function (err) {
    console.log('error', err);
});

//send tweets to kafka