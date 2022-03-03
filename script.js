let filter = document.getElementById('search');
let result = document.querySelector('.result-container');

let listusers = [];
getusers();
async function getusers(){
    const response = await fetch('https://random-data-api.com/api/users/random_user?size=100');
    const data = await response.json();
    result.innerHTML = "";

    data.forEach(user => {
       let element = document.createElement('li');
       listusers.push(element);
       result.appendChild(element);
       element.innerHTML = ` <img src="${user.avatar}" alt="">
                             <div class="info">
                                 <h2 class="name">${user.first_name} ${user.last_name}</h2>
                                 <p>${user.address.state}, ${user.address.country}</p>
                             </div>`;
    });
    
}

filter.addEventListener('input', (input) =>{
    filtercontent(input.target.value);
})

let filtercontent= (input)=>{
   
   listusers.forEach(user =>{

       if(user.innerText.toLowerCase().includes(filter.value.toLowerCase())){
          user.classList.remove('hide');
          
       }
       else{
          user.classList.add('hide');
       }
       
   })
}