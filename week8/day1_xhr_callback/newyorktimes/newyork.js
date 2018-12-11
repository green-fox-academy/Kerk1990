const sendHTTPRequest = (url, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
}
const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11+moon&landing&api_key=b31681bb57eb4f35903950f1a7fd11f3&limit=15';
sendHTTPRequest(URL, 'GET', (response) => {
  console.log(response);
});



