// Constructor function
var Track = function(param) {
    this.name = param.name;
    this.url = param.url;

    // this.playTrack = function() {
    //     console.log('Playing ', this.name);
    // };
};
// Prototype better then method because it can be redefine
Track.prototype.playTrack = function() {
    console.log('Playing  Track ', this.name);
};

// Apply example
var YoutubeTrack = function(params) {
    Track.apply(this, arguments);
    this.image = params.image;
};

// Inheritance example
YoutubeTrack.prototype = Object.create(Track.prototype);
YoutubeTrack.prototype.constructor = YoutubeTrack; // return link to the YoutubeTrack instead of Track

// If we need to redefine prototype...
YoutubeTrack.prototype.playTrack = function() {
    console.log('Hello Youtube ', this.name);
};

// 'new' -> create new instance of the Track object
var track01 = new Track({
    name: 'track01',
    url: 'track01.mp3'
});

var track02 = new Track({
    name: 'track02',
    url: 'track02.mp3'
});

var youtubeTrack01 = new YoutubeTrack({
    name: 'youtubeTrack01',
    url: 'youtubeTrack01.mp3',
    image: 'track01.mp3'
});

var youtubeTrack02 = new YoutubeTrack({
    name: 'youtubeTrack02',
    url: 'youtubeTrack02.mp3',
    image: 'track02.mp3'
});

console.log(track01);
console.log(track02);
track01.playTrack();
console.log(Track.prototype, '\nPrototype better then method because it can be redefine');

console.log(youtubeTrack01);
console.log(youtubeTrack02);

youtubeTrack01.playTrack();
youtubeTrack02.playTrack();

// console.log(YoutubeTrack.prototype.constructor);