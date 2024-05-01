describe('test suite biblioteca', () => {
    it('Adicionar livro', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('#id_username').type('Joaquim')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.btn').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('teste 2')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('.card-title').invoke('text').should('have.string', 'Guardiola Confidencial')
    })
    it('Entrar no livro', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('#id_username').type('Joaquim')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('.col-md-8 > [href="/mainapp/biblioteca/"]').click()
    })
    it('Editar livro', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('#id_username').type('Joaquim')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('#edit').click()
        cy.get('#titulo').clear()
        cy.get('#titulo').type('Carlo Ancelotti: Liderança tranquila')
        cy.get('#autor').clear()
        cy.get('#autor').type('Carlo Ancelotti')
        cy.get('#anopublicado').clear()
        cy.get('#anopublicado').type('2018')
        cy.get('#genero').select('teste 1')
        cy.get('#status_leitura').select('Lido')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('#edit').click()
        cy.get('#status_leitura').select('Não Lido')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('.card-title').invoke('text').should('have.string', 'Carlo Ancelotti: Liderança tranquila')
    })
    it('Excluir livro', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('#id_username').type('Joaquim')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('.col-md-8 > .btn-danger').click()
        cy.get('form > .btn').click()
    })
    it('Add 2 livros com mesmo nome', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('#id_username').type('Joaquim')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.btn').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('teste 2')
        cy.get('.btn').click()
        cy.get('.btn').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('teste 2')
        cy.get('.btn').click()
        cy.get('#titulo').type('Carlo Ancelotti: Liderança tranquila')
        cy.get('#autor').type('Carlo Ancelotti')
        cy.get('#anopublicado').type('2018')
        cy.get('#genero').select('teste 1')
        cy.get('.btn').click()
        //x = cy.contains('[href="/mainapp/biblioteca/livro//').invoke('attr', 'id')
        cy.get('[href="/mainapp/biblioteca/livro/114/"]').click()
        cy.get('.col-md-8 > .btn-danger').click()
        cy.get('form > .btn').click()
        cy.get('.list-group-item').click()
        cy.get('.col-md-8 > .btn-danger').click()
        cy.get('form > .btn').click()
    })
  })