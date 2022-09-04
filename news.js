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

//show news part 

const showNews = (category_id) => {
    toggleSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(res => res.json())
        .then(data => displayNews(data.data))

}

const displayNews = newsAll => {
    newsAll.sort((a, b) => {
        return b.total_view - a.total_view;
    });
    const newsAmount = newsAll.length;
    const totalItem = document.getElementById('total-item');
    totalItem.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <h5 class="bg-light py-4 text-center">${newsAmount} items found for the category</h5>
    `;
    totalItem.appendChild(div);


    const newsId = document.getElementById('news-id');
    newsId.textContent = '';
    toggleSpinner(false);
    newsAll.forEach(news => {
        const { author, details, thumbnail_url, title, total_view } = news;

        const div = document.createElement('div');
        div.classList.add('row')
        div.innerHTML = `
        <div class="col-lg-4 col-sm-12 my-3 img-fluid"><img class="thumbnail-img" src="${thumbnail_url == null ? 'no data available' : thumbnail_url}" alt=""></div>
        <div class="col-lg-8 col-sm-12 my-3">
            <h3>${title}</h3>
            <p class="container">${details.length > 300 ? details.slice(0, 300) + '...' : details}</p>
            <div class="d-flex justify-content-evenly pt-4">
                <div class="d-flex">
                <div class="image-div"><img src="${author.img == null ? 'no data available' : author.img}" alt=""></div>
                    <h6>${author.name == null ? 'no data available' : author.name}</h6>
                </div>
                <div><i class="fa fa-eye" aria-hidden="true"></i> ${total_view == null ? 'no data available' : total_view}</div>
                <button onclick="modalDetail('${news._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
            </div>
        </div>
        `;
        newsId.appendChild(div);

    });
}


//spinner part 
const toggleSpinner = isSpinning => {
    const spinnerSection = document.getElementById('spinner-section');
    if (isSpinning) {
        spinnerSection.classList.remove('d-none')
    }
    else {
        spinnerSection.classList.add('d-none')
    }
}

// modal details


const modalDetail = id => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res => res.json())
        .then(data => displayDetail(data.data[0]))
}

const displayDetail = detail => {
    const { author, details, image_url, title, total_view } = detail;
    const findDiv = document.getElementById('modal-body');
    findDiv.innerHTML = '';
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
    <img class="w-100 img-fluid" src="${image_url == null ? 'no data available' : image_url}" alt="">
    <h5>${title}</h5>
    <p>${details.length > 400 ? details.slice(0, 400) + '...' : details}</p>
       <div class="image-div">
           <img src="${author.img == null ? 'no data available' : author.img}" alt=""></div>
           <h6>${author.name == null ? 'no data available' : author.name}</h6>
       </div>
       <div><i class="fa fa-eye" aria-hidden="true"></i> ${total_view == null ? 'no data available' : total_view}</div>

        `;
    findDiv.appendChild(createDiv);
}









