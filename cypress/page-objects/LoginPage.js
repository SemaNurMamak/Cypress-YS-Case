export function navigate() {
    cy.visit('https://www.yemeksepeti.com') 
    cy.setCookie("splashViewed", "true")
    cy.setCookie("banabiPopoverShown","1") 
}

export function closeCookie() {
    cy.setCookie("splashViewed", "true")
    cy.setCookie("banabiPopoverShown","1") 
}

export function successLogin() {
    cy.get('[data-catalog="TR_ISTANBUL"] > .cityContainer > .plateNo').click()
    cy.fixture('data').then((data) => {
        cy.get('#UserName').type(data.mailAddress)
        cy.get('#password').type(data.password)
      })
    cy.get('#ys-fastlogin-button').click()
}

export function login(username , password){
    cy.get('[data-catalog="TR_ISTANBUL"] > .cityContainer > .plateNo').click()

    if (username == null) {
        if (password ==null) {
            cy.get('#ys-fastlogin-button').click()
        } else {
            cy.get('#password').type(password)
            cy.get('#ys-fastlogin-button').click()
        }     
    } else {
        cy.get('#UserName').type(username)
        if (password ==null) {
            cy.get('#ys-fastlogin-button').click()
        } else {
            cy.get('#password').type(password)
            cy.get('#ys-fastlogin-button').click()
        }
    }
}

export function errorMessageControl(expectedMessage) {
    cy.get('.ys-xl > strong').should('have.text' , expectedMessage )
}

export function wrongUsernameMessageControl(expectedMessage) {
    cy.get(':nth-child(1) > div > .help-block').should('have.text' , expectedMessage )
}

export function wrongPasswordMessageControl(expectedMessage) {
    cy.get(':nth-child(2) > div > .help-block').should('have.text' , expectedMessage )
}