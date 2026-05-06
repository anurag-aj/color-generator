let generate = document.querySelector("#btn1")
let copy = document.querySelector("#btn2")
let arr = []
let color =""
generate.addEventListener("click", function (){
    let span = document.querySelector("span")
    let sbox = document.querySelector(".sbox")
    let history = document.querySelector(".history")
    let s = "0123456789ABCDEF"
    color="#"
    let r
    for(let i=0;i<6;i++){
        r=s[Math.floor(Math.random()*16)]
        color +=r
    }
    arr.push(color)
    if(arr.length > 6){
    arr.shift()
}
    span.textContent = color

    sbox.style.backgroundColor = color
    sbox.style.display = "flex"

    history.innerHTML = ""
    for(let i=0;i<6;i++){

    let div = document.createElement("div")
    let previouscolor = document.createElement("span")
    previouscolor.textContent=arr[i]
    div.style.backgroundColor=arr[i]
    div.classList.add("div")
    div.appendChild(previouscolor)
    history.appendChild(div)
    }
    

})
copy.addEventListener("click", function (){
    if(coli!=""){
        navigator.clipboard.writeText(color)
        alert("color copied")}
    })
