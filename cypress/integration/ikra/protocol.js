/// <reference types="cypress" />
describe('Protcol Testing', function () {
    it('Dashboard arrival', function(){
        cy.visit('https://multapplied-staging.w3engineers.com/login?redirect=%2F')
        cy.get('#email').type('tasnim@w3engineers.com')
        cy.get('#password').type('user123')
        cy.get('.el-button > span').click()
        
    })
    it('Landing on Space', function(){
        cy.get('.myBtn > :nth-child(4) > :nth-child(1) > a > .el-menu-item > .el-tooltip > .menu-text').click()
        cy.wait(16000)
        //cy.get(':nth-child(2) > [style="padding-left: 40px;"] > .d-flex > :nth-child(1)')
        cy.get(':nth-child(2) > [style="padding-left: 40px;"] > .d-flex',{timeout:10000}).click()  
    })
    it('Arrive Protocol from private WAN', function(){
        cy.wait(8000)
        //cy.get('.navbar').scrollIntoView()
        cy.get('#tab-wan').click()
        cy.get('#tab-protocol').click()
    })
    it('Success Message popup after adding Protocol', function(){
        cy.get('#pane-protocol > .d-flex > a.mb-10 > .el-button').click()
        cy.get('.el-form-item__content > .el-input > .el-input__inner').type('Test4')
        cy.get('.cb-sibling > .el-form-item__content > .el-select > .el-input > .el-input__inner',{timeout:10000}).click()
        cy.wait(5000)
        //cy.xpath("//li[@class='el-select-dropdown__item hover']")
        cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[2]').within(() => {cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[2]')}).click()
        cy.get('#tab-bgpTab').click()
        cy.get('.required > .el-form-item__content > .el-input > .el-input__inner').type('45')
        cy.get(':nth-child(1) > :nth-child(2) > .form-wrapper > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('105.153.111.79')
        cy.get(':nth-child(2) > .form-wrapper > :nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type('58')
        cy.get('.el-button--primary').click()
        //cy.get('cy.get('.closable-alert')').click();

        cy.on('.closable-alert', (text) => {
        expect(text).to.contains('Saved');
    });
    })   
    it('Validate the newly added protocol from protocol table', function(){
        //cy.get('.back-btn').click()   
        //cy.get('.back-btn').click()
        cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[1]/div[1]/span/div').within(() => {cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[1]/div[1]/span/div')}).click()
        cy.wait(15000)
        cy.xpath('/html/body/div[1]/div[2]/section/div/div/div[1]/div/span/div').within(() => {cy.xpath('/html/body/div[1]/div[2]/section/div/div/div[1]/div/span/div')}).click()
        cy.get('#tab-protocol',{timeout:10000}).click()
        cy.on(':nth-child(12) > .el-table_13_column_94 > .cell > .link > span', (text) => {
            expect(text).to.contains('Test4');
            
          });
    })
    it('BGP protocol validation', function(){
        cy.on(':nth-child(12) > .el-table_13_column_96', (text) => {
            expect(text).to.contains('BGP');
            
          });
    })
})