const getLocalMedia = () => {
  const local_media = localStorage.getItem("media");
  if(local_media !== null) {
    return JSON.parse(local_media);
  } else {
    return null;
  }
}
export default getLocalMedia;
