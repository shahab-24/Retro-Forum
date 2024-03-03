const loadNews = async () => {
  const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts
  `);
  const data = await res.json();
  const newsPortals = data.posts;
  console.log(newsPortals);
  displayNews(newsPortals);
}

const displayNews = (newsPortals) =>{

  const newsContainer = document.getElementById('news_container');

let markAsRead = 0;

  newsPortals.forEach(newsPortal => {
    console.log(newsPortal);


    const newsContent = document.createElement('div');
  newsContent.classList = `card card-side bg-base-100 shadow-xl`;
  newsContent.innerHTML =`
  <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
            <div class="card-body">
            <div class="flex gap-6">
            <h5># ${newsPortal.category}</h5>
            <p>Author: ${newsPortal.author.name}</p></div>
              <h2 class="card-title">${newsPortal.title}</h2>
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
                <button onclick="readNews()" class="btn bg-green-500"><i class="fa-regular fa-envelope"></i></button>
              </div>
              </div>
              
            </div>
          </div>
  `
    newsContainer.appendChild(newsContent);
  });
}

const readNews = () =>{

  const appendiv = document.getElementById('title_container');
}



loadNews()