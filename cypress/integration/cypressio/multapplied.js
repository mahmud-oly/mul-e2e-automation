/// <reference types = "cypress"/>

Cypress. on('uncaught:exception', (err, runnable) => { return false; }); 

// it('google test', function(){

//     cy.visit('https://todomvc.com/examples/vanillajs/')
    
//     cy.get('.input').type('Automacypresstion with {enter}')
    
//     })

describe('multapplied Tests', function () {

    it('Login', function () {

        cy.visit('https://multapplied-staging.w3engineers.com/')
        cy.get('#email')

        .type('rakib@w3engineers.com')

        cy.get('#password')

        .type('11v&EhWkF&')
        
        cy.get('.el-button > span')

        .click()
        cy.wait(5000)

    })
    it('policy dropdownopen', function () {
        
        cy.get(':nth-child(5) > .el-submenu > .el-submenu__title > .el-submenu__icon-arrow').click()
        cy.wait(5000)
        cy.get(':nth-child(5) > :nth-child(1) > a > .el-menu-item > .el-tooltip > .menu-text').click()
        

     })
    it('AddProvider', function () {
        
        cy.get('a > .el-button > span')
        .click()
        cy.wait(5000)

    })
     it('providerSearch', function () {
        
        cy.get('#mobileProviderSearch').click()
        .type('t')
       
        
    })
    it('providerSearchselect', function () {
        
        cy.get('.el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(8)').click()
        
        
    })


    it('ProfileUsename', function () {
        
        cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner')
        .type('test')
        
    })
    it('Profilepassword', function () {
        
        cy.get('.mb-10 > .el-form-item__content > .el-input > .el-input__inner').type('test')
        
    })
    it('Providersave', function () {
        
        cy.get('.el-button--primary > span').click()
        cy.get(':nth-child(2) > .el-breadcrumb__inner > .no-redirect')
        
    })
    it('DeleteMobileprovider', function () {
        
        cy.get('.el-button--danger').click()
       

        
        
    })
    it('DeleteMobileproviderpoup', function () {
        
        
        cy.get('.el-button--primary').click()

        
        
    })
    it('searchMobileprovider', function () {
        
        cy.get('#pane-generic > .grid-content > .d-flex.mb-10 > .wrap > .search > .el-input > .el-input__inner').type('Lebara')
        cy.wait(8000)
        
        
      
        
    })
 
})
// "projectId": "71skxr"


// describe('multapplied Search', function () {
   
//     it('searchMobileprovider', function () {
        
//         cy.get('#pane-generic > .grid-content > .d-flex.mb-10 > .wrap > .search > .el-input > .el-input__inner').click()
//         cy.wait(8000)
//         .type('Djuice')
        
        
//     })

// })
// describe('multapplied Logout', function () {

//     it('logoutdropdown', function () {
        
//         cy.get('.avatar-wrapper > .svg-icon').click()
//         cy.wait(5000)
        

//     })

//     it('logout', function () {


//         cy.get('.avatar-wrapper').click()   
//         cy.xpath('/html/body/ul/li[2]/a').within(() => {cy.xpath('/html/body/ul/li[2]/a')}).click()  
        
//      })
         
// })

// ?########### extra section#########
 // it('hosts', function () {

    //     cy.get(':nth-child(2) > .el-submenu > .el-submenu__title > .el-submenu__icon-arrow')

    //     .click()
    //     cy.wait(5000)

    // })
    // it('aggregators', function () {

    //     cy.get(':nth-child(2) > .el-submenu > .el-menu > :nth-child(1) > :nth-child(1) > a > .el-menu-item > .el-tooltip')

    //     .click()
    //     cy.wait(5000)

    // })
    // it('private wan routers', function () {

    //     cy.get(':nth-child(2) > .el-submenu > .el-menu > :nth-child(2) > :nth-child(1) > a > .el-menu-item > .el-tooltip > .menu-text')

    //     .click()
    //     cy.wait(5000)

    // })

     // it('ProfileName', function () {
        
    //     cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')

        
    //     .type('GP')
    //     // cy.get('.el-form-item__content > .space-auto > .dropdown-container > .el-input > .el-input__inner')

    // })
    // it('ProfileSpace', function () {
        
        
    //     cy.get('.el-form-item__content > .space-auto > .dropdown-container > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret')
        
    //     cy.wait(8000)
    // })
    // it('ProfileAPN', function () {
        
    //     cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
    //     .type('test')
        
    // })
 
