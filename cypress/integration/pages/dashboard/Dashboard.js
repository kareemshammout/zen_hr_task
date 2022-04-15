
class Dashboard {


    dashBoardClickLeftSideMenu() {
        cy.xpath(' //a[@class=\'dropdown-menu__collapse top-menu-arrow\']//*[name()=\'svg\']').click()
    }
      selectLogoutFromLeftMenu(){
        cy.xpath('//div[contains(text(),\'Logout\')]').click()
      }

      validateAllDashboardLinks(){

          cy.get("a").each(($hr)=>{
              if($hr.prop('href').length>0){
                  const href = $hr.prop('href')
                  cy.log('href', href)

                  cy.request({
                      url: href,
                      log:true,
                  }).then(response => {
                      cy.log("response status for: " + href + " -> " + response.status)
                  })
              }
          })
      }


}



export default Dashboard