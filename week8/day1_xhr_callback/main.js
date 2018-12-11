const xhr = new XMLHttpRequest();
const API_BASE_URL = "http://api.giphy.com/v1/gifs/search?q=funny+fail&api_key=2JARj1j15MHluVqfnamDwQVvrAd2p3Vz&limit=16";

xhr.open('GET', `${API_BASE_URL}`, true);
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        let giphyStillURL = response.data[i].images.original_still.url;
        let gifMove = response.data[i].images.original.url;
        let gifList = document.querySelector('.gifs');
        let gif = document.createElement('img');
        gifList.appendChild(gif);
        gif.setAttribute('src', giphyStillURL);
        gif.onclick = () => {
          gif.setAttribute('src', gifMove);
        }
      }
    }
  }
}