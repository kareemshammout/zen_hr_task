

class SignInPage {

    verifySignInPage(){
        cy.xpath('//h2[normalize-space()=\'Log in to your ZenHR account\']')
        cy.xpath('//p[@class=\'accent\']').contains('Please enter your email and password:')
        cy.get('input[name=\'user[login]\']').should("exist")
        cy.get('input[name=\'user[password]\']').should("exist")
        cy.get('button[type=\'submit\']').should("exist")
        cy.xpath('//span[normalize-space()=\'Sign in with Google\']')
        cy.get('#microsoft-register').contains("Sign in with Microsoft")
    }

    userLoggedIn(user,pass){
        cy.window().then((wind) =>{

            wind.eval('document.getElementById(\'header\').remove();')
        })
        cy.get('input[name=\'user[login]\']').type(user)
        cy.get('input[name=\'user[password]\']').type(pass)
        cy.get('button[type=\'submit\']').click()
    }
    userSignedInSuccessfully(){
        cy.url(Cypress.config().baseUrl+'/en/dashboard')
        cy.xpath('//label[normalize-space()=\'Your Time Off Balance\']')
    }
    userSignedOutSuccessfully(){
        cy.xpath('//ul[@class=\'navbar-nav nav\']//a[@class=\'nav-link nav-bold-link\'][normalize-space()=\'Log in\']')
    }
}

export default SignInPage
