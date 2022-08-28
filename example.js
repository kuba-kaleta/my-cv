const mqtt = require("mqtt");

// Specify MQTT broker URI: mqtts://<broker name>.<namespace>.cloudflarepubsub.com
const uri = check_env(process.env.BROKER_URI);

// Any username and your token from the /brokers/YOUR_BROKER/credentials endpoint
// The token should be the base64-encoded JWT issued by the Pub/Sub API
const username = "anything";
const password = check_env(process.env.BROKER_TOKEN);

// Configure and create the MQTT client
const client = mqtt.connect(uri, {
  protocolVersion: 5,
  port: 8883,
  clean: true,
  connectTimeout: 2000, // 2 seconds
  clientId: "",
  username,
  password,
});

// Emit errors and exit
client.on("error", function (err) {
  console.log(`⚠️  error: ${err}`);
  client.end();
  process.exit();
});
