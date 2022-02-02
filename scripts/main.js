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
    // Parks is responsible for generating a copy of the current state of parks data
    // Services is responsible for generating a copy of the current state of services data
    // Guests is responsible for generating a copy of the current state of guests data

// What functions should be in which modules?
    // Database should export arrays for parks, services and guests
    // Parks should export HTML representation of parks array
    // Services should export HTML representation of services array
    // Parks should export HTML representation of parks array

// What is the responsibility of each function?
    // getFunctions each need to return an array of their target objects from database
    // moduleFunctions are responsible for generating their HTML uls

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