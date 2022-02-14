import { closeJokerPopUpIfDisplayed } from "./HomePage";

function getRandomInt(min, max){      
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

export function selectRandomRestaurant(){
    cy.reload()
    
    let restaurantName = ""

    cy.get(".restaurant-display-name").within((listing) => {
        const randomNumber = getRandomInt(0, listing.length-1)
        const randomRestaurant = cy.get('a').eq(randomNumber)

        randomRestaurant
        .invoke('removeAttr', 'target')
        .click()
        .then(($link) => {
        restaurantName = $link.text().toString()
        cy.log('restaurant Name :' + restaurantName)
        cy.setSessionStorage('selectedRestaurantName', restaurantName)
    })

    const sessionData = cy.getSessionStorage('selectedRestaurantName')
    cy.log('selected restaurant' + sessionData)
  })
}