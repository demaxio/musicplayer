
Amplitude.init({
  bindings: {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  debug: true, 
  autoplay: true,
  shuffle_on: true,
  visualization: 'michaelbromley_visualization',
  songs: [
    {
      //1
      "name": "Highway Jupiter",
      "artist": "3FORCE",
      "album": "Intergalactic",
      "url":"songs/3FORCE - Highway Jupiter.mp3",
      "cover_art_url": "covers/3FORCE_Intergalactic.jpg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //2
      "name": "Intergalactic",
      "artist": "3FORCE",
      "album": "Intergalactic",
      "url": "songs/3FORCE - Intergalactic.mp3",
      "cover_art_url": "covers/3FORCE_Intergalactic.jpg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //3
      "name": "Nuclear Sunday",
      "artist": "3FORCE",
      "album": "Intergalactic",
      "url": "songs/3FORCE - Nuclear Sunday.mp3",
      "cover_art_url": "covers/3FORCE_Intergalactic.jpg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //4
      "name": "Career Mode",
      "artist": "20SIX Hundred",
      "album": "Player One",
      "url": "songs/20SIX Hundred - Career Mode.mp3",
      "cover_art_url": "covers/20SIX Hundred_Player One.jpeg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //5
      "name": "Open World",
      "artist": "20SIX Hundred",
      "album": "Player One",
      "url": "songs/20SIX Hundred - Open World.mp3",
      "cover_art_url": "covers/20SIX Hundred_Player One.jpeg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //6
      "name": "Vehicular Combat",
      "artist": "20SIX Hundred",
      "album": "Player One",
      "url": "songs/20SIX Hundred - Vehicular Combat.mp3",
      "cover_art_url": "covers/20SIX Hundred_Player One.jpeg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //7
      "name": "The Blackness",
      "artist": "20SIX Hundred",
      "album": "The Cold Rise from sleep",
      "url": "songs/20SIX Hundred - The Blackness.mp3",
      "cover_art_url": "covers/20Six Hundred_The Cold Rise From Sleep.jpg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //8
      "name": "Dead of Night",
      "artist": "20SIX Hundred",
      "album": "The cold rise from sleep",
      "url": "songs/20SIX Hundred - Dead of Night.mp3",
      "cover_art_url": "covers/20Six Hundred_The Cold Rise From Sleep.jpg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //9
      "name": "Breaking The Bonds",
      "artist": "20SIX Hundred",
      "album": "The Next Level",
      "url": "songs/20SIX Hundred - Breaking The Bonds.mp3",
      "cover_art_url": "covers/20SIX Hundred - The Next Level.jpeg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //10
      "name": "Lisa",
      "artist": "Airglow",
      "album": "Memory Bank",
      "url": "songs/Airglow - Lisa.mp3",
      "cover_art_url": "covers/Airglow_Memory Bank.jpg",
      "visualization": "michaelbromley_visualization"
    },
    {
      //11
      "name": "Innermission",
      "artist": "Airglow",
      "album": "Memory Bank",
      "url": "songs/Airglow - Innermission.mp3",
      "cover_art_url": "covers/Airglow_Memory Bank.jpg",
      "visualization": "michaelbromley_visualization"
    }
  ],
  delay: 4000,
  start_song: 0,
  waveforms: {
      sample_rate: 50
  },

  visualizations: [
    {
      object: MichaelBromleyVisualization,
      params: {

      }
    }
  ]
});

document.getElementsByClassName('visualization-toggle')[0].addEventListener('click', function(){
  if( this.classList.contains( 'visualization-off' ) ){
    this.classList.remove('visualization-off');
    this.classList.add('visualization-on');
    document.getElementById('large-now-playing-album-art').style.display = 'none';
    document.getElementById('large-visualization').style.display = 'block';
  }else{
    this.classList.remove('visualization-on');
    this.classList.add('visualization-off');
    document.getElementById('large-now-playing-album-art').style.display = 'block';
    document.getElementById('large-visualization').style.display = 'none';
  }
});


document.getElementsByClassName('arrow-up-icon')[0].addEventListener('click', function(){
  document.getElementById('visualizations-player-playlist').style.display = 'block';
});

document.getElementsByClassName('arrow-down-icon')[0].addEventListener('click', function(){
  document.getElementById('visualizations-player-playlist').style.display = 'none';
});