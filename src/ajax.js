export default function makeRequest (url) {
  return fetch(url)
    .then((response) => response.json())
    .catch(/* something went wrong */)
}
