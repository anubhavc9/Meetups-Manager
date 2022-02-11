import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://media-cdn.tripadvisor.com/media/photo-s/01/1b/ae/57/another-view.jpg'
      title='First Meetup'
      address='Chicago, Ilinois'
      description='This is a First Meetup'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // fetch data for a particular meetup with meetupId

  return {
    props: {
      meetupData: {
        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/01/1b/ae/57/another-view.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Chicago, Ilinois',
        description: 'This is a First Meetup',
      },
    },
  };
}

export default MeetupDetails;
