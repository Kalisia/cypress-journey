describe('cadastro', () => {
  it('cadastro', () => {
    cy.visit('https://adopet-tau.vercel.app/');
    cy.get('[href="/cadastro"]').click();
    cy.get('#name').type('Adda Silva');
    cy.get('#email').type('adda.silva@mail.com');
    cy.get('#pass-create').type('Adda123456');
    cy.get('#pass-confirm').type('Adda123456');
    cy.get('button').click();
  })
})