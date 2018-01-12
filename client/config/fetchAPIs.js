const fetchData = (url) => {
  return fetch(url).then(function(response) {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ' ${response.status}`);
        return;
      }
      return response.json();
    }).catch(function(err) {
      console.log(`Fetch Error:' ${err}`);
    });
}

export default fetchData;
