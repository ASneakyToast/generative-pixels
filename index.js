const path = require( "path" );
const express = require( "express" );
const app = express();

app.use( express.static( path.join( __dirname, "public" ) ) );
app.use( "/sketches", express.static( "public/pages" ) );

// ROUTES
// const sketchRouter = require( "./routes/sketches" )( app );

app.get( "/", ( req, res ) => {
  res.sendFile( "${__dirname}/public/index.html" );
});

// SERVER
const port = process.env.PORT || 3333;
const server = app.listen( port, () => {
  console.log( "listening on port: " + port );
});
