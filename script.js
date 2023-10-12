const quotes = [{
    quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
    person : "Nelson Mandela"
},
{
    quote : "The way to get started is to quit talking and begin doing.", 
    person : "Walt Disney"
}, 
{
    quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.", 
    person : "Steve Jobs"
}, 
{

    quote : "The future belongs to those who believe in the beauty of their dreams.", 
    person : "Eleanor Roosevelt"
}, {
    quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", 
    person : "Oprah Winfrey"
}, {
    quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    person : "James Cameron "
}, 
{
    quote : "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one", 
    person : "John Lennon "
},
{
    quote : "You must be the change you wish to see in the world", 
    person : "Mahatma Gandhi"
},
{
    quote : "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person : "Mother Teresa"
}, {
    quote : "The only thing we have to fear is fear itself.",
    person : "Franklin D. Roosevelt"
}];

const btn = document.querySelector(".newBtn");
const quote = document.querySelector(".text_area");
const personName = document.querySelector(".person_name");

btn.addEventListener("click", () => {
   let index = Math.floor(Math.random() * quotes.length);

   quote.innerText = quotes[index].quote;
   personName.innerText = quotes[index].person;
})