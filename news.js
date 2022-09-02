const loadAllCategories = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await response.json();
    return data;
}




























// const displayListItem = async () => {
//     const data = await loadAllProduct();
//     const listItem = document.getElementById('list-item');
//     const array = [];
//     data.forEach(product => {
//         if (array.indexOf(product.category) == -1) {
//             array.push(product.category);
//             const li = document.createElement('li');
//             li.innerHTML = `<a>${product.category}</a>`;
//             listItem.appendChild(li);
//         }
//     });

// }


// const inputField = document.getElementById('Input-field');
// inputField.addEventListener('keypress', async (event) => {
//     if (event.key === 'Enter') {
//         // console.log(inputField.value)
//         const inputValue = inputField.value;
//         const allProduct = await loadAllProduct();
//         const findProduct = allProduct.filter(product => product.category.includes(inputValue))
//         const phoneContainer = document.getElementById('phone-container');
//         findProduct.forEach(product => {
//             const { category, image, title, description } = product;
//             const col = document.createElement('col');
//             col.innerHTML = `
//        <div class="card h-100 p-4">
//                         <img src="${image}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                             <h5 class="card-title">${category}</h5>
//                             <p class="card-text">${title.length > 20 ? title.slice(0, 20) + '......' : title}</p>
//                         </div>
//                         <button onclick="showModal('${image}','${description}')" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">detail</button>
//                     </div>
//        `;
//             phoneContainer.appendChild(col)

//         });
//     }

// })

// const showModal = (image, description) => {
//     const modalBody = document.getElementById('modal-body');
//     modalBody.innerHTML = '';
//     const div = document.createElement('div');
//     div.innerHTML = `
//         <img src="${image}" class="card-img-top" alt="...">
//         <p class="card-text">${description}</p>
//         `;
//     modalBody.appendChild(div)

// }



// displayListItem();
