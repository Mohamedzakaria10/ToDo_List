let nameInput       = document.getElementById('nameInput')
let numberInput     = document.getElementById('numberInput')
let saveBtn         = document.getElementById('saveBtn')
let usersContainer  = document.getElementById('usersContainer')
let userCountText   = document.getElementById('userCount')
let emptyMsg        = document.getElementById('emptyMsg')


let usersList = [];

saveBtn.addEventListener('click' , function(){
    let nameValue = nameInput.value.trim();
    let numberValue = numberInput.value.trim();

    if(nameValue === '' || numberValue === ''){
        alert('Please enter your name and number');
        return;
    }

    if(emptyMsgBox){
        emptyMsgBox.style.display = 'none';
    }

    usersList.push({name: nameValue, number: nameValue});

    let userCard = document.createElement('div');
    userCard.classList.add('user-item');
    userCard.innerHTML = `<span>${nameValue}</span> <span>${numberValue}</span>`;

    usersContainer.appendChild(userCard);

    userCountText.textContent = usersList.length;

    nameInput.value = '';
    numberInput.value = '';
});
 