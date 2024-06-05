class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav = null
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

document.addEventListener('DOMContentLoaded', () => {
const jbox = new Jukebox()
const albumData = [
    { artist: 'Operation Ivy', title: 'Energy' },
    { artist: 'Blink 182', title: 'Dude Ranch' },
    { artist: 'New Found Glory', title: 'Sticks and Stones' }
]

for (let data of albumData) {
    const album = new Album(data.artist, data.title);
    jbox.addAlbum(album)
}

const albumSelect = document.getElementById('albumSelect')
for (let album of jbox.albums) {
    const option = document.createElement('option')
    option.value = album.title
    option.text = `${album.artist} - ${album.title}`
    albumSelect.appendChild(option)
}

document.getElementById('playButton').addEventListener('click', () => {
    const selectedAlbumTitle = albumSelect.value
    const album = jbox.albums.find(album => album.title === selectedAlbumTitle)
    if (album) {
        album.play()
    }
})


document.getElementById('favoriteButton').addEventListener('click', () => {
    const favorite = jbox.favoriteAlbum()
    const favoriteAlbumElement = document.getElementById('favoriteAlbum')
console.log('Favorite Album:', favorite)
if (favorite) {
    console.log('Favorite Album Type:', typeof favorite);
    console.log('Favorite Album Display Method:', favorite.display)

    if (typeof favorite.display === 'function') {
        favoriteAlbumElement.textContent = `Your favorite album is: ${favorite.display()}`
    } 
} else {
    favoriteAlbumElement.textContent = 'No albums have been played yet.'
    }
})


})


