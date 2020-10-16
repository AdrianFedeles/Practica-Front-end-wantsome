const button = document.getElementById('discover');
const irregularList = document.getElementById('list');

const discoverColors = () => {
    let getColors = new XMLHttpRequest();
    let getUrlColors = './index.json';
    // let urlToFollow = "http://bit.ly/json-colors-practice"; Nu functioneaza. Nu stiu
    getColors.open('GET', getUrlColors);


    getColors.onreadystatechange = () => {
        if (getColors.status === 200 && getColors.readyState === 4) {
            let getObj = JSON.parse(getColors.response);
            let getObjKey = Object.keys(getObj);
            const creator = (tagsToCreate) => {
                let list = document.createElement('li');
                list.setAttribute('class', 'listStyle');
                let paragraph = document.createElement('p');
                paragraph.setAttribute('class', 'paragraphStyle');
                paragraph.innerText = `${tagsToCreate}`;
                list.style.backgroundColor = getObj[tagsToCreate];
                list.appendChild(paragraph);
                irregularList.appendChild(list);
            }
            for (let i = 0; i < getObjKey.length; i++){
                creator(getObjKey[i])
            }
        }
    }
    getColors.send();
}
button.addEventListener("click", discoverColors);