async function fetch_data(){

    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data  = await response.json()
    console.log(data)
    
    
    for(let i=0; i<data.length ; i++){
    
    
        const main  = document.getElementById('main')
    const div = document.createElement('div')
    const span = document.createElement('span')
    const h2 = document.createElement('h2')
    
    span.innerText= data[i].userId
    h2.innerText= data[i].title
    div.classList.add('card')
    div.append(span,h2)
    
    
    main.append(div)
    
    
    
    }
    
    
    }
    
    fetch_data()