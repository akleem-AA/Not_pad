# Not_pad
This is a notepad app in which we can add, update and delete items dynamically. It stores data in the local storage.

# Algorithm
Step:-1 Create a button with id for open a not pad in html by using simple button tag

Step:-2 Generate a function by using addEventlisten with the help of button id exmple `btn.addEvenetListner("click",function())` 

Step:-3 Create a div by using document.createElement("div") and store inside the variable 

Step:-4 if you want to add class inside the div also used `variable.classList.add(className)`

Step:-5 Create a HTML template via using  `template string` also store in variable

Step:-6 `We need to append created div and template string and display both` it's very easy to solve by insertAdjectHTML key word `sytnex insertAdjacentHTML(position, text)`  there we have append a variable with HTML template ... example = ` crtDiv.insertAdjacentHTML'afterbegin', htmlEntity)                         `                    

Step-7 now we can able to display html entity inside the body tag by using simple `document.body.appendClild()` is also append in last index
example :- `document.body.appendChild(crtDiv)`


.....`How can  i store value inside the localStore and how to get value `...

Step:-1 We can use simple get the textarea value and push a blank array by uisng forEach() method

Step:-2 example `const toLocalStoreValue = () => {
    const inputValue = document.querySelectorAll("textarea")
    let arr = []
    inputValue.forEach((item) => {
        arr.push(item.value)
    })
    console.log("array", arr)
    localStorage.setItem("nots", JSON.stringify(arr)) //store in logcalStore value
}` this the example of get value in input box and store in local store

Step-3 simple get value inside the localstore by using JSON.parse(localstore.getItem("keyName"))
example - `const getLocalStore = JSON.parse(localStorage.getItem("nots"))`



