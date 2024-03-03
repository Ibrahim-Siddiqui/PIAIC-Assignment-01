// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing 
// these two pieces of information. Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.

interface Album{
    ArtistName : string,
    AlbumTitle : string,
    trackNumber? : number
}

function make_album(artistName:string,albumTile:string,track?:number):Album{
    let musicAlbum:Album = {
       ArtistName : artistName,
       AlbumTitle : albumTile    
    }
    if(track !== undefined){
        musicAlbum.trackNumber = track;
    }
    return musicAlbum;
}

let Album1 = make_album("Atif Aslam","Jeena Jeena");
let Album2 = make_album("Arjeet Singh","Tum he ho");
let Album3 = make_album("Asim Azher","Jo Tu Na Mila",1);

console.log(Album1);
console.log(Album2);
console.log(Album3);