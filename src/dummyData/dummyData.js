import {appImages} from '../assets';

export const Filters = [
  'Recommended',
  'Top Rates',
  'Best Offers',
  'Most Popular',
];

export const Properties = [
  {
    id: '1',
    title: 'Lorem House',
    price: '$340/month',
    location: 'Avenue, West Side',
    image: appImages.villa,
  },
  {
    id: '2',
    title: 'Lorem House',
    price: '$340/month',
    location: 'Avenue, West Side',
    image: appImages.villa,
  },
];

export const propertiesNear = [
  {
    id: '1',
    title: 'Woodland Apartment',
    price: '$340/month',
    location: '1012 Ocean avenue, New York, USA',
    rating: 4.9,
    image: appImages.apartment,
    beds: '1,225',
    baths: '3.0',
  },
  {
    id: '2',
    title: 'Woodland Apartment',
    price: '$340/month',
    location: '1012 Ocean avenue, New York, USA',
    rating: 4.9,
    image: appImages.apartment,
    beds: '1,225',
    baths: '3.0',
  },
];

export const galleryData = [
  {id: '1', image: appImages.galleryImage1},
  {id: '2', image: appImages.galleryImage2},
  {id: '3', image: appImages.galleryImage3},
  {id: '4', image: appImages.galleryImage3},
  {id: '5', image: appImages.galleryImage4},
  {id: '6', image: appImages.galleryImage1},
];

export const reviews = [
  {
    id: '1',
    name: 'Sandeep S.',
    profileImage: appImages.reviewProfile,
    timeAgo: '2 months ago',
    rating: 5.0,
    review:
      'Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.',
    images: [appImages.galleryImage1, appImages.galleryImage2],
    likes: 1,
    dislikes: 2,
  },
  {
    id: '2',
    name: 'Sandeep S.',
    profileImage: appImages.reviewProfile,
    timeAgo: '2 months ago',
    rating: 5.0,
    review:
      'Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.',
    images: [appImages.galleryImage1, appImages.galleryImage2],
    likes: 1,
    dislikes: 2,
  },
];

export const facilities = [
  {id: '1', name: 'Car Parking', icon: 'car'},
  {id: '2', name: 'Swimming Pool', icon: 'water'},
  {id: '3', name: 'Gym & Fit', icon: 'barbell'},
  {id: '4', name: 'Restaurant', icon: 'restaurant'},
  {id: '5', name: 'Wi-fi', icon: 'wifi'},
  {id: '6', name: 'Pet Center', icon: 'paw'},
  {id: '7', name: 'Sports Club', icon: 'walk'},
  {id: '8', name: 'Laundry', icon: 'shirt'},
];
