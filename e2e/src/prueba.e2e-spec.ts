import {browser, element, by } from 'protractor';
 
describe('Mi Test', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");
    });

    //creación de prueba 1
    it("Prueba 1 ok", ()=>{
        expect(element(by.css(".colorTitulo ion-label")).getText()).toContain("Bienvenid@ a Maipú");
    });  

    //creación de prueba 2
    it("Prueba 2 ok", ()=>{
        expect(element(by.css(".colorletra1 ion-card-titulo")).getText()).toContain("Planifica tu viaje");
    });  
});