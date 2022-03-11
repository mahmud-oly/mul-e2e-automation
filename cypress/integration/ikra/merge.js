/// <reference types="cypress" />
describe('Protcol Testing', function () {
    it('Landing on space', function(){
        cy.visit('https://multapplied-staging.w3engineers.com/login?redirect=%2F')
        cy.get('#email').type('tasnim@w3engineers.com')
        cy.get('#password').type('user123')
        cy.get('.el-button > span').click()
        cy.get('.myBtn > :nth-child(4) > :nth-child(1) > a > .el-menu-item > .el-tooltip').click()
        cy.wait(22000)
        cy.get(':nth-child(3) > [style="padding-left: 40px;"] > .d-flex',{timeout:10000}).click()
    })
    it('Landing on IPs', function(){
        cy.wait(14000)
        cy.get('#tab-ips').click()
    })
    it('First allocation', function(){
        cy.get('.d-flex > .el-button').click()
        cy.wait(10000)  
        cy.get('.el-form-item__content > .el-input > .el-input__inner').type('255.255.254.0')
        cy.get('.el-form-item__content > .el-select > .el-input > .el-input__inner',{timeout:10000}).click()
        cy.get('.el-scrollbar__view > :nth-child(1) > span').click()      
        //cy.get('.el-scrollbar__view > :nth-child(2)').click()
        cy.get('.el-button--primary').click()
    })
    it('Delegation on First', function(){
        cy.wait(18000)
        cy.xpath('/html/body/div/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[6]/td[5]/div/div/div[1]/input').within(() => 
        {cy.xpath('/html/body/div/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[6]/td[5]/div/div/div[1]/input')}).click()
        cy.wait(10000)
        cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[1]/span').within(() => 
        {cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[1]/span')}).click()
        cy.wait(12000)
        cy.xpath('/html/body/div/div[2]/section/div/div/div[2]/form/div[1]/div/div/div[2]/div/div/input').within(() => 
        {cy.xpath('/html/body/div/div[2]/section/div/div/div[2]/form/div[1]/div/div/div[2]/div/div/input')}).type('255.255.254.0/32')
        cy.wait(2000)
        cy.xpath('/html/body/div/div[2]/section/div/div/div[2]/form/div[1]/div/div/div[3]/div/div/div/div/input').within(() => 
        {cy.xpath('/html/body/div/div[2]/section/div/div/div[2]/form/div[1]/div/div/div[3]/div/div/div/div/input')}).click()
        cy.wait(8000)
        cy.xpath('/html/body/div/div[2]/section/div/div/div[2]/form/div[1]/div/div/div[3]/div/div/div/div[2]/div/div/div/div[1]/div[1]/span[2]').within(() => 
        {cy.xpath('/html/body/div/div[2]/section/div/div/div[2]/form/div[1]/div/div/div[3]/div/div/div/div[2]/div/div/div/div[1]/div[1]/span[2]')}).click()
        cy.get('.el-button--primary > span').click()
    })
    it('Second allocation', function(){
        cy.wait(8000)
        cy.get('.d-flex > .el-button').click()
        cy.wait(8000)  
        cy.get('.el-form-item__content > .el-input > .el-input__inner').type('255.255.254.1')
        cy.get('.el-form-item__content > .el-select > .el-input > .el-input__inner',{timeout:10000}).click()
        cy.get('.el-scrollbar__view > :nth-child(2) > span').click()      
        //cy.get('.el-scrollbar__view > :nth-child(2)').click()
        cy.get('.el-button--primary').click()
    })
    it('Merge', function(){
        cy.wait(16000)
        cy.xpath('/html/body/div/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[6]/td[5]/div/div/div[1]/input').within(() => 
        {cy.xpath('/html/body/div/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[6]/td[5]/div/div/div[1]/input')}).click()
        cy.wait(8000)
        cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[2]/span').within(() => 
        {cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[2]/span')}).click()
        cy.wait(12000)
        cy.xpath('/html/body/div/div[2]/section/div/div/div[2]/form/div[2]/button/span').within(() => 
        {cy.xpath('/html/body/div/div[2]/section/div/div/div[2]/form/div[2]/button/span')}).click()
        cy.wait(2000)
    })
    it('Delete merge', function(){
        cy.wait(12000)
        cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[6]/td[3]/div/div/div/div/div[1]/input').within(() => 
        {cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[6]/td[3]/div/div/div/div/div[1]/input')}).click()
        cy.wait(8000)
        cy.xpath('/html/body/div[4]/div[1]/div[1]/ul/li[3]/span').within(() => 
        {cy.xpath('/html/body/div[4]/div[1]/div[1]/ul/li[3]/span')}).click()
        cy.xpath('/html/body/div[4]/div/div[3]/button[2]/span').within(() => 
        {cy.xpath('/html/body/div[4]/div/div[3]/button[2]/span')}).click()

        cy.wait(12000)
        cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[6]/td[5]/div/div/div/input').within(() => 
        {cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[6]/td[5]/div/div/div/input')}).click()
        cy.wait(8000)
        cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[4]/span').within(() => 
        {cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[4]/span')}).click()
        cy.xpath('/html/body/div[3]/div/div[3]/button[2]/span').within(() => 
        {cy.xpath('/html/body/div[3]/div/div[3]/button[2]/span')}).click()
        

    })
})