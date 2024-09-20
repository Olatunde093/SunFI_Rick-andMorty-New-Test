class Element{

Visit(){
    return cy.visit('https://d28dp6fycxce58.cloudfront.net/')
}
Search(){
    return cy.get('input.forms_defaultInput__3F6Ma')
}
Body(){
    return cy.get ('.container > :nth-child(2)')
}
CharacterList(){
    return cy.get('.CharacterList_root__3dgo- > .utility_textAccent__25rFx')
}
Favorite(){
    return cy.get('[data-test-id="list-Favorites"]')
}
FavoriteList(){
    return cy.get('.CharacterList_root__3dgo-')
}
List(){
    return cy.get('[data-test-id="list-List"]')
}

}
module.exports = Element