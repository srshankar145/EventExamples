
// function showText(name) {
//     const myName = document.getElementById('fullName').value;
//     var result;
//     console.log(myName);
//     result = myName;
//     document.getElementById('dispResult').value = result;

// }

//Using Add Event Listener
let submitBtn = document.getElementById('sbmtBtn');
submitBtn.addEventListener('click', showText);

function showText() {
    let fname = document.getElementById('fullName').value;
    document.getElementById('dispResult').value = fname;
}