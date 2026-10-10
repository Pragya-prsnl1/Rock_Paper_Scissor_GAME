let userscore = 0 ;
let compscore = 0 ;
let userchoice;
let compchoose;
let userwin ;
let choice = document.querySelectorAll(".img")
choice.forEach((img) => {
    img.addEventListener("click", () => {
        userchoice = img.getAttribute("id")
        console.log("user choosed = ", userchoice)
        compchoose = compchoice()
        console.log("Computer choosed = ",compchoose)
        userwin = (gameplay())
        console.log(userwin)
        scorecount()
    })
})

let compchoice = () => {
    let options = ["rock","paper","scissor"]
    let random = Math.floor(Math.random()*3)
    return options[random]
}
const msg = document.querySelector(".win-loss-message")
let gameplay = () => {
    if (compchoose===userchoice) {
        msg.innerText="Game was draw"
        msg.style.backgroundColor="yellow"
        msg.style.color="black"
        return ("its a tie")
        
    }
    else if (compchoose==="rock" && userchoice==="paper") {
        msg.innerText="You won !"
        msg.style.backgroundColor="green"
        msg.style.color="black"
        return true
    }
    else if (compchoose==="paper" && userchoice==="scissor") {
        msg.innerText="You won !"
        msg.style.backgroundColor="green"
        msg.style.color="black"
        return true
    }
    else if (compchoose==="scissor" && userchoice==="rock") {
        msg.innerText="You won !"
        msg.style.backgroundColor="green"
        msg.style.color="black"
        return true
    }
    else {
        msg.innerText="You loss !"
        msg.style.backgroundColor="red"
        msg.style.color="white"
        return false
    }
}
let scoreofuser = document.querySelector("#user-count")
let scoreofcomp = document.querySelector("#comp-count")
let scorecount = () => {
    if (userwin===true) {
            userscore++
            console.log("user score = ",userscore )
            scoreofuser.innerText = userscore
    }
    else if(userwin===false) {
        compscore++
        console.log("computer score = ",compscore)
        scoreofcomp.innerText = compscore
    }
}