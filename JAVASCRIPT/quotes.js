//Random quotes generator

const heading = document.createElement("h1")
heading.innerText = "RANDOM QUOTE GENERATOR TASK"
heading.style.color="yellow"
heading.style.textAlign="center"

document.body.prepend(heading)

let data = fetch("https://type.fit/api/quotes", {
    method: "GET"
}).then((quotedata) => {
   return quotedata.json()
    .then((quotes) => {
       return quotes
    })
})
console.log(data)



function showQuoteData(words) {
    let sentences = ``
    var sentencebody = document.getElementById("letters")
    for (i = 0; i < words.length; i++) {
        sentences += `
        <h3 class="quote">${words[i].text}</h3>
        <h6 class="author">${words[i].author}</h6>
        `
        sentencebody.innerHTML = sentences
        console.log(sentencebody)
    }
}

var kotebtn=document.getElementById("kotes")
kotebtn.addEventListener("click",function(){
data.then((quotes)=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    showQuoteData([randomQuote])
})
})



