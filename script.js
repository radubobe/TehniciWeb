const list = document.getElementById('list');
const formName = document.getElementById('formName');
const formUrl = document.getElementById('formUrl');
const addButton = document.getElementById('addButton');
let updateButton = document.getElementById('updateButton');

function getLogos() {
    fetch('http://localhost:3000/logos')
        .then(function (response) {
        
            response.json().then(function (logos) {
                appendLogosToDOM(logos);
            });
        });
};

function postLogo() {

    const postObject = {
        name: formName.value,
        img: formUrl.value
    }

    fetch('http://localhost:3000/logos', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
       
        getLogos();
      
        resetForm();
    });
}


function deleteLogo(id) {
    
    fetch(`http://localhost:3000/logos/${id}`, {
        method: 'DELETE',
    }).then(function () {
        
        getLogos();
    });
}


function updateLogo(id) {
    // creat put object
    const putObject = {
        name: formName.value,
        img: formUrl.value
    }
    
    fetch(`http://localhost:3000/logos/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(putObject)
    }).then(function () {
       
        getLogos();

       
        addButton.disabled = false;

        
        clearUpdateButtonEvents();

        // Reset Form
        resetForm();
    });
}


function editLogo(logo) {
   
    formName.value = logo.name;
    formUrl.value = logo.img;
    
    addButton.disabled = true;

    clearUpdateButtonEvents();

    // enable and add event on update button
    updateButton.disabled = false;
    updateButton.addEventListener('click', function () {
        updateLogo(logo.id)
    });

}


function appendLogosToDOM(logos) {
    
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // create and append tags
    for (let i = 0; i < logos.length; i++) {
     
        let img = document.createElement('img');
        img.src = logos[i].img;
      
        let name = document.createElement('span');
        name.innerText = logos[i].name;

      
        let editButton = document.createElement('button')
      
        editButton.addEventListener('click', function () {
            editLogo(logos[i])
        });
        editButton.innerText = 'Edit';
        let deleteButton = document.createElement('button')
        
        deleteButton.addEventListener('click', function () {
            deleteLogo(logos[i].id)
        });
        deleteButton.innerText = 'Delete';
  
        let container = document.createElement('div');
       
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(editButton);
        container.appendChild(deleteButton);

        // append container to DOM (list div)
        list.appendChild(container);
    }
}


function resetForm() {
    formName.value = '';
    formUrl.value = '';
}

function clearUpdateButtonEvents() {
    let newUpdateButton = updateButton.cloneNode(true);
    updateButton.parentNode.replaceChild(newUpdateButton, updateButton);
    updateButton = document.getElementById('updateButton');
}
// add event listener on add button
addButton.addEventListener('click', postLogo);

// get logos
getLogos();