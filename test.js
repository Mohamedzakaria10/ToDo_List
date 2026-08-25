let nameInput = document.getElementById("nameInput");
let numberInput = document.getElementById("numberInput");
let saveBtn = document.getElementById("saveBtn");
let usersContainer = document.getElementById("usersContainer");
let userCountText = document.getElementById("userCount");
let emptyMsg = document.getElementById("emptyMsg");

let usersList = [];

saveBtn.addEventListener("click", function () {
  let nameValue = nameInput.value.trim();
  let numberValue = numberInput.value.trim();

  if (nameValue === "" || numberValue === "") {
    alert("Please enter your name and number");
    return;
  }

  if (emptyMsg) {
    emptyMsg.style.display = "none";
  }

  let userObject = { name: nameValue, number: numberValue };
  usersList.push(userObject);

  let userCard = document.createElement("div");
  userCard.classList.add("user-item");

  userCard.innerHTML = `
        <span>${nameValue} - ${numberValue}</span>
        <button class="delete-btn">Delete</button>
    `;

  let deleteBtn = userCard.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    userCard.remove();

    usersList = usersList.filter((user) => user !== userObject);
    userCountText.textContent = usersList.length;

    if (usersList.length === 0 && emptyMsg) {
      emptyMsg.style.display = "flex";
    }
  });

  usersContainer.appendChild(userCard);

  userCountText.textContent = usersList.length;

  nameInput.value = "";
  numberInput.value = "";
});
