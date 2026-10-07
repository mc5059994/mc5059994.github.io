$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(350, 575, 350, 25);
createPlatform(350, 400, 175, 20);

createPlatform(1050, 300, 125,50 );
createPlatform(700, 450, 500, 50);

createPlatform(0, 600, 175, 100);



    // TODO 3 - Create Collectables
createCollectable("grace", 350, 370);
createCollectable("grace", 700, 420);
createCollectable("grace", 1000, 250);




    
    // TODO 4 - Create Cannons
createCannon("top", 500, 3000);
createCannon("right", 350, 5000);
createCannon("top", 1050, 5030);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
