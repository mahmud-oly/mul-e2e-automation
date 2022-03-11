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
        cy.get(':nth-child(5) > .el-submenu > .el-menu > :nth-child(2) > :nth-child(1) > a > .el-menu-item > .el-tooltip').click()
        

     })
    it('AddProfile', function () {
        cy.get('a > .el-button > span').click()
        
      

    })
    it('AddRoutingGroupsMain', function () {
        cy.get('.el-form-item__content > .space-auto > .dropdown-container > .el-input > .el-input__inner').click()
        cy.wait(5000)
        cy.get('#tree-inner > div.el-tree-node.is-expanded.is-focusable > div.el-tree-node__children > div:nth-child(1)').click()

        //addd name
        cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('gtr')

        

      

    })
    it('AddTrafficClass', function () {
       
        cy.get('#tab-traffic > .icons > span').click()
        //comment
        cy.get('.cell > .el-form-item > .el-form-item__content > .el-input > .el-input__inner').type('comment')

        //save button
        cy.get('.el-button--primary').click()
      

    })
    // it('search', function () {
       
    //     cy.get('#pane-generic > .grid-content > .d-flex.mb-10 > .wrap > .search > .el-input > .el-input__inner').type('gtr')
      

    // })
    // it('AddRoutingGroupsMain', function () {
        
    //     cy.get('#tab-aggregator > span').click()
        
    //     cy.get('.right-text > .el-button')

    // })

    //  it('DeleteRoutinggroup', function () {
        
    //     cy.get('.right-text > .el-button').click()
    //     cy.get('.el-message-box__btns > .el-button--primary').click()
    //     cy.get('#pane-generic > .grid-content > .d-flex.mb-10 > .wrap > .search > .el-input > .el-input__inner')
        
    //  })
    //  it('SearchRoutinggroup', function () {
        
    //     cy.get('#pane-generic > .grid-content > .d-flex.mb-10 > .wrap > .search > .el-input > .el-input__inner').type('tara')
        
    //  })

 
 
})