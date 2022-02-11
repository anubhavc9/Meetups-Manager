// our-domain.com/

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/01/1b/ae/57/another-view.jpg',
    address: 'Chicago, Ilinois',
    description: 'This is a first meetup among the fans',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://businessfacilities.com/wp-content/uploads/2019/05/AtlantaGA-571x300.jpg',
    address: 'Atlanta, Georgia',
    description: 'This is a second meetup among the fans',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image:
      'https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/0%20HERO_HoustonTX_GettyImages-532390052.jpg?h=c5520b1b&itok=uKyYtaMD',
    address: 'Houston, Texas',
    description: 'This is a third meetup among the fans',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API here. for now, we'll work with DUMMY_MEETUPS

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 100,
  };
}

export default HomePage;
