// converted html to js to have the same function as what was previously in the html file
const catBreeds = [
    {
      name: "Norwegian Forest Cat",
      description: "A large, sturdy cat with a thick coat and a love for climbing.",
      image: "images/breeds/Norwegian_Forest_Cat.jpg"
    },
    {
      name: "Maine Coon",
      description: "One of the largest domesticated cat breeds, known for its friendly nature.",
      image: "images/breeds/Maine_Coon.jpg"
    },
    {
      name: "Siamese",
      description: "A sleek, elegant breed with striking blue eyes and a distinctive voice.",
      image: "images/breeds/Siamese_Cat.jpg"
    },
    {
      name: "Persian",
      description: "Known for its long, luxurious coat and calm, affectionate demeanor.",
      image: "images/breeds/Persian_Cat.jpg"
    },
    {
      name: "Sphynx",
      description: "A hairless cat breed with a curious and energetic personality.",
      image: "images/breeds/Sphynx_Cat.jpg"
    },
    {
      name: "Bengal",
      description: "Recognized for its wild appearance and energetic, playful nature.",
      image: "images/breeds/Bengal_Cat.jpg"
    }
  ];
  
  const breedsContainer = document.getElementById('cat-breeds');
  
  catBreeds.forEach(breed => {
    breedsContainer.innerHTML += `
      <div class="breed">
          <img src="${breed.image}" alt="${breed.name}">
          <h3>${breed.name}</h3>
          <p>${breed.description}</p>
      </div>
    `;
  });
  