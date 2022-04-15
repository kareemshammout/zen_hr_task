import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignInPage from "../../integration/pages/signInPage/SignInPage";
import Dashboard from "../../integration/pages/dashboard/Dashboard";


const signInPage = new SignInPage();
const dashBoard = new Dashboard();

Given('User navigate to {string}', (path) => {
    cy.visit(path);
});

Then('user validate sign-in page', () => {
    signInPage.verifySignInPage()
});

When('user is logged in using {string} and {string}', (user,pass) => {
   signInPage.userLoggedIn(user,pass)
});
Then('user signed in successfully', () => {
    signInPage.userSignedInSuccessfully()
});
When('user click on left-side menu', () => {
      dashBoard.dashBoardClickLeftSideMenu()
});
When('user click on left-side menu', () => {
    dashBoard.dashBoardClickLeftSideMenu()
});
Then('user is logged out', () => {
    dashBoard.selectLogoutFromLeftMenu()
    signInPage.userSignedOutSuccessfully()
});

When('user validate all links are not broken', () => {
      dashBoard.validateAllDashboardLinks()
});