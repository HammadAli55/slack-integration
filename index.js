const express = require("express");
const bodyparser = require('body-parser')
const axios = require('axios');
const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const cors = require('cors')
app.use(cors())

// const webhookUrl = 'https://hooks.slack.com/services/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';

function sendMessageToSlack(webhookUrl, payload) {
    axios.post(webhookUrl, payload)
        .then((response) => {
            console.log('Message sent to Slack!');
        })
        .catch((error) => {
            console.error(error);
        });
}

app.post('/slack', (req, res) => {
    const webhookUrl = req.body.data;
    console.log("webhook: ", webhookUrl)
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

    try {
        sendMessageToSlack(webhookUrl, message);
        res.json({
            data: "True",
        });
    }
    catch (error) {
        res.json({
            data: error,
        });
        return false;
    }
});

app.listen(5000, () => {
    console.log("App is listening on Port 5000")
})