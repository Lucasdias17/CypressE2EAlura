describe('Testes de API AluraPic', () => {
    it('Dadod API login', () => {
        cy.request({
            method: 'POST',
            url: 'https://alurapic-api.onrender.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(24)
        })
    });
    it('Fotos do usuario', () => {
        cy.request({
            method: 'GET',
            url: 'https://alurapic-api.onrender.com/lucasdias/photos',
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('testes1')
        })
    });
    it.only('Fotos do usuario simulando flaky tests ', () => {
        const tempoEspera = Math.random() * 10;

        cy.request({
            method: 'GET',
            url: 'https://alurapic-api.onrender.com/lucasdias/photos',
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('testes1')
            expect(res.duration).to.be.lte(tempoEspera)
        })
    });
});