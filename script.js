var tracks = [
    "http://mtcb.pwop.com/sample-blue.mp3",
    "http://mtcb.pwop.com/sample-orange.mp3",
    "http://mtcb.pwop.com/sample-yellow.mp3",
    "http://mtcb.pwop.com/redsample.mp3",
    "http://mtcb.pwop.com/sample-green.mp3",
    "http://mtcb.pwop.com/sample-purple.mp3",
    "http://mtcb.pwop.com/sample-cyan.mp3",
    "http://mtcb.pwop.com/sample-azure.mp3",
    "http://mtcb.pwop.com/sample-ochre.mp3",
    "http://mtcb.pwop.com/sample-indigo.mp3",
    "http://mtcb.pwop.com/sample-gold.mp3",
    "http://mtcb.pwop.com/sample-chartreuse.mp3",
    "http://mtcb.pwop.com/sample-sienna.mp3",
    "http://mtcb.pwop.com/sample-orchid.mp3"
];

function playRandomTrack() {
    var indexOfRandomlyPickedTrack = Math.floor((Math.random() * tracks.length) + 1);
    var trackURL = tracks[indexOfRandomlyPickedTrack];

    var audio = document.getElementById('audio');
    var source = document.getElementById('audioSource');
    var label = document.getElementById('label');

    source.src = trackURL;
    label.innerHTML = trackURL.substring(21);
    audio.load();
    audio.play();
    audio.onended = function () {
        playRandomTrack();
    }
}

$(document).ready(function () {
    playRandomTrack();
});
