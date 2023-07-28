import { API_KEY } from './key';

// Provide your own API key
// Visit: https://developers.google.com/youtube/registering_an_application for more info about creating your own API_KEY
export const YOUTUBE_AUTO_SUGGEST_API =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&region=US&key=' +
  API_KEY;
