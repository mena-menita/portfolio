let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Business Intelligence and Innovation')
  .pauseFor(2000)
  .deleteChars(10)
  .start();
