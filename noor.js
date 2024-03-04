

const loadNews = async () => {
  const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts
  `);
  const data = await res.json();
  const newsPortals = data.posts;
  const searchData = newsPortals.category;

  
  
  displayNews(newsPortals);
  
 

}

const displayNews = (newsPortals) =>{
  
  const newsContainer = document.getElementById('news_container');
  
  newsPortals.forEach(newsPortal => {
    
    // console.log(newsPortal);
// const active = newsPortal.isActive ? indicator_dot.classList(green) :indicator_dot.classList(red);

    const newsContent = document.createElement('div');
  newsContent.classList = `card card-side bg-base-100 flex flex-1 w-[80%] shadow-xl`;
  newsContent.innerHTML =`
  <div class="indicator">
  <span id="indicator_dot" class="indicator-item badge badge-secondary"></span>
  

  
  
  <div class="grid w-32 h-32 bg-base-300 place-items-center"><img class="rounded-3xl" src="${newsPortal.image}"></div>
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
              <p><i class="fa-regular fa-eye"></i>${newsPortal.view_count}</P></div>
            
              <div class="flex gap-2">
              <p><i class="fa-regular fa-clock"></i>${newsPortal.posted_time}</P></div>
              
              <div class="card-actions justify-end">
                <button onclick="readNewsList('${newsPortal.title}',${newsPortal.view_count})" class="btn bg-green-500"><i class="fa-regular fa-envelope"></i></button>
              </div>
              </div>
              
            </div>
          </div>

  `;
  // const span = ${isActive} ? indicator_dot 'bg-green-500' : indicator_dot.classlist.add('bg-red-500');
  
    newsContainer.appendChild(newsContent);

  });

  
  
  // if(${isActive} === true){
  //   document.getElementById('indicator_dot').classList.add("bg-green-500")
  // }
  // else{document.getElementById('indicator_dot').classList.add("bg-red-500")

  // }
};


const handleSearch = async () => {
  const searchCategory = document.getElementById('input_field');
  const searchCat = searchCategory.value;
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchCat}`);
  // const queryByCategory = await res.json();
  // const data = queryByCategory.posts;
  // // const searchNews = queryByCategory;
  // console.log(data);

  
// console.log(postQuery);
  console.log(searchCat);
  loadNews(searchCat);


};
  




let sum = 0;
const readNewsList = (title, view_count) =>{
  const readSum = document.getElementById('read_num');
  sum++;
  readSum.innerText = sum;


      const titleDiv = document.getElementById('title_container');
  const newsTitle = document.createElement('div');
  
  
  newsTitle.innerHTML = `
  <div class="flex justify-between bg-gray-300  w-[450px] h-[100px] mt-6 shadow-xl p-4" style="border-radius: 15px;">
  <h2 class="text-black text-xl font-bold" id="title">${title}</h2>
  <p><i class="fa-regular fa-eye"></i>${view_count}</P></div>

  `;
 
  
  titleDiv.appendChild(newsTitle);
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