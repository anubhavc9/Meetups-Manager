// our-domain.com/

import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetups Manager</title>
        <meta
          name='description'
          content='Browse a list of highly active meetups!'
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://Anubhav123:Anubhav123@cluster0.sdhjc.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray(); // retrieve all documents form the 'meetups' collection

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
