import LinkValido from "./LinkValido.js"

function extraiLinks(argumento) {

    const links = argumento.map((objetoLink) => Object.values(objetoLink))

    return links

}

async function checaStatus(listaLinks) {

    const status = await Promise.all(

        listaLinks.map(async (url) => {

            const response = await fetch(url)

            return response.status

        })

    )

    return status

}


async function listaLinks(argumento) {

    const lista = extraiLinks(argumento)

    const status = await checaStatus(lista)

    const links = []

    for (let i=0; i<status.length; i++){

        const linkValido = new LinkValido(...lista[i],status[i])

        links.push(linkValido)

    }

    return links

}


export default listaLinks;