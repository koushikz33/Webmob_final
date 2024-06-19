
function addhtml() {
    document.getElementById("addhtml").innerHTML = "Form has been submitted";
    document.getElementById("submit-button").removeEventListener('click', addhtml);

}

document.getElementById("submit-button").addEventListener('click', addhtml);