const cds = [
    {
        id: 12345,
        albumTitle: 'Master of Puppets',
        artist: 'Metallica',
        releaseData: 1985,
        songs: [
            { id: 91827361, name: 'Battery', length: 313 },
            { id: 123917, name: 'Master of Puppets', length: 513 },
            { id: 102393, name: 'The Thing That Should Not Be', length: 396 },
            { id: 10291843, name: 'Welcome Home (Sanitarum)', length: 387 },
            { id: 7361, name: 'Disposable Heroes', length: 496 },
            { id: 1237, name: 'Leper Messiah', length: 310 },
            { id: 1023, name: 'Orion', length: 506 },
            { id: 102914332, name: 'Damage, Inc.', length: 332 },
            { id: 91824212, name: 'Battery (Live)', length: 293 },
            {
                id: 123917342,
                name: 'The Thing That Should Not Be (Live)',
                length: 422,
            },
        ],
    },
    {
        id: 92341,
        albumTitle: 'Inhuman Rampage',
        artist: 'Dragonforce',
        releaseData: 2005,
        songs: [
            { id: 82783169, name: 'Through the Fire and Flames', length: 441 },
            { id: 10293, name: 'Revolution Deathsquad', length: 471 },
            { id: 401851, name: 'Storming the Burning Fields', length: 318 },
            { id: 3218401, name: 'Operation Ground and Pound', length: 463 },
            { id: 432101, name: 'Body Breakdown', length: 417 },
            { id: 1291928, name: 'Cry for Eternity', length: 491 },
            { id: 8572980, name: 'The Flame of Youth', length: 400 },
            { id: 929843, name: 'Trail of Broken Hearts', length: 354 },
            { id: 9430843, name: 'Lost Souls in Endless Time', length: 380 },
        ],
    },
];

/*given myCdCollection can you figure out the following
1. The longest song
2. The longest album
3. The album with the most songs
4. The most common word in song titles
5. The mean length of all songs.
6. The mean lengths of all albums.
7. A list of all artists sorted alphabetically
8. A list of all songs sorted alphabetically 
9. All songs beginning with the letter 'B'
10. All songs over 5 minutes long
11. All songs that have long titles over 20 characters
12. Create a function that given any id will find that Object.
*/

// 1)
cds.reduce(
    (allLongest, album) => {
        // console.log({ allLongest, album });
        if (!allLongest) return album;
        const albumLongest = album.songs.reduce(
            (longestSong, song) => {
                if (!longestSong) return song;
                if (song.length > longestSong.length) return song;
                else return longestSong;
            }
            // { id: null, nme: null, length: 0 }
        );
        if (albumLongest.length > allLongest.length) return albumLongest;
        else return allLongest;
    },
    { id: null, name: null, length: 0 }
); //=

//TODO: is it possible to get rid of the default reduce value here by returning some kind of ES6 syntax
const m = cds
    .flatMap((album) => album.songs)
    .reduce(
        (basket, song) =>
            song.length > basket.length
                ? {
                      ...basket,
                      id: song.id,
                      name: song.name,
                      length: song.length,
                  }
                : { ...basket },
        {
            id: null,
            name: null,
            length: 0,
        }
    );

console.log({ m: JSON.stringify(m, null, 2) });

process.exit(0);

// cds.reduce(

// 2)

cds.reduce((acc, curr) => [...acc, ...curr.songs], []).reduce(
    (basket, song) => {
        if (!basket) {
            basket = song;
            // return song;
        }

        if (song.length > basket.length) {
            basket = song;
            // return song;
        }

        return basket;
    }
); //=

// 2)
cds.reduce(
    (longestAlbum, album) => {
        const albumLength = album.songs.reduce((length, song) => {
            return length + song.length;
        }, 0);
        if (albumLength > longestAlbum.length) return album;
        return longestAlbum;
    },
    { id: null, name: null, length: 0 }
); //=

// 3)

/**
 * Ben Wilson  3:17 PM
    For an example of the above, songs with IDs that start with 9
    myCdCollection.map(album => album.songs.filter(song => `${song.id}`.startsWith(9))).flat()
    What would an answer look like if you use reduce? What way would you prefer to write? (edited) 

    Ben Wilson  3:30 PM
    myCdCollection.reduce((acc, cur)=> {
        return [...acc, ...cur.songs.filter(song=> `${song.id}`.startsWith(9)) ] 
    },[])
    The answers are open to discussion

    Subtract all the information you DONT NEED to solve the problem
 */

function test(arg1, arg2, arg3) {
    return { arg1, arg2, arg3 };
}

console.log(test(1, 2, 3)); //=
