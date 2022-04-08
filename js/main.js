document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
//   const choice = document.querySelector('input').value
  const url = 'https://justcors.com/tl_068356f/https://xkcd.com/info.0.json'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h1').innerText = data.title
        document.querySelector('img').src = data.img
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}