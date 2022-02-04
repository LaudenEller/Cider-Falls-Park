const mainContainer = document.querySelector("#container")

const HTMLString = `
        <header class="header">
            <h1>Cider Falls Park</h1>
            <div><img src="pic_trulli.jpg" alt="Italian Trulli"></div>
            </header>

        <article class="parks">
            <H2>Park Areas</H2>
            <section class="parks container">
            ${Parks}
            </section>
            </article>
            
            <article class="guests container">
            <h2>Guests</h2>
            <section class="guests info">
            ${Guests}
            </section>
            </article>

            <footer class="footer">
            <div class="email">Info@ciderfallspark.com</div>
            <div class="address">123 Cider Falls Way Cider Falls, CA 90049</div>
            <div class="number">999-999-9999"</div>
            </footer>
    `

mainContainer.innerHTML = HTMLString

// What are the main resources (i.e. tables)? Design your ERD first.
    // Services, guests, parks

// What are the properties of each resource?
    // See ERD

// What is the relationship between the resources? If it's many-to-many, what additional data must you design in your ERD?
    // See ERD

// Which modules should you create?
    // Database, Main, Index, Styles, Parks, Services, Guests,

// What is the responsibility of each module?
    // Database is responsible for storing source data
    // Main is responsible for generating innerHTML
    // Index is responsible for rendering HTML from Main
    // Styles is responsible for setting CSS factors
    // Parks is responsible for building and exporting a copy of the current state of parks data, and displaying the services that are available in each park
    // Services is responsible for building and exporting a copy of the current state of services data
    // Guests is responsible for building and exporting a copy of the current state of guests data

// What functions should be in which modules?
    // Database should export arrays for parks, services and guests
    // Parks should export HTML representation of parks array
    // Services should export HTML representation of services array
    // Parks should export HTML representation of parks array

// What is the responsibility of each function?
    // getFunctions each need to return an array of their target objects from database
    // moduleFunctions are responsible for generating HTML representation of thier objectArrays

// What should each function return?
    // getFunctions should return an array
    // moduleFunctions should return a string of HTML

// What is the spcific algorithm for each function? Does the function need parameters? Should it return something?
    // export getFunctions without parameters
        // return a copy of target array from the database
    // export moduleFunctions without parameters
        // save html ul string to new variable
        // iterate the imported target array from database
            // add html li string that displays the data properties
        // add html ul closing tag string
        // return html string