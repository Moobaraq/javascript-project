const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')
const more = document.getElementById('more')
const body = document.querySelector('body')
const container = document.getElementsByClassName('container')

const apiURL = 'http://api.lyrics.ovh'

async function searchSongs(term){
  const res = await fetch(`${apiURL}/suggest/${term}`)
  const data = await res.json()
  showData(data)
}

function showData(data){
  let output = ""

  data.data.forEach(song => {
    output += `
      <li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
      </li>
    `
  })
  result.innerHTML = `
  <ul class="songs">
    ${output}
  </ul>
  `
  body.style.backgroundImage = 'url(./bg.jpg)'
  container.style.backgroundColor = 'linear-gradient(#ffc10773, #ab47bc73)'

  if(data.prev || data.next) {
    more.innerHTML = `
      ${data.prev ? `<button class='btn' onclick = "getMoreSongs('${data.prev}')">Prev</button>` : ""}
      ${data.next ? `<button class='btn' onclick="getMoreSongs('${data.next}')">Next</button>` : ""}
    `
  }else{
    more.innerHTML = ''
  }
}

async function getMoreSongs(url) {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data);

  showData(data)
}

async function getLyrics(artist, songTitle){
  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`)
  const data = await res.json()

  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>')

  result.innerHTML = `
    <h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>
  `
  more.innerHTML = ''
  body.style.backgroundImage = 'url(./bg2.jpg)'
  container.style.backgroundColor = 'linear-gradient(#ab47bc73, #ffc10773)'
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const searchTerm = search.value.trim()
  if(!searchTerm){
    alert('Input song or artist name')
  }else{
    searchSongs(searchTerm)
  }
})

result.addEventListener('click', e => {
  const clickedEl = e.target
  if(clickedEl.tagName === 'BUTTON') {
    const artist = clickedEl.getAttribute('data-artist')
    const songTitle = clickedEl.getAttribute('data-songtitle')

    getLyrics(artist, songTitle)
  }
})