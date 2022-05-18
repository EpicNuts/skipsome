/// <reference types="cypress" />

// Welcome to Cypress!

describe('automate the leapsome survey', () => {
  it('too easy', () => {
    cy.visit(Cypress.env('url'))

    cy.contains("Let's go").click() 

    cy.get('.tw-text-sm > .notranslate')
      .then((count) => {
        let pages = +count.text().slice(4)
        return pages
      })
      .then((pages) => {
        var i = 1
      
        while ( i <= pages ) {
          cy.get(`.tw-text-sm > :nth-child(${Math.floor(Math.random() * 3) + 8})`).click()
          if ( pages == 1 ) {
            break
          } else if ( i == pages ) {
            break
          }
          cy.contains('Confirm').click()
          i++
        }
      })
      .then(() => {
        cy.contains('Finish & Submit').click()
      })
  })
})
