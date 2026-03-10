const XKCD = "https://xkcd.now.sh/?comic="

const statusbar = document.getElementById("num");
const resetBtn = document.getElementById("reset");
const img = document.getElementById("img");

function fetchIssue(nums){
    let url = XKCD + nums
    console.log(`request to ${url}`)
    let promesse = fetch(url);
    promesse.then((response) => {
        return response.json();
    })
    .then((json) => {
        let num = json.num;
        console.log(`num: ${num}`);
        statusbar.innerText = `num: ${num}`;
        let image = json.img;
        img.src = image;

    })
}

const buttonAction = () => {
    fetchIssue("latest");
}

resetBtn.addEventListener("click", buttonAction);