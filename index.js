//Adding a DOMContentLoaded to run after the HTML has loaded
//Changing text from one sentence to another. 

document.addEventListener("DOMContentLoaded", function () {
    let newText = document.querySelector("#text")
    const IsCool = newText.textContent = "This is really cool!"
});

    
