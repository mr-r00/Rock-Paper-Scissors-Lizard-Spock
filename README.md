# Rock, Paper, Scissors, Lizard, Spock

Rock, Paper< scissors, Lizard, Spock is a site that hopes to demonstrate JavaScript in a realworld setting. The site is aimed towards fans of the popular show, The Big Bang Theory, where the game originated. The website is a fully responsive game where the player can play against a computer.

## Features

The game included 5 buttons, each a seperate option for the player to choose from. When the player has selected their option the computer will otput a random option to counter. The result line shows the outcome of the game from the 2 options.

_Diagram for outcomes_
!diagram (assets/images/rock-paper-scissors-lizard-spock.png)
A simple diagram to show the player all the possible outcomes for each option.

_game zone_
The game zone is contained in an area of blue to be easily differenciated from the other elements of the page.

### Features to impliment in future

- Add a score tracker 
- Make the buttons custom icons
- Add a player vs player system with keybinds to select options

## Testing 

The game produces random outcomes each time, and with no bias as to which option it picks. All the buttons produce the right outcome for the player side, and the correct result is shown for every winning & loosing combination. The game works at multiple window sizes, witht eh only gripe being the button size on potentially older or smaller devices, less than 400px.

### Validation Testing

 - No errors were returned when passing through the official [W3C validator]
 - 2  parse errors were returned when passing through the official [(Jigsaw) validator]
 - No errors were found when passing through the official [Jshint validator]
     - The following metrics were returned:
     - There are 4 functions in this file.
     - Function with the largest signature take 1 arguments, while the median is 0.
     - Largest function has 7 statements in it, while the median is 3.5.
     - The most complex function has a cyclomatic complexity value of 17 while the median is 3.5.

### unfixed bugs 

The 2 errors shown in the Jigsaw validator have not been fixed, they don't seem to affect the usability of the site, but are still present.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

  ## credits

  - A video tutorial from Bro Code was used for guidance and a base for the JS link: [https://youtu.be/n1_vHArDBRA?si=zDZ4-cnIBWEFsTvR]

  ## content 

  - The text and the diagram were taken from the wiki page for the show it is from, The Big Bang Theory. Link: [https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock]
