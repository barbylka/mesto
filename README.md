# The project 'Меsto' (eng. 'The place')

Our planet literally consists of thousands of picturesque areas. Some of them are under the close attention and care of states or international organizations, some are untouched places of natural and climatic zones. Here you can view cards with such places.

## Functions

On this site the user can:

* like the places' cards;
* change the text in the profile lines "name" and "about yourself" or the photo;
* add and delete cards to the project;
* interact with the form without the mouse - the keyboard is enough;
* open any existing or added card for viewing on the full screen.

## Technology stack

* Figma

**Figma**
The ptoject model illustrates the screen resolutions view.

* [The model Figma link](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

1. Implementation of modals as well as the reaction to the "like" via JAVASCRIPT.

2. The Fetch API provides each user's action: 

    * update profile data, 
    * add cards and delete the only users' ones,
    * like / dislike photos.
  Thanks to the study platform server. 

2. JAVASCRIPT live validation is enabled for all input fields in the forms. The submit form button is inactive if at least one of the fields fails the validation.

3. The forms validation and card creation function is performed by classes, the implementation of functionality through the OOP paradigm provides a high speed of loading tasks on the page and the lightness of the site.

4. Webpack is connected. JS minification and translation by JS-babe is configured as well as CSS, images, fonts processing, minification and automatic addition of vendor prefixes.

5. The project is responsive for different screen resolutions due to grids and flexboxes. Also the technology used:
```
@media screen and (max-width: XXXpx) {
  /* some props */
}
```

6. The modals are closed by clicking anywhere outside them and by `Esc`.

7. The file structure is organized according to BEM methodology, which means flexibility in project modification. Each contextual block can be reused if additional information is needed, or deleted without affecting adjacent blocks.

**GitHub Pages Link**

The project is published [here](https://barbylka.github.io/mesto/)

This project is created for a fornt-end training course, thus, any comments on refinement and optimization are welcome!