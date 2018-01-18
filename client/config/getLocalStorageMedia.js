const getLocalMedia = () => {
  const localStorage_media = localStorage.getItem("media");
  const local_media = JSON.parse(localStorage_media);

  return local_media;
}
export default getLocalMedia;
