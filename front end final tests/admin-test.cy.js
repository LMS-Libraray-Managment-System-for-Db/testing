describe('Login Test', () => {
  it('should login with valid credentials', () => {
    
    cy.visit('http://localhost:3000');
    cy.wait(1000);
    cy.visit('http://localhost:3000/login');
    

    
    cy.get('input[name="email"]').should('be.visible');

    
    cy.get('input[name="email"]').type('fathy0101548528@gmail.com');
    cy.get('input[name="password"]').type('12345678');
    cy.get('button[type="submit"]').click();
    cy.wait(10000);
    cy.get('.btn_theme').click();


    
   cy.get('label[for="sidebar-0"]').click();
   cy.wait(2000);
   cy.get(':nth-child(3) > .item').click();
   cy.wait(2000);
   cy.get(':nth-child(4) > .item').click();
   cy.wait(2000);
   cy.get(':nth-child(5) > .item').click();
   cy.wait(2000);

   cy.get(':nth-child(4) > .item').click();
   cy.get('.container').scrollTo(0,1500);
   cy.wait(1000);
   cy.get(':nth-child(10) > :nth-child(3) > .btn-danger').click();
   cy.wait(1000);
   cy.get('.container').scrollTo(0,0);
   cy.wait(4000);
   cy.get('[style="display: flex; justify-content: space-between;"] > button').click();
   cy.wait(3000);



   cy.get(':nth-child(3) > .item').click();
   cy.wait(1000);
   cy.get('form > :nth-child(2) > label').click();
   cy.get('form > :nth-child(3) > label').click();
   cy.get(':nth-child(6) > label').click();

   cy.get(':nth-child(2) > .field_form > .field_input > input').type('wrightnathaniel');
   cy.wait(1000);
   cy.get(':nth-child(3) > .field_form > .field_input > input').type('wrightnathaniel@gmail.com');
   cy.wait(1000);
   cy.get('#rolepatron').click();
   cy.wait(1000);
   cy.get('.submit_form > .btn').click();
   cy.wait(2000);
   cy.get('.btn-info').click();
   cy.wait(5000);

   cy.get(':nth-child(5) > .item').click();
   cy.wait(2000);
   cy.get('#username').click();
   cy.get('#username').type('automated-user3');
   cy.get(':nth-child(2) > :nth-child(2) > label').click();
   cy.get('#email').click();
   cy.get('#email').type('automated-user3@gmail.com');
   cy.get('#password').click();
   cy.get('#password').type('automatedpoulapass');
   cy.get(':nth-child(5) > :nth-child(2) > label').click();
   cy.get('.btn').click();
   cy.wait(5000);

   cy.get(':nth-child(3) > .item').click();
   cy.wait(1000);
   cy.get('form > :nth-child(2) > label').click();
   cy.get('form > :nth-child(3) > label').click();
   cy.get(':nth-child(6) > label').click();

   cy.get(':nth-child(2) > .field_form > .field_input > input').type('automated-user3');
   cy.wait(1000);
   cy.get(':nth-child(3) > .field_form > .field_input > input').type('automated-user3@gmail.com');
   cy.wait(1000);
   cy.get('#rolepatron').click();
   cy.wait(1000);
   cy.get('.submit_form > .btn').click();
   cy.wait(2000);
   cy.get('.btn-info').click();
   cy.wait(5000);
  });
});
