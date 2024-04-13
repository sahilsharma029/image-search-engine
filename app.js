const accesskey = "TjwHvPwsAu8SQEy9RBMGpxiTBj-XgVqMFJhJvI_sl6w";

const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchimage()
{
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const results = data.results;
    results.map ((results) =>{
        const image = document.createElement("img");
        image.src = SpeechRecognitionResultList.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);
    })
}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchimage();
})