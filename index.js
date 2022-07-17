const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3551347042msh445bc35cc16e888p1dbce4jsn6086b56572a2',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};cs 
    async function getData(){
        const response = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
        const dataAsync = await response.json();
         let allData = dataAsync.d;
         allData.forEach(data =>{
            // console.log(data);
           
        const image = data.i.imageUrl
        const title = data.l
        const actors = data.s
        console.log(image);
        console.log(title);
        console.log(actors);

        const container = document.getElementById('container')

        container.innerHTML = `
        <h1 class="name">${title}</h1>
        <small class="actor"> ${actors}</small>
        <img src="${image}" alt="Image">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam aut aspernatur.</p>`

         })
         
    }
    getData()
  





  

  



