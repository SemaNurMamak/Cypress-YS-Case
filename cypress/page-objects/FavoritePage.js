export function checkFavoriteRestaurantInList (){
    cy.reload()
    const sessionData = cy.getSessionStorage('selectedRestaurantName')
    cy.log('selected restaurant' + sessionData)
    cy.get('.favorite-item>a>span>b')
      .should("contain.text",'sessionData')
}