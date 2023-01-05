import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const clinet = sanityClient({
  projectId: '',
  dataset: '',
  apiVersion: '',
  useCdn: true,
  token: '',
});
