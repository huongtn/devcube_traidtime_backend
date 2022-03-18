const mqtt    = require('mqtt');
const { v4: uuid4 } = require('uuid')
require('dotenv/config'); 
const { publicRuntimeConfig: config } = getConfig()
 
var client = null;
var option = {retain : false , qos : 1};

function connect(){
    client = mqtt.connect(config.mqtt.Mqtt_Con,
        {clientId:uuid4() ,username: config.mqtt.username, password: config.mqtt.password, port : config.mqtt.port , clean:true});
    client.on("connect",function(){	
            console.log("connected");
           // publish('topicA' ,JSON.stringify({'message' : '12345'}))
     })
     //handle errors
    client.on("error",function(error){
        console.log("Can't connect" + error);
        
    });
    //handle incoming messages
    client.on('message',function(topic, message, packet){
        console.log("message is "+ message);
        console.log("topic is "+ topic);
    });
}

function publish(topic , payload){
    if (client.connected == true){
        client.publish(topic,payload,option);
    }
}
function subscribe(topic){
    if (client.connected == true){
        client.subscribe(topic,option);
    }

}

module.exports = {
    connect,
    publish,
    subscribe
} 

