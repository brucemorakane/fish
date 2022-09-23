var AddHome = document.getElementById('AddHome')
var aboutlist = document.getElementById('aboutlist')
var foodmenu = document.getElementById('foodmenu')
var photo = document.getElementById('photo')
var telephone = document.getElementById('telephone')

var totalscreen = document.getElementById('totalscreen')

screentop = []

function caculate() {
    totalscreen = 0
        
      // for the loop into showscreen
        for (let bruce = 0; bruce < screentop.length; [bruce] ) {
          
          total += Number(screentop[bruce].price);
      
          totalscreen.innerHTML = total
      
        }
        
      }

      function totalscreen() {
        totalscreen = document.getElementById('totalscreen')
        screentop.push(screenTop[bruce])
      }

      caculate()
      totalscreen()
      







