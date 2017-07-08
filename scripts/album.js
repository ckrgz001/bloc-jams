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
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

    var $row = $(template);

    var clickHandler = function() {
    	var songNumber = $(this).attr('data-song-number');

    	if (currentlyPlayingSong !== null) {
    		// Revert to song number for currently playing song because user started playing new song.
    		var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
    		currentlyPlayingCell.html(currentlyPlayingSong);
    	}
    	if (currentlyPlayingSong !== songNumber) {
    		// Switch from Play -> Pause button to indicate new song is playing.
    		$(this).html(pauseButtonTemplate);
    		currentlyPlayingSong = songNumber;
    	} else if (currentlyPlayingSong === songNumber) {
    		// Switch from Pause -> Play button to pause currently playing song.
    		$(this).html(playButtonTemplate);
    		currentlyPlayingSong = null;
    	}
    };


var onHover = function(event) {
    var songNumberCell = $(this).find('.song-item-number');
    var songNumber = songNumberCell.attr('data-song-number');

    if (songNumber !== currentlyPlayingSong) {
        songNumberCell.html(playButtonTemplate);
    }
};

var offHover = function(event) {
    var songNumberCell = $(this).find('.song-item-number');
    var songNumber = songNumberCell.attr('data-song-number');

    if (songNumber !== currentlyPlayingSong) {
        songNumberCell.html(songNumber);
    }
};
    // #1
    $row.find('.song-item-number').click(clickHandler);
    // #2
    $row.hover(onHover, offHover);
    // #3
    return $row;
 };

 //The jQuery find() method at #1 is similar to querySelector().
 //We call it here to find the element with the .song-item-number class that's contained in whichever row is clicked.
 //jQuery's click event listener executes the callback we pass to it when the target element is clicked.
 //Notice that clickHandler() no longer takes any arguments, which we'll address in our clickHandler() refactor.

//The hover() event listener at #2 combines the mouseover and mouseleave functions we relied on previously.
//The first argument is a callback that executes when the user mouses over the $row element and
//the second is a callback executed when the mouse leaves $row.

//At #3, we return $row, which is created with the event listeners attached.



  var setCurrentAlbum = function(album) {
      var $albumTitle = $('.album-view-title');
      var $albumArtist = $('.album-view-artist');
      var $albumReleaseInfo = $('.album-view-release-info');
      var $albumImage = $('.album-cover-art');
      var $albumSongList = $('.album-view-song-list');

      $albumTitle.text(album.title);
      $albumArtist.text(album.artist);
      $albumReleaseInfo.text(album.year + ' ' + album.label);
      $albumImage.attr('src', album.albumArtUrl);
      // #3
      $albumSongList.empty();

      // #4
      for (var i = 0; i < album.songs.length; i++) {
          var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
          $albumSongList.append($newRow);
      }
  };


  // Album button templates
  var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
  var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';


   // Store state of playing songs
   var currentlyPlayingSong = null;


  $(document).ready(function() {
    setCurrentAlbum(albumPicasso);

 });
