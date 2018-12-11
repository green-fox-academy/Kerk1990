const xhr = new XMLHttpRequest();
const API_BASE_URL = "http://api.giphy.com/v1/gifs/search?q=funny+shit&api_key=2JARj1j15MHluVqfnamDwQVvrAd2p3Vz&limit=16";

xhr.open('GET', `${API_BASE_URL}`, true);
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
    }
  }
}