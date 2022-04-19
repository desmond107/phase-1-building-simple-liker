// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!
let errorBar = document.querySelector("div#modal")
let errorMsg = document.querySelector("p#modal-message")


let likeHearts = document.querySelectorAll("span.like-glyph")

likeHearts.forEach(heart => {
  
  heart.addEventListener("click", () => {
    if (heart.innerText === EMPTY_HEART) {
      
      mimicServerCall()
        .then(resp => {
          
          console.log(resp)
        
          heart.innerText = FULL_HEART
          heart.classList.add("activated-heart")
        })
        .catch(err => {
          
          errorMsg.innerText = err
          errorBar.classList.remove("hidden")

          setTimeout(() =>{
            errorMsg.innerText = "Error!"
            errorBar.classList.add("hidden")
          }, 3000)
          
        })
    } else {
      
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
  })
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
