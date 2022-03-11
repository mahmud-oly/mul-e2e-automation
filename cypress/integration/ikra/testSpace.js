/// <reference types="cypress" />
describe('Space check', function () {
    it('Add new child', function(){
        cy.visit('https://multapplied-staging.w3engineers.com/login?redirect=%2F')
        cy.get('#email').type('tasnim@w3engineers.com')
        cy.get('#password').type('user123')
        cy.get('.el-button > span').click()
        cy.wait(10000)
        cy.get('.myBtn > :nth-child(4) > :nth-child(1) > a > .el-menu-item',{timeout:10000}).click() 
        cy.wait(18000)
        cy.get('[href="/spaces/ik1/add-child"] > .svg-icon').click() 
        cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('child1')
        //let r = (Math.random() + 1).toString(2).substring(3);
        
        cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type('ik95')
        cy.get('.el-button').click()
        cy.wait(8000)
        cy.get('.back-btn').click()  
    })
    it('Edit', function(){
        cy.wait(18000)
        cy.get('.d-flex > div > [href="/spaces/ik95/edit"]',{timeout:10000}).click()
        cy.wait(18000)
        cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner',{timeout:10000}).type('new')
        cy.get('.submit-btn-wrapper > .el-button').click()
        cy.wait(4000)
        //cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div[1]/div[1]/span/div').within(() => {cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div[1]/div[1]/span/div')}).click()
        cy.get('.back-btn').click()
        
     })
     it('Delete', function(){
        cy.wait(16000)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .el-tree-node__content > .d-flex').click()
        cy.wait(4000)
        cy.get('.el-button--danger').click()
        cy.get('.el-message-box__btns > .el-button--primary').click()
     }) 
     
})

