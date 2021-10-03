let paintColor;
let prevMousePositions;

const script = ( p ) => {
  p.setup = function() {

    // CANVAS
    let container = document.getElementById( "myContainer" );
    let canvas = p.createCanvas( container.offsetWidth, container.offsetHeight );
    canvas.parent( "myContainer" );

    // BACKGROUND
    p.background( 255 );

    // SETUP
    p.noStroke();

    prevMousePositions = [];

    paintColor = "rgba( "+
      Math.round( p.random( 0, 255 ) ) +","+ // Red
      Math.round( p.random( 0, 255 ) ) +","+ // Green
      Math.round( p.random( 0, 255 ) ) +","+ // Blue
      p.random( 0, 1 )+        // Opacity
      ")"
    ;
  };

  p.draw = function() {
    prevMousePositions.push( { x: p.mouseX, y: p.mouseY } );
    for ( let i=0; i<prevMousePositions.length; i++ ) {
      let prevPos = prevMousePositions[ i ];
      p.circle( prevPos.x, prevPos.y, i );
    }

    p.fill( "black" );
    p.textSize( p.width / 12 );
    p.textAlign( p.CENTER, p.CENTER );
    p.text( "Hello World!", p.width/2, p.height/2 );
    
    p.fill( paintColor );
    p.circle( p.mouseX, p.mouseY, 10 );
  };

  p.mouseClicked = function() {
    p.setup();
  };
}

let myp5 = new p5( script, "myContainer" );
