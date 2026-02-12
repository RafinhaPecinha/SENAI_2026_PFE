    const corpo = document.querySelector('body');
    const titulo = document.querySelector('.titulo')
    const container = document.querySelector('#container')
    const imagem = document.querySelector('#imagem')

    corpo.style.backgroundColor = '#000000'
    corpo.style.color = 'white';
    titulo.textContent = 'Páginazuda zikosa tlgd'
    container.style.width = '94%';
    container.style.margin = '0 auto'
    container.style.backgroundColor = '#030303'
    titulo.style.fontSize = '100px'
    container.style.fontSize = '50px'

    let nome = '<h2>Programação Front-End</h2>'
    container.innerHTML += nome

    imagem.innerHTML = '<img src="https://i.pinimg.com/1200x/0a/c8/bd/0ac8bd26754ce6312a56439acd409840.jpg" alt="Oruam Branco">';

    imagem.style.display = 'flex'
    imagem.style.justifyContent = 'center'

    titulo.style.textAlign = 'center';
    container.style.textAlign = 'center';
