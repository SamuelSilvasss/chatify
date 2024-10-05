import Pusher from 'pusher';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pusher = new Pusher({
  appId: '1870783',
  key: 'd3803197774387122477',
  secret: 'db36a142ddf2ed76a8a8',
  cluster: 'us2',
  useTLS: true
});

app.post('/message', (req, res) => {
  const { message } = req.body;

  pusher.trigger('chat-channel', 'new-message', { message });

  res.status(200).send('Message sent');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});