export function selectRegionByValue(restaurantName) {
    cy.get('.col-md-4.form > .select2 > .selection > .select2-selection > .select2-selection__arrow').should('be.visible').click()
    cy.get('.select2-results__option').contains(restaurantName).click()
    cy.wait(5000)
    cy.get('.col-md-1 > .form-control').should('be.visible').click()
    cy.wait(5000)
}

export function navigateFavoritePage (){
    cy.get('.ys-user-info-container').should('be.visible').click()
    cy.get('.ys-userSettings > ul > :nth-child(4) > a').should('be.visible').click()
}

export function closeJokerPopUpIfDisplayed(){
    if(cy.get('#cboxClose').should('be.visible')){
        cy.get('#cboxClose').click()
    }
}