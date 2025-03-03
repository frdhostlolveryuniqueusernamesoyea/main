

    fetch('https://frdomains.site/pages/warning.html')
      .then(response => response.text())
      .then(data => {
        //document.getElementById('warning').innerHTML = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });




//document.getElementById('navbrae').innerHTML = navbar;

document.getElementById('copyright').innerText = '© 2025 FrDomains. All rights reserved.'
