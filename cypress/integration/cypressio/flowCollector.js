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
        cy.get('.el-submenu > .el-menu > :nth-child(4) > :nth-child(1) > a > .el-menu-item > .el-tooltip').click()
        

     })
    it('AddFlowCollector', function () {
        
        cy.get('a.mb-10 > .el-button > span')
        .click()
        cy.wait(5000)
        cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')

    })
    it('AddFlowCollectorInputForm', function () {
        
        cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('teree')//name
        cy.get('#pane-main > .content > .number-field > .el-form-item__content > .el-input-number > .el-input-number__increase').dblclick()//space

        cy.get('#pane-main > .content > .number-field > .el-form-item__content > .el-input-number > .el-input-number__increase').click()

        cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type('8.6.4.3')//ip

        cy.get(':nth-child(5) > .el-form-item__content > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret').click()//dropdown

        cy.get('[style="min-width: 600px; position: absolute; top: 465px; left: 491px; transform-origin: center top; z-index: 2001;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(2) > span').click()//dropdown

         cy.get('.required > .el-form-item__content > .el-select > .el-input > .el-input__inner').click()
         //dropdown last
        cy.get('body > .el-select-dropdown:last-child .el-select-dropdown__item:nth-child(3)').click()
        // cy.get('#idOfSelect option:last-child').click()
    })

     it('FlowcollectorSave', function () {
        
        cy.get('.el-button--primary > span').click()
        
 
        
     })
    //  it('FlowcollectorEdit', function () {
        
    //     cy.get('el-button el-button--default el-button--medium:first-child').click()


        
    //  })
    it('FlowcollectorDelete', function () {
        
        cy.get('.delete-btn > :nth-child(2) > span').click()
        cy.get('.el-button--primary').click()
 
        
     })

   

      it('deletedflowcollectorSearch', function () {
        
        cy.get('#pane-generic > .grid-content > .d-flex.mb-10 > .wrap > .search > .el-input > .el-input__inner').click()
         .type('teree')
       
        
     })
    
 
})