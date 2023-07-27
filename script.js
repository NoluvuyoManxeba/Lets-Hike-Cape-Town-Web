// JavaScript to add an item to the "Save for later" array in local storage
document.addEventListener("DOMContentLoaded", function() {
    var saveForLaterButtons = document.getElementsByClassName("save-for-later-btn");
    
    function handleSaveForLaterClick(event) {
      var itemValue = event.target.parentNode.querySelector("img").src;
      var savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
      
      savedItems.push(itemValue);
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      
      alert("Item added to 'Save for later' folder. You have " + savedItems.length + " items in the folder.");
    }
    
    for (var i = 0; i < saveForLaterButtons.length; i++) {
      saveForLaterButtons[i].addEventListener("click", handleSaveForLaterClick);
    }

  //toggle like button code
  var btn1 = document.querySelector('#green');
  var btn2 = document.querySelector('#red');
  
  btn1.addEventListener('click', function() {
    
      if (btn2.classList.contains('red')) {
        btn2.classList.remove('red');
      } 
    this.classList.toggle('green');
    
  });
  
  btn2.addEventListener('click', function() {
    
      if (btn1.classList.contains('green')) {
        btn1.classList.remove('green');
      } 
    this.classList.toggle('red');
    
  });
  
});