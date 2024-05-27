console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        const container = document.getElementById('dog-image-container');
        images.forEach(imageUrl => {
          const img = document.createElement('img');

          img.src = imageUrl;
          container.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching dog images:', error));
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const breedList = document.getElementById('dog-breeds');
  
    breedList.addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change color to blue (or any color you prefer)
      }
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const breedList = document.getElementById('dog-breeds');
    const dropdown = document.getElementById('breed-dropdown');
  
    dropdown.addEventListener('change', function () {
      const selectedLetter = dropdown.value;
      const breeds = breedList.getElementsByTagName('li');
      Array.from(breeds).forEach(breed => {
        if (breed.textContent.startsWith(selectedLetter)) {
          breed.style.display = 'block';
          window.location.reload()
        } else {
          breed.style.display = 'none';
        }
      });
    });
  });
  