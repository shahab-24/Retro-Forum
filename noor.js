// const Posts = fetch ('https://openapi.programming-hero.com/api/retro-forum/posts');


// console.log(allPosts);


const loadNews = async () => {
  const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts
  `);
  const data = await res.json();
  const newsPortals = data.posts;
  console.log(newsPortals);
  displayNews(newsPortals);
  // readNewsList();
}

const displayNews = (newsPortals) =>{

  const newsContainer = document.getElementById('news_container');

  newsPortals.forEach(newsPortal => {
    console.log(newsPortal);


    const newsContent = document.createElement('div');
  newsContent.classList = `card card-side bg-base-100 shadow-xl`;
  newsContent.innerHTML =`
  <div class="card card-side bg-base-100 shadow-xl">
  <div class="avatar online">
  <div class="w-[80px] h-[80px] rounded-full">
    <img src="${newsPortal.image}" class="w-[72px] h-[72px] rounded-xl" />
  </div>
</div>
            
            <div class="card-body">
            <div class="flex gap-6">
            <h5>#${newsPortal.category}</h5>
            <p>Author: ${newsPortal.author.name}</p></div>
              <h2 id="title" class="card-title">${newsPortal.title}</h2>
              <p>${newsPortal.description} <hr></p>
              <div class="flex justify-around gap-4">
              <div class="flex gap-2">
              <p><i class="fa-regular fa-message"></i>${newsPortal.comment_count}</P>
              </div>

              <div class="flex gap-2">
              <p id="view"><i class="fa-regular fa-eye"></i>${newsPortal.view_count}</P></div>
            
              <div class="flex gap-2">
              <p><i class="fa-regular fa-clock"></i>${newsPortal.posted_time}</P></div>
              
              <div class="card-actions justify-end">
                <button onclick="readNewsList()" class="btn bg-green-500"><i class="fa-regular fa-envelope"></i></button>
              </div>
              </div>
              
            </div>
          </div>
  `
    newsContainer.appendChild(newsContent);
    
  });
//  readNewsList()

};

// const handleSearch = () => {
//   const value = document.getElementById('search_button').value;
//   loadNews(value);
// }






const readNewsList = async () =>{
    const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts
    `);
    const data = await res.json();
    const newsPortals = data.posts;
    console.log(newsPortals);
  // console.log('hello from read');

  const newsTitle = document.getElementById('title');
  newsPortals.forEach(news => {
    console.log(news);

    // news.addEventListener('click', function (){


      const titleDiv = document.getElementById('title_container');
  const title = document.createElement('div');
  // const postTitle = document.createElement('li')
  title.innerHTML = `
  <h2 id="title">${news.title}</h2>
  <p id="view">${news.view_count}</P>

  `;
 
  // title.appendChild(postTitle);
  titleDiv.appendChild(title);
    });
latestsNews();
  };
  
  
  
  


const latestsNews = async () => {
  const latest = await fetch (`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
  const data = await latest.json();
  console.log('latestnews',data);

  const latestPostContainer = document.getElementById('latest_post_container');
  data.forEach(item =>{
    const latestContainer = document.createElement('div');
    latestContainer.innerHTML = `
    <img src="${item.cover_image}" class="rounded-xl mx-4 mt-10"/>
    <div class="flex mt-4 gap-4"><i class="fa-solid fa-calendar-days"></i>
    <p>${item.author.posted_date}</p></div>
    
    <h2 id="title" class="card-title">${item.title}</h2>
    <p class="mt-4 mb-4">${item.description} <hr></p>

    <div class="flex flex-col">
    <img src="${item.profile_image}" class="mt-6 w-[50px] h-[50px] rounded-xl"/>
    <p class="mt-4"> ${item.author.name}</p>
    <p> ${item.author.designation}</p>
    </div>
    
    `;
    latestPostContainer.appendChild(latestContainer);
  });
};


latestsNews();
loadNews()