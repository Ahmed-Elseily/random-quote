
var textQuote = document.getElementById("quote")
var textAuthor = document.getElementById("quoteOwner")

var quoteArr = [
    {
        quoteText: "“Be yourself; everyone else is already taken.”",
        quoteAuthor: "― Oscar Wilde"
    },
    {
        quoteText: "“So many books, so little time.”",
        quoteAuthor: "― Oscar Wilde"
    },
    {
        quoteText: "“In three words I can sum up everything I've learned about life: it goes on.”",
        quoteAuthor: "― Robert Frost"
    },
    {
        quoteText: "“A room without books is like a body without a soul.”",
        quoteAuthor: "― Marcus Tullius Cicero"
    },
    {
        quoteText: "“If you tell the truth, you don't have to remember anything.”",
        quoteAuthor: "― Mark Twain"
    }

]

function getQuote() {
    var ranNumber = Math.floor(Math.random() * quoteArr.length);

    textQuote.innerHTML = quoteArr[ranNumber].quoteText
    textAuthor.innerHTML = quoteArr[ranNumber].quoteAuthor
}


var user = {
    name: "sdad",
    age: 32,
    wife: {
        name: "Sda"
    }

}
var arr=[user]
console.log(arr[0].wife);