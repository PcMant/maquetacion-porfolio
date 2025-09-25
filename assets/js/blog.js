addEventListener("DOMContentLoaded", (event) => {

    fetch('https://raw.githubusercontent.com/PcMant/blogger-posts-cache-tacano/refs/heads/main/data/blog-posts.json')
    .then(r => r.json())
    .then(data => {
        let blogs = data;
        let blog__articles = document.querySelector('.blog__articles');

        let blogsHTML = blogs.map(b =>`
            <article class="articles__article">
                <div class="article__top">
                    <div class="article__category">${b.categories[0]}</div>
                    <a target="_blank" href="${b.url}" class="article__image-link">
                        <div class="article__mask">
                            <img src="${b.thumbnail}" class="article__image" alt="Imagen del blog" />
                        </div>
                        <div class="article__logo">
                            <i class="article__icon fa-solid fa-book"></i>
                        </div>
                    </a>
                </div>

                <div class="article__bottom">
                    <time datetime="2024-08-30" class="article__date">${new Date(b.published).toLocaleDateString()}</time> 
                    <a target="_blank" href="${b.url}" class="article__link">
                        <h2 class="article__title">${b.title}</h2>
                    </a>
                </div>
            </article>    
        `).join('');

        blog__articles.insertAdjacentHTML('afterbegin', blogsHTML);
    })
    .catch(e => console.error(e));
});