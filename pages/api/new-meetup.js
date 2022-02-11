// POST /api/new-meetup => end-point for creating a new meetup
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // connecting to MongoDB Atlas
    const client = await MongoClient.connect(
      'mongodb+srv://Anubhav123:Anubhav123@cluster0.sdhjc.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    // making a new collection/selecting an existing collection(table)
    const meetupsCollection = db.collection('meetups');

    // inserting the new meetup data
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    // we can also add some error handling if connection to db failed or insertion failed

    client.close();

    res.status(201).json({ message: 'New meetup created!' });
  }
}

export default handler;
