const axios = require('axios');

const webhookUrl = ''; // Replace with your webhook URL
const message = {
  blocks: [
    {
        "type": "section",
        "text": {
            "type": "plain_text",
            "text": "I think it's super cool",
            "emoji": true
        }
    },
    {
        "type": "video",
        "title": {
            "type": "plain_text",
            "text": "How to use Slack.",
            "emoji": true
        },
        "description": {
            "type": "plain_text",
            "text": "Slack is a new way to communicate with your team. It's faster, better organized and more secure than email.",
            "emoji": true
        },
        "video_url": "https://www.youtube.com/embed/RRxQQxiM7AA?feature=oembed&autoplay=1",
        "alt_text": "How to use Slack?",
        "thumbnail_url": "https://i.ytimg.com/vi/RRxQQxiM7AA/hqdefault.jpg",
        "author_name": "Arcado Buendia",
        "provider_name": "YouTube",
    }
]
};

axios.post(webhookUrl, message)
  .then((response) => {
    console.log('Message sent successfully:', response.data);
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });