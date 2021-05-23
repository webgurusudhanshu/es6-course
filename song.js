/*
Title : Song Info
Desccription : Song and its metadata
*/

/*
Title : Song List
Desccription : Song and its metadata
*/

// Song Title
var songName = "On My Way";
// Track Duration
var durationInSeconds = 193;
// Release Year
var releaseYear = "2019";
// Genre
var genres = ["Moombahton", "Future bass"];
// Has Lyrics
var hasLyrics = true;
// 
var lyricsURL = "https://www.azlyrics.com/lyrics/alanwalker/onmyway.html";
// Artist Name
var artist = ["Alan Walker", "Sabrina Carpenter", "Farruko"];
// Album Detail
var albumDetail = {
    name : "Live Fast",
    language:  "English",    
    composer: "Kristian Berg",
    musicDirector: "Alan Walker",
    review: 8.4,
    showRating : function(){
        console.log("Review : " + this.review + "/10");
    },
};

console.log("Song Name : " + songName);
console.log("Duration : " + durationInSeconds +" sec");
console.log("Release Year : " + releaseYear);
console.log("Genres : " + genres.join(", "));
console.log("Lyrics : " + hasLyrics);
// lyrics is true
if(hasLyrics){
    console.log("Lyrics URL : " + lyricsURL);
} 
console.log("Artist : " + artist.join(", "));
console.log("Album : " + albumDetail.name);
console.log("Language : " + albumDetail.language);
console.log("Domposed by : " + albumDetail.composer);
console.log("Music Director : " + albumDetail.musicDirector);
// show song review
albumDetail.showRating();
