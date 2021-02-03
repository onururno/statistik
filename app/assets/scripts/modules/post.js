
const post = () => {
    const postContainer = document.getElementById("post-container");
    const loading = document.querySelector(".loader");
    const filter = document.getElementById("filter");
    

    let limit = 5;
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
                <h2 class="post-list-point">Web:</h2>
                <h2 id="post-webpage">${post.website}</h2>
        </div>
        <div class="post-list">
                <h2 class="post-list-point">V:</h2>
                <h2 id="post-pageloads">${post.address.city}</h2>
        </div>
        <div class="post-list">
                <h2 class="post-list-point">U:</h2>
                <h2 id="post-users">${post.username}</h2>
        </div>
        <div class="post-list">
                <h2 class="post-list-point">A:</h2>
                <h2 id="post-abos">${post.name}</h2>
        </div>
        <div class="post-list">
                <h2 class="post-list-point">O:</h2>
                <h2 id="post-obdens">${post.address.suite}</h2>
        </div>
        `;
        
        ;

        postContainer.appendChild(postEl);
    })
}

// Show loader & fetch more posts      DELETE
function showLoading() {
    loading.classList.add("show");

    setTimeout(() => {
        loading.classList.remove("show");

        setTimeout(() => {
            page++;
            showPosts();
        }, 300);

    }, 1000);
    }


// Filter possts by input
function filterPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll(".post");

    posts.forEach(post  => {
        const title = post.querySelector("#post-webpage").innerText.toUpperCase();
        const body = post.querySelector("#post-users").innerText.toUpperCase();
        const pageloadds = post.querySelector("#post-pageloads").innerText.toUpperCase();
        const obdenss = post.querySelector("#post-obdens").innerText.toUpperCase();

        if(title.indexOf(term) > -1 || body.indexOf(term) > -1 || pageloadds.indexOf(term) > -1 || obdenss.indexOf(term) > -1) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    });
}  

// Show initial posts
showPosts();

// trigger loading if hit the bottom    DELETE
window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight -5){
        showLoading();
    }
});


filter.addEventListener("input", filterPosts);
    }
    export default post



