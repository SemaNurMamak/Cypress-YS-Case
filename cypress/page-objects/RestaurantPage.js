import { closeJokerPopUpIfDisplayed } from "./HomePage"

export function addFavoriteSelectedRestaurant(){
    cy.reload()
    closeJokerPopUpIfDisplayed()
    cy.get('.social-button.favorite-button.add.active').should('exist').click()
}