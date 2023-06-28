import React from 'react';

function HomePage() {
    const htmlContent = `
  <!DOCTYPE html>

  <head>
      <!-- HTML stuff you have to do for legacy reasons I think? 
          At this point I'm fairly certain my usage of these lines is basically just superstition 
          but heyo, don't wanna accidentally let any of the bugs in. -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <!-- Site Information. -->
      <title>Queer Calendar Sheffield</title>
      <meta name="description" content="A calendar for queer events happening in the city of Sheffield.">
      <meta name="author" content="">
  
      <meta property="og:title" content="Queer Calendar Sheffield">
      <meta property="og:type" content="website">
      <!--<meta property="og:url" content="">-->
      <meta property="og:description" content="A calendar for queer events happening in the city of Sheffield.">
      <!--<meta property="og:image" content="example-picture.png">-->
  
      <!-- <link rel="icon" href="/favicon.ico"> Legacy Browser Favicon Support. -->
      <!-- <link rel="icon" href="/favicon.svg" type="image/svg+xml">  Modern SVG Favicon. -->
      <!-- <link rel="apple-touch-icon" href="/apple-touch-icon.png"> Support for Apple's Random Bullshit. -->
  
      <!-- Links to external files. -->
      <!-- <link rel="stylesheet" href="styles.css"> -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
      <script type='text/javascript' src='js/calendar.js'></script>
  </head>
  
  <body>
      <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container">
                  <a class="navbar-brand" href="#">Queer Calendar Sheffield</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <!-- <ul class="navbar-nav ml-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="#">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Events</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">About</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Contact</a>
                          </li>
                      </ul> -->
                  </div>
              </div>
          </nav>
      </header>
  
      <main>
          <section id="calendar-events" class="container my-5">
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="event-card-container">
              </div>
          </section>
      </main>
  
  
  
      <footer class="bg-light text-center py-3">
          <div class="container">
              <p><a href="https://github.com/CanopusFalling/Queer-Calendar-Sheffield">view project on github</a></p>
          </div>
      </footer>
  
      <!-- Modals -->
      <div id="event-modal-container">
      </div>
  </body>
  `;

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default HomePage;