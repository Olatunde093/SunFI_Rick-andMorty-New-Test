/// <reference types= "Cypress" />

import Element from "../../../Pages/Element.cy"

const element = new Element

describe('Search by Full First Name', () => {
    it('should return characters matching the full first name', () => {
        element.Visit()
        element.Search().type('Rick Sanchez')

        element.CharacterList().should('contain', 'Rick Sanchez') // The character 'Rick' should be present
        .and('not.contain','Morty') // No characters other than Rick should appear


        //This test case is fundamental to the application since searching
         //for characters is the primary feature. It is a straightforward, repetitive 
         //task that requires consistent validation of results. Automating it ensures that 
         //the search functionality works with every new code update without manual intervention.
    });
  });

  describe('Add Character to Favorites', () => {
    it('should add a character to the favorites list and remove it from the main list', () => {
      element.Visit()

      element.CharacterList().contains('Rick Sanchez').click() // Find the character 'Rick Sanchez'
      element.CharacterList().contains ('Morty Smith').click()// Find the character 'Morty Smith'

      element.CharacterList().should('not.contain','Rick Sanchez') // Rick Sanchez should be removed from the main list
      .and('not.contain','Morty Smith') // Morty Smith should be removed from the main list
     
      element.Favorite().click()
      element.FavoriteList().should('contain','Rick Sanchez')  //Rick Sanchez should be added to favorites
      .and('contain','Morty Smith')  //Morty Smith should be added to favorites
      


      //Adding characters to favorites is a core functionality of the app. 
      //Automating this test case helps ensure that the feature behaves 
      //consistently and correctly, as this functionality involves both the main list
      // and the favorites list, which can be prone to bugs during UI updates.


    });
  });

  describe('Remove Character from Favorites', () => {
    it('should remove a character from the favorites list and add it back to the main list', () => {
      element.Visit()

      element.CharacterList().contains('Rick Sanchez').click() // Find the character 'Rick Sanchez and add to favorite'
      element.CharacterList().contains ('Morty Smith').click()// Find the character 'Morty Smith' and add to favorite

      element.Favorite().click()
      element.FavoriteList().contains('Rick Sanchez').click() //Removing Rick Sanchez from the favorite list
  
      element.FavoriteList().should('not.contain','Rick Sanchez')

      element.List().click()
      element.CharacterList().should('contain','Rick Sanchez')
  



      // This test case is essential for validating the reverse functionality of the favorites feature. 
      // Ensuring that users can easily remove characters from the favorites list is critical to providing
      // a smooth user experience. Automating this prevents regressions when the app is updated.
    });
  });
  
  
  