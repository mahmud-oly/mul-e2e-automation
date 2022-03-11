/// <reference types = "cypress"/>
/// <reference types="cypress-xpath" />

Cypress. on('uncaught:exception', (err, runnable) => { return false; }); 

// it('google test', function(){

//     cy.visit('https://todomvc.com/examples/vanillajs/')
    
//     cy.get('.input').type('Automacypresstion with {enter}')
    
//     })

describe('multapplied Tests', function () {

    it('Login', function () {

        cy.visit('https://multapplied-staging.w3engineers.com/')
        cy.get('#email')

        .type('israt@w3engineers.com')

        cy.get('#password')

        .type('12345678')
        
        cy.get('.el-button > span')

        .click()
        cy.wait(5000)

    })
    it('policy dropdownopen', function () {
        
        cy.get(':nth-child(5) > .el-submenu > .el-submenu__title > .el-submenu__icon-arrow').click()
        cy.wait(5000)
        cy.get(':nth-child(5) > .el-submenu > .el-menu > :nth-child(3) > :nth-child(1) > a > .el-menu-item > .el-tooltip').click()
        

     })
    it('AddClassificationProfile', function () {
        
        cy.get('a > .el-button')
        .click()
        cy.wait(5000)
        cy.get('.el-form-item__content > .el-input > .el-input__inner').type('iktee')
        // dropdown
        
        cy.get('.el-form-item__content > .space-auto > .dropdown-container > .el-input > .el-input__inner').click()
        cy.wait(5000)
        cy.get('#tree-inner > div.el-tree-node.is-expanded.is-focusable > div.el-tree-node__children > div:nth-child(2)').click()
        cy.get('.el-form-item__content > .el-select > .el-input > .el-input__inner').click()//last dropdown
       cy.get('.el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)').click()//select
       cy.get('.el-button--primary').click()//save button

       

    })
    // it('Classification edit', function () {
        
       
    //     cy.get('body > div > div.main-container > section > div > div.d-flex.sided.flex-sm.mb-10 > div.mb-5.btn-spacing > a:nth-child(1) > button > span > i').click()

    //  })
     it('Classification delete', function () {
        
        cy.get('.delete-btn').click()
        cy.get('.el-button--primary').click()
        cy.get('#pane-generic > .grid-content > .d-flex.mb-10 > .wrap > .search > .el-input > .el-input__inner')
        

     })
     it('Classification Search', function () {
        
        
        cy.get('#pane-generic > .grid-content > .d-flex.mb-10 > .wrap > .search > .el-input > .el-input__inner').type('iktee')
        

     })

  
    
 
})