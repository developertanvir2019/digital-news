const loadAllCategories = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await response.json();
    displayCategory(data.data.news_category)
}

const displayCategory = categories => {
    const categoriesId = document.getElementById('categories');
    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
        <a onclick="showNews('${category.category_id}')" class="nav-link active" aria-current="page" href="#">${category.category_name}</a>
        `;
        categoriesId.appendChild(li);
    });
}

loadAllCategories();



const showNews = (category_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}

const displayNews = newsAll => {
    console.log(newsAll)
    const newsId = document.getElementById('news-id');
    newsId.textContent = '';
    newsAll.forEach(news => {
        const { author, details, thumbnail_url, title, total_view } = news;


        const div = document.createElement('div');
        div.classList.add('row')
        div.innerHTML = `
        <div class="col-lg-4 col-sm-12 py-2"><img src="${thumbnail_url}" alt=""></div>
        <div class="col-lg-8 col-sm-12 py-2">
            <h3>${title}</h3>
            <p>${details.length > 400 ? details.slice(0, 400) + '...' : details}</p>
            <div class="d-flex justify-content-evenly">
                <div class="d-flex">
                    <div><img src="${author.img}" alt=""></div>
                    <p>${author.name}</p>
                </div>
                <div></div>
            </div>
        </div>
        `;
        newsId.appendChild(div);
    });
}








// Md. Mahabub Hasan Sany9:59 PM
// লোড হওয়া নিউজ এর ডাটাগুলো বেশি ভিউ অনুসারে  সর্টিং করার ক্ষেত্রে  আমরা নিচের দেওয়া ফাংশনটি ব্যবহার করতে পারি :

// datas.sort((a, b) => {
//     return b.propertyName - a.propertyName;
// });

// এখানে datas হচ্ছে ক্যাটাগরি অনুসারে API ফেচ করার পর যে ডাটাগুলো পাওয়া গিয়েছে সেটা।