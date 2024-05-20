let quotes = [
    {
        name: '-- Oscar Wilde',
        quote : "Be yourself; everyone else is already taken.",
    },
    {
        name:"-- Marilyn Monroe",
        quote:"I'm selfish, impatient and a little insecure. I make mistakes,",
    },
    {
        name: "-- Frank Zappa",
        quote: "So many books, so little time.",
    },
    {
        name:"--Marcus Tullius Cicero",
        quote:"A room without books is like a body without a soul.",
    },
    {
        name:"-- Bernard M. Baruc",
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    },
    {
        name:"-- Dr. Seuss",
        quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    },
    {
        name:"-- Mae West",
        quote:"You only live once, but if you do it right, once is enough.",
    },  
];
function add() {
    let array = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('demo').innerHTML = array.quote;

    document.getElementById('demo1').innerHTML = array.name;
}

