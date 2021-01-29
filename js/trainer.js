var trainer_1 = {
    nome: 'Gabriel',
    regiao: {
        kanto: {
            vitorias: 0,
            pokemon: [
                { "pokemon-nome": "Charizard", "pokemon-imagem": "/image/006.png" },
                { "pokemon-nome": "Beedrill", "pokemon-imagem": "/image/015.png" },
                { "pokemon-nome": "victreebell", "pokemon-imagem": "/image/071.png" },
                { "pokemon-nome": "Sandslash", "pokemon-imagem": "/image/028.png" },
                { "pokemon-nome": "Vaporeon", "pokemon-imagem": "/image/134.png" },
                { "pokemon-nome": "????", "pokemon-imagem": "/image/000.png" }
            ]
        }
    }
}

var trainer_2 = {
    nome: 'Rafael',
    regiao: {
        kanto: {
            vitorias: 2,
            pokemon: [
                { "pokemon-nome": "Blastoise", "pokemon-imagem": "/image/009.png" },
                { "pokemon-nome": "Raticate", "pokemon-imagem": "/image/020.png" },
                { "pokemon-nome": "Primeape", "pokemon-imagem": "/image/057.png" },
                { "pokemon-nome": "Vulpix", "pokemon-imagem": "/image/037.png" },
                { "pokemon-nome": "????", "pokemon-imagem": "/image/000.png" },
                { "pokemon-nome": "????", "pokemon-imagem": "/image/000.png" }
            ]
        }
    }
}

function kanto() {

    let div_trainers = document.querySelector('.trainers')

    let person_1 = document.createElement('div')
    person_1.setAttribute('class', 'trainer-1')

    let name = document.createElement('h2')
    name.innerText = 'Trainer #1'
    person_1.append(name)

    let div_wins = document.createElement('div')
    div_wins.setAttribute('class', 'win')
    let number_win = document.createElement('p')
    number_win.innerText = 'vitorias ' + trainer_1.regiao.kanto.vitorias
    div_wins.appendChild(number_win)
    person_1.appendChild(div_wins)

    let ul = document.createElement('ul')
    ul.setAttribute('class', 'team-pokemon')

    for (var i = 0; i < 6; i++) {
        let li = document.createElement('li')
        li.setAttribute('class', 'pokemon')
        li.setAttribute('id', '#' + i)

        let image = document.createElement('img')
        image.setAttribute('class', 'image-pokemon')

        let nome_pokemon = document.createElement('p')
        nome_pokemon.setAttribute('class', 'name-pokemon')

        for (var j = 0; j < trainer_1.regiao.kanto.pokemon.length; j++) {
            image.src = trainer_1.regiao.kanto.pokemon[i]['pokemon-imagem']
            nome_pokemon.innerText = trainer_1.regiao.kanto.pokemon[i]['pokemon-nome']
            li.appendChild(image)
            li.appendChild(nome_pokemon)
        }

        ul.appendChild(li)
    }

    person_1.appendChild(ul)
    div_trainers.appendChild(person_1)

    // ----------------------------- 

    let person_2 = document.createElement('div')
    person_2.setAttribute('class', 'trainer-2')

    name = document.createElement('h2')
    name.innerText = 'Trainer #2'
    person_2.append(name)

    div_wins = document.createElement('div')
    div_wins.setAttribute('class', 'win')
    number_win = document.createElement('p')
    number_win.innerText = 'vitorias ' + trainer_2.regiao.kanto.vitorias
    div_wins.appendChild(number_win)
    person_2.appendChild(div_wins)


    ul = document.createElement('ul')
    ul.setAttribute('class', 'team-pokemon')

    for (var i = 0; i < 6; i++) {
        li = document.createElement('li')
        li.setAttribute('class', 'pokemon')
        li.setAttribute('id', '#' + i)

        image = document.createElement('img')
        image.setAttribute('class', 'image-pokemon')

        nome_pokemon = document.createElement('p')
        nome_pokemon.setAttribute('class', 'name-pokemon')

        for (var j = 0; j < trainer_2.regiao.kanto.pokemon.length; j++) {
            image.src = trainer_2.regiao.kanto.pokemon[i]['pokemon-imagem']
            nome_pokemon.innerText = trainer_2.regiao.kanto.pokemon[i]['pokemon-nome']
            li.appendChild(image)
            li.appendChild(nome_pokemon)
        }

        ul.appendChild(li)
    }

    person_2.appendChild(ul)
    div_trainers.appendChild(person_2)
}

