let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #18583F;'>|</span>",
});
 
typewriter
  .pauseFor(3000)
  .typeString('<span style="color: #18583F;">¡HAZ TU MEJOR REGALO!</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();