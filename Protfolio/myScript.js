


const toggleSwitch = document.querySelector('#toggle-switch');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

window.onload = function() {
    setTimeout(function() {
      document.querySelector('.text-part1').style.opacity = 1;
    }, 1000); // After 1 second
  
    setTimeout(function() {
      document.querySelector('.text-part2').style.opacity = 1;
    }, 1900); // After 2 seconds
  
    setTimeout(function() {
      document.querySelector('.text-part3').style.opacity = 1;
    }, 3000); // After 3 seconds
  };
  

  var icons = document.querySelectorAll('.home-icons a');



  
    
    
    




  
  
  
  
  
  






  






