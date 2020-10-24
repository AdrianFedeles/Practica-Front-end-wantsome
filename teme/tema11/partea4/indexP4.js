//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter
let movieLists = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];
movieLists.map(
    creatorOfContent = (value) =>{
        const container = document.getElementById('container');
        let h1 = document.createElement('h1');
        h1.setAttribute('class','movies');
        h1.innerText = value.name;
        container.appendChild(h1);
        value.videos.map(
            creatorOfMovies = (element) =>{
                let div = document.createElement('div');
                div.setAttribute('id','movieContent')
                // div.setAttribute("class", "movieContent");
                h1.appendChild(div);
                let p = document.createElement('p');
                p.setAttribute('class', 'idMovie');
                p.innerText = `id:${element.id}`;
                div.appendChild(p);
                let p2 = document.createElement('p');
                p2.setAttribute('class','movieTitle');
                p2.innerText = `Title:${element.title}`;
                div.appendChild(p2);
                element.boxarts.map(
                    createPosters = (value2) => {
                        let box = document.createElement('img');
                        box.setAttribute('src',value2.url);
                        box.setAttribute('class','posters');
                        box.style.width = value2.width;
                        box.style.height = value2.height;
                        div.appendChild(box);
                    }
                )
            }
        )
    }
)