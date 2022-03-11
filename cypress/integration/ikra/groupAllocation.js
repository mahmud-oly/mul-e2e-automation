/// <reference types="cypress" />
describe('Group allocation Testing', function () {
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
        cy.wait(10000)
        cy.get('#tab-ips').click()
    })
    it('Add allocation', function(){
        cy.get('.d-flex > .el-button').click()
        cy.wait(6000)  
        cy.get('.el-form-item__content > .el-input > .el-input__inner').type('254.255.252.0')
        cy.get('.el-form-item__content > .el-select > .el-input > .el-input__inner',{timeout:10000}).click()
        cy.get('.el-scrollbar__view > :nth-child(1) > span').click()      
        cy.get('.el-scrollbar__view > :nth-child(2)').click()
        cy.get('.el-button--primary').click()
    })
   
    it('Edit allocation', function(){
        cy.get(26000)
        cy.xpath('/html/body/div/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[3]/td[5]/div/div/div[1]/input').within(() => 
        {cy.xpath('/html/body/div/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[3]/td[5]/div/div/div[1]/input')}).click()
        //cy.get(':nth-child(3) > .el-table_4_column_29 > .cell > .el-select > .el-input > .el-input__inner').click()
        cy.get('body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li:nth-child(2)').click()
        cy.get(16000)
        cy.get('body > div > div.main-container > section > div > div > div.form-wrapper > form > div.el-card.is-none-shadow > div > div > div.el-form-item.mb-10.el-form-item--medium > div > div > div.el-select__tags > span > span:nth-child(2) > i').click()
        cy.get('.el-button--primary').click()
    })
    it('delegation', function(){
        cy.wait(16000)
        cy.get(':nth-child(3) > .el-table_6_column_39 > .cell > .el-select > .el-input > .el-input__inner').click()
        
        cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[1]').within(() => 
        {cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[1]')}).click()
        cy.wait(8000)
        cy.get('.is-required > .el-form-item__content > .el-input > .el-input__inner').type('254.255.252.0/32')
        cy.get('.el-form-item__content > .space-auto > .dropdown-container > .el-input > .el-input__inner').click()
        cy.wait(16000)
        cy.get('#ta11').click()
        cy.get('.el-button--primary').click()
        cy.wait(10000)

    })
    it('edit delegation', function(){
        cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[3]/td[3]/div/div/div/div/div[1]/input').within(() => 
        {cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[3]/td[3]/div/div/div/div/div[1]/input')}).click()
        cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[1]').within(() => 
        {cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[1]')}).click()
        cy.wait(10000)
        cy.get('.is-success > .el-form-item__content > .el-input > .el-input__inner',{timeout:10000}).clear()
        cy.wait(6000)
        cy.get('.is-error > .el-form-item__content > .el-input > .el-input__inner').type('254.255.252.0')
        cy.get('.el-button--primary').click()
    })
    it('delete delegation', function(){
        cy.wait(16000)
        cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[3]/td[3]/div/div/div/div/div/input').within(() => 
        {cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[3]/td[3]/div/div/div/div/div/input')}).click()
        cy.wait(12000)
        cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[3]/span').within(() => 
        {cy.xpath('/html/body/div[2]/div[1]/div[1]/ul/li[3]/span')}).click()
        cy.wait(10000)
        cy.xpath('/html/body/div[3]/div/div[3]/button[2]').within(() => 
        {cy.xpath('/html/body/div[3]/div/div[3]/button[2]')}).click()
    })
    it('delete allocation', function(){
        cy.wait(14000)
        cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[3]/td[5]/div/div/div[1]/input').within(() => 
                {cy.xpath('/html/body/div[1]/div[2]/section/div[2]/div/div[3]/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[3]/table/tbody/tr[3]/td[5]/div/div/div[1]/input')}).click()
        cy.wait(10000)
        cy.xpath('/html/body/div[3]/div[1]/div[1]/ul/li[3]/span').within(() => 
                {cy.xpath('/html/body/div[3]/div[1]/div[1]/ul/li[3]/span')}).click()
        cy.wait(10000)
        cy.xpath('/html/body/div[3]/div/div[3]/button[2]/span').within(() => 
                {cy.xpath('/html/body/div[3]/div/div[3]/button[2]/span')}).click() 
    })

})