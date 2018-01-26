import axios from 'axios';

// Fetch Media
export const getMedia = (url) => {
  return {
    type: 'GET_MEDIA',
    promise: axios.get(url),
    fetch: 'media'
  }
}

export const uploadImage = (mediaID) => {
  return {
    type: 'UPLOAD_IMAGE',
    mediaID
  }
}
