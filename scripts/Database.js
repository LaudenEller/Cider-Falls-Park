const database = {
    guests: [
        { id: 1, firstName: "Bob", lastName: "Sagett" },
        { id: 2, firstName: "Robert", lastName: "Redford" },
        { id: 3, firstName: "Billy", lastName: "The Kid" },
        { id: 4, firstName: "Natasha", lastName: "Khan" },
        { id: 5, firstName: "Victor", lastName: "Roberston" },
        { id: 6, firstName: "Pavel", lastName: "Mena" },
        { id: 7, firstName: "Melanie", lastName: "Hatsworth" },
        { id: 8, firstName: "Elizabeth", lastName: "Johnson" },
        { id: 9, firstName: "Dawn", lastName: "Smith" },
        { id: 10, firstName: "Summer", lastName: "Bell" },
        { id: 11, firstName: "Cloud", lastName: "Lichtenstein" },
        { id: 12, firstName: "Winter", lastName: "Wu" },
        { id: 13, firstName: "Autumn", lastName: "Smith" },
    ],
    parks: [
        { id: 1, title: "Chamfort River" },
        { id: 2, title: "Lost Wolf Hiking Trail" },
        { id: 3, title: "Lodge" },
        { id: 4, title: "Gander River" },
        { id: 5, title: "Campgrounds" },
        { id: 6, title: "Pine Bluff Trails" },
    ],
    services: [
        { id: 1, name: "Rafting" },
        { id: 2, name: "Canoeing" },
        { id: 3, name: "Fishing" },
        { id: 4, name: "Hiking" },
        { id: 5, name: "Picnicing" },
        { id: 6, name: "Rock Climbing" },
        { id: 7, name: "Lodging" },
        { id: 8, name: "Parking" },
        { id: 9, name: "Information" },
        { id: 10, name: "Food Vendors" },
        { id: 11, name: "Zip Lines" },
    ],
    parkServices: [
        { id: 1, parkId: 1, servicesId: 1 },
        { id: 2, parkId: 1, servicesId: 2 },
        { id: 3, parkId: 1, servicesId: 3 },
        { id: 4, parkId: 2, servicesId: 4 },
        { id: 5, parkId: 2, servicesId: 5 },
        { id: 6, parkId: 2, servicesId: 6 },
        { id: 7, parkId: 3, servicesId: 5 },
        { id: 8, parkId: 3, servicesId: 7 },
        { id: 9, parkId: 3, servicesId: 8 },
        { id: 10, parkId: 3, servicesId: 9 },
        { id: 11, parkId: 4, servicesId: 3 },
        { id: 12, parkId: 4, servicesId: 4 },
        { id: 13, parkId: 5, servicesId: 7 },
        { id: 14, parkId: 5, servicesId: 8 },
        { id: 15, parkId: 5, servicesId: 9 },
        { id: 16, parkId: 6, servicesId: 10 },
        { id: 17, parkId: 6, servicesId: 4 },
        { id: 18, parkId: 6, servicesId: 5 },
        { id: 19, parkId: 6, servicesId: 11 },
    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getParks = () => {
    return database.parks.map(park => ({...park}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}