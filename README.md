# afpwebdesign
Mock website design company that best represents my current skill set and is continually under development.
Notable features & achievements:
  1. Animations when switching AngularJS views to give the impression that the website is scrolling left or right.
  2. 311kb and 2.2 second load time.
  3. First implementation of SASS css preprocessor
  4. Grunt taskrunner setup to auto uglify HTML, CSS and JS, check JS validity, etc.
  
Challenges:
  1. On Chrome Mobile, the ngview transition to slide "About" in from the right was also shifting the header (the header should remain static). All other browsers were fine. To solve this, I changed the animation to slide in from the bottom instead of from the right on small devices (incl. mobile) and also changed this on the "Work" page transition.
  
Need to address:
  1. If a user refreshes the page on work or about, I don't have any functionality yet to ensure the gradient background is set properly.
