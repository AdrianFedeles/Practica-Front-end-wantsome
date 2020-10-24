// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
url = 'https://www.googleapis.com/books/v1/volumes?q=horror';

// async function f(){
//     let pagesMoreThan =await getElements(url);
// console.log(pagesMoreThan)
// }
const myFunction = async () => {
    let ssd={};
    await fetch(url)
    .then((response)=>response.json())
    .then((response)=>response.items.filter(response=>response.volumeInfo.title.includes("Horror")))
    .then((response)=>response.filter(response=>response.volumeInfo.pageCount>230))
    .then((response)=>
        pagesMoreThan=response
    )
    .then((response)=>response.filter(response=>response.volumeInfo.authors.length>1))
    .then((response)=>ssd=response)
    console.log(ssd)
}

myFunction()