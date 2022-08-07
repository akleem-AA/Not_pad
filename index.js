let btn = document.getElementById("btn")
const toLocalStoreValue = () => {
    const inputValue = document.querySelectorAll("textarea")
    console.log("save ", inputValue.value)
    let arr = []
    inputValue.forEach((item) => {
        // console.log("foreach", item.value)
        arr.push(item.value)
    })
    console.log("array", arr)

    //store in logcalStore value
    localStorage.setItem("nots", JSON.stringify(arr))

}
function generateDiv(text = "") {
    const crtDiv = document.createElement("div")//create a div
    crtDiv.classList.add("main_div")//add a class inside the div

    //create a html template via using template sting ``
    const htmlEntity = `
                <div class="button">
                <button class="editBtn" >Result</button>
                <button id = "delete">Remove</button>  
                <div>  
                <div class="result ${text ? "" : "hidden"}"></div>
              <textarea id="w3review" class= ${text ? "hidden" : ""}  rows="8" cols="40"></textarea>
        `

    crtDiv.insertAdjacentHTML('afterbegin', htmlEntity)
    // console.log(crtDiv)

    // get Reference for remove crtDiv
    const removeBtn = crtDiv.querySelector("#delete")
    const editBtn = crtDiv.querySelector(".editBtn")
    const textarea = crtDiv.querySelector("textarea")
    const output = crtDiv.querySelector(".result")

    removeBtn.addEventListener("click", () => {
        console.log("remove btn")
        localStorage.removeItem("nots");
        crtDiv.remove()
        toLocalStoreValue()


    })

    editBtn.addEventListener("click", () => {
        console.log("edit")
        output.classList.toggle("hidden");
        textarea.classList.toggle("hidden")
    })

    textarea.addEventListener("change", (event) => {
        const value = event.target.value;
        output.innerHTML = value
        toLocalStoreValue()
    })

    textarea.value = text;
    output.innerHTML = text

    document.body.appendChild(crtDiv)
}


const getLocalStore = JSON.parse(localStorage.getItem("nots"))
console.log("getValue in local ", getLocalStore)
if (getLocalStore) {
    getLocalStore.forEach((nots) => generateDiv(nots))
}

btn.addEventListener("click", () => generateDiv())