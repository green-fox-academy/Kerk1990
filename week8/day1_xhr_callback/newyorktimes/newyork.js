const sendHTTPRequest = (url, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open(method, url);
  xhr.send();
}
// sendHTTPRequest(URL, 'GET', (response) => {
//   console.log(response);
const moonArticles = (NYresponse) => {
  for (let i = 0; NYresponse.response.docs.length; i++) {
    let articleHeadline = NYresponse.response.docs[i].headline.main;
    let articlePubDate = NYresponse.response.docs[i].pub_date;
    let articleSnippet = NYresponse.response.docs[i].snippet;
    let articleBody = document.querySelector('body');
    const article = document.createElement('article');
    const headLine = document.createElement('headline');
    headLine.innerText = articleHeadline;
    const pubDate = document.createElement('div');
    pubDate.innerText = articlePubDate;
    const snippet = document.createElement('p');
    snippet.innerText = articleSnippet;
    const permaLink = document.createElement('permalink');
    permaLink.innerText = 'Read articles here';

    article.appendChild(headLine);
    article.appendChild(snippet);
    article.appendChild(pubDate);
    article.appendChild(permaLink);
    articleBody.appendChild(article);
  }
}
const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=901dbc4f7cf54542a732d16a5a14aecb&q=moon&landing&by&apollo&11&begin_date=19690616&end_date=19690624';
const httpMethod = 'GET';
sendHTTPRequest(URL, httpMethod, moonArticles);


