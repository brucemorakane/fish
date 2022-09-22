var AddHome = document.getElementById('AddHome')
var aboutlist = document.getElementById('aboutlist')
var foodmenu = document.getElementById('foodmenu')
var photo = document.getElementById('photo')
var telephone = document.getElementById('telephone')

var totalscreen = document.getElementById('totalscreen')

screenTop = []

function caculate() {
    totalscreen = 0
        
      // for the loop into showscreen
        for (let bruce = 0; bruce < screenTop.length; [bruce] ) {
          
          total += Number(screenTop[bruce].price);
      
          totalscreen.innerHTML = total
      
        }
        
      }

      function total() {
        totalscreen = document.getElementById('totalscreen')
        screenTop.push(screenTop[i])
      }





