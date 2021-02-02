import "babel-polyfill"
var myFunc = async function(){}
const post = () => {
    const postContainer = document.getElementById("post-container");
    const loading = document.querySelector(".loader");
    const filter = document.getElementById("filter");
    

    let limit = 10;
    let page = 1;

   //Fetch posts from API
    async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`)

    const data = await res.json();

    return data;
}



//Show posts in DOM
async function showPosts() {
    const posts = await getPosts();
   
    posts.forEach(post => {
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML = 
        `
        <div class="number">${post.id}</div>
        <div class="post-info">
        <div class="post-list">
                <h2 class="post-list-point">Webpage:</h2>
                <h2 id="post-webpage">${post.website}</h2>
        </div>
        <div class="post-list">
                <h2 class="post-list-point">Pageloads:</h2>
                <h2 id="post-pageloads">${post.city}</h2>
        </div>
        <div class="post-list">
                <h2 class="post-list-point">Unique Users:</h2>
                <h2 id="post-users">${post.username}</h2>
        </div>
        <div class="post-list">
                <h2 class="post-list-point">Abos:</h2>
                <h2 id="post-abos">${post.name}</h2>
        </div>
        <div class="post-list">
                <h2 class="post-list-point">Obdens:</h2>
                <h2 id="post-obdens">${post.suite}</h2>
        </div>
        `;
        
        ;

        postContainer.appendChild(postEl);
    })
}



// Filter possts by input
function filterPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll(".post");

    posts.forEach(post  => {
        const title = post.querySelector("#post-webpage").innerText.toUpperCase();
        const body = post.querySelector("#post-users").innerText.toUpperCase();

        if(title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    });
}  

// Show initial posts
showPosts();

filter.addEventListener("input", filterPosts);
    }
    export default post



