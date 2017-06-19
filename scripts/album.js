// Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

//  My submission for: assignment-11-DOM-Scripting-Album-View
var albumFaves = {
    title: 'Favorite Rock',
    artist: 'Various Artists',
    label: 'Universal',
    year: '1970s ++',
    albumArtUrl: 'assets/images/album_covers/cat.jpg',
    songs: [
        { title: 'Thunderstruck', duration: '4:52' },
        { title: 'Black Dog', duration: '4:55' },
        { title: 'Paint It Black', duration: '3:22'},
        { title: 'The Rover', duration: '5:39' },
        { title: 'Trampled Underfoot', duration: '5:15'}
    ]
};

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

     return template;
 };

// Below was #1 under var setCurrentAlbum function
 var albumTitle = document.getElementsByClassName('album-view-title')[0];
 var albumArtist = document.getElementsByClassName('album-view-artist')[0];
 var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
 var albumImage = document.getElementsByClassName('album-cover-art')[0];
 var albumSongList = document.getElementsByClassName('album-view-song-list')[0];



 var setCurrentAlbum = function(albumImage) {

      // #2
      albumTitle.firstChild.nodeValue = album.title;
      albumArtist.firstChild.nodeValue = album.artist;
      albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
      albumImage.setAttribute('src', album.albumArtUrl);

      // #3
      albumSongList.innerHTML = '';
};
      // #4

      for (var i = 0; i < album.songs.length; i++) {
          albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);

 };

  window.onload = function() {
      setCurrentAlbum(albumPicasso);

      albumImage.addEventListener('click', function(event)){ //translation: when click happens, click should activate the function via function(event)?
          //the function(event) should be the setCurrentAlbum function. Why no forEach??
         setCurrentAlbum(x)// whatever album cover was clicked. How do I say that? X for now.

        var albumsList = [albumPicasso, albumMarconi, albumFaves];
         //To do
         //1. Identify which album was clicked
         //2. pass that album into setCurrentAlbum which will trigger createSongRow function
         for (var i = 0; i < album.length; i++);//3. move to the next album in the list when clicked again. for loop to move through list length?
         //Since there's a list of albums, and I need a way to access items on this list, use array?
         //Since no actual array, should I make one for the albums as a variable? global variable? or play safe and use local? local! line 95 for albums variable for array


      }
  };


//document.getElementsByClassName('album-cover-art').addEventListener('click',function(album-cover-art));
// ^ this is equal to "var albumImage", so change line 89 from "window" to albumImage
