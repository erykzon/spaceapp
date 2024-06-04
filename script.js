const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15"


async function listaImgagenes() {
  try{ 
      let fetchImagenes = await fetch(url)
      let datosImagenes = await fetchImagenes.json()
      const card = document.querySelector("[data-ul]")
    
      datosImagenes.forEach(element => {
      const contenido = `<li class="card">
        <img class="card__image" src="${element.url}" alt="imagen">
        <h3 class="card__title">${element.title}</h3>
        </li>`

        card.innerHTML = card.innerHTML +contenido
      });
  }
  catch(error){console.error(error)}
}

listaImgagenes()




// function listaImgagenes() {
//   fetch(url)
//   .then( response => response.json())
//   .then( datosImagenes =>{
//     console.log(datosImagenes)
//     const card = document.querySelector("[data-ul]")
    
//     datosImagenes.forEach(element => {
//     const contenido = `<li class="card">
//       <img class="card__image" src="${element.url}" alt="imagen">
//       <h3 class="card__title">${element.title}</h3>
//       </li>`

//       card.innerHTML = card.innerHTML +contenido
//     });
  
//   })
//   .catch(error => console.error(error))
// }