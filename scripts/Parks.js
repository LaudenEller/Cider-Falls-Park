import  { getParks } from "./Database"

const parks = getParks()

export const Parks = () => {
    let html = "<div>"

    for (const park of parks) {
        html += `<h3 id="park--${park.id}">${park.title}</h3>
        <div id="park--${parkServices.id}">${park.}
    }

    html += "</ul>"

    return html
}