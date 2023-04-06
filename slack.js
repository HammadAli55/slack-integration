const axios = require('axios');

const webhookUrl = ''; // Replace with your webhook URL
const message = {
  blocks: [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Bugs and Crashes:"
			}
		},
		{
			"type": "section",
			"block_id": "section567",
			"text": {
				"type": "mrkdwn",
				"text": "- Beginning of cras AndroidRuntime: FATAL EXCEPTION: main\n- Process: com.android.developer.crashsample, PID: 3686\n- java.lang.NullPointerException: crash sample"
			}
		},
    {
			"type": "image",
			"title": {
				"type": "plain_text",
				"text": "Bug Image"
			},
			"block_id": "image4",
			"image_url": "https://developer.android.com/static/topic/performance/images/crash-example-framed.png",
			"alt_text": "Timestamp: 2020-02-16 11:16:31+0100"
		}
	] // Replace with your message text
};

axios.post(webhookUrl, message)
  .then((response) => {
    console.log('Message sent successfully:', response.data);
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });