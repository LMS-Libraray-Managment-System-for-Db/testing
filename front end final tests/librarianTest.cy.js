describe('Login Test', () => {
  it('should login with valid credentials', () => {
    
    cy.visit('http://localhost:3000');
    cy.wait(1000);
    cy.visit('http://localhost:3000/login');
    

    
    cy.get('input[name="email"]').should('be.visible');

    
    cy.get('input[name="email"]').type('kamal@gmail.com');
    cy.get('input[name="password"]').type('fathykamal1234');

    
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
    
   cy.get('label[for="sidebar-0"]').click();
   cy.wait(2000);
   cy.get('label[for="sidebar-4"]').click();
   cy.wait(2000);
   cy.get('label[for="sidebar-5"]').click();
   cy.wait(2000);
   cy.get('label[for="sidebar-6"]').click();
   cy.wait(2000);
   cy.get('label[for="sidebar-7"]').click();
   cy.wait(2000);
   cy.get('label[for="sidebar-8"]').click();
   cy.wait(2000);
   cy.get('label[for="sidebar-9"]').click();
   cy.wait(2000);
   cy.get('label[for="sidebar-0"]').click();
   cy.get('div[class="container"]').scrollTo(0,694);
   cy.wait(1000);
   cy.get('div[class="container"]').scrollTo(0,1000);
   cy.wait(1000);
   cy.get('div[class="container"]').scrollTo(0,1500);
   cy.wait(1000);

    
    cy.get('label[for="sidebar-8"]').click();
    cy.wait(2000);


    cy.get('input[id="type"]').click();
    cy.get('input[id="typefiction"]').should('be.visible');
    cy.get('input[id="typefiction"]').click();
    cy.wait(1000);
    cy.get('div[class="container"]').scrollTo(0,200);
    cy.get('button[type="submit"]').click();
    cy.wait(7000);
    cy.get('input[id="type"]').click();
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
    cy.get('div[class="container"]').scrollTo(0,0);
    cy.get('#author').click();
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="text"]').type('F. Scott Fitzgerald');
    cy.get('div[class="container"]').scrollTo(0,200);
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
    cy.get('#author').click();
    cy.wait(2000);

    cy.get('div[class="container"]').scrollTo(0,0);
    cy.get('input[id="isbn"]').click();
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="text"]').type('9780743273565');
    cy.get('div[class="container"]').scrollTo(0,200);
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
    cy.get('input[id="isbn"]').click();
    cy.get('div[class="container"]').scrollTo(0,200);
    cy.get('button[type="submit"]').click();
    cy.wait(1000);


    cy.get('div[class="container"]').scrollTo(0,0);
    cy.get('#title').click();
    cy.get('#author').click();
    cy.get('#isbn').click();

    cy.get(':nth-child(2) > .field_form > .field_input > input').type("the dark days of collage");
    cy.get(':nth-child(3) > .field_form > .field_input > input').type("PoulaGfouad");
    cy.get(':nth-child(4) > .field_form > .field_input > input').type("9780743271122");
    cy.get('div[class="container"]').scrollTo(0,200);
    cy.get('button[type="submit"]').click();

    cy.wait(2000);

    cy.get(':nth-child(6) > .item').click();
    cy.wait(1000);
    cy.get('#title').type("automation_book test3");
    cy.wait(1000);
    cy.get('#author').type("PoulaGfouad");
    cy.wait(1000);
    cy.get('#isbn').type("9780743271122");
    cy.wait(1000);
    cy.get('#typenon-fiction').click();
    cy.wait(1000);
    cy.get(':nth-child(5) > .field_input > label').type("50");
    cy.wait(1000);
    cy.get(':nth-child(6) > .field_input > label').type("40");
    cy.wait(1000);
    cy.get('#item').click();
    cy.wait(1000);
    cy.get('.context_menu').should('be.visible');
    cy.wait(1000);
    cy.get('.context_menu > ul > :nth-child(8)').click();
    cy.wait(1000);
    cy.get('.submit_form > .btn').click();
    cy.wait(1000);

    cy.get('label[for="sidebar-8"]').click();
    cy.wait(2000);
    cy.get('#author').click();
    cy.get('.field_input > input').type("PoulaGfouad");
    cy.get('button[type="submit"]').click();
    cy.wait(4000);
   


    cy.get(':nth-child(8) > .item').click();
    cy.get('.field_input').select("Borrow_request");
    cy.wait(2000);
    cy.get('.field_input').select("Borrowed");
    cy.wait(2000);

    cy.get('.mini-nav > ul > :nth-child(2) > label').click();
    cy.get('.field_input').select("Pending");
    cy.wait(2000);
    cy.get('.field_input').select("Confirmed");
    cy.wait(2000);
    cy.get('.field_input').select("Expired");
    cy.wait(2000);

    cy.get('.mini-nav > ul > :nth-child(3) > label').click();
    cy.get('.field_input').select("Returned");
    cy.wait(2000);
    cy.get('.field_input').select("Borrowed");
    cy.wait(2000);

    cy.get('label[for="sidebar-0"]').click();
  });
});

