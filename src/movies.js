// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArr = movies.map(function(eachMovie) {
    return eachMovie.director;
  });
  return directorsArr;
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(movie => movie.director.includes('Spielberg') && movie.genre.includes('Drama'));
  return spielbergMovies.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const averageScore = movies.map(eachMovie => eachMovie.score).reduce((accumulator , currentValue) => accumulator + currentValue);
    return Number((averageScore / movies.length).toFixed(2));
  }
};

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.filter(movie => movie.genre.includes('Drama')).lenght === 0) {
    return 0;
  } else { 
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama')).map(eachMovie => eachMovie.score);
    const averageDrama = dramaMovies.reduce((accumulator , currentValue) => accumulator + currentValue);
    return Number((averageDrama / dramaMovies.length).toFixed(2));
  }
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesByYear = movies.sort((previousMovie, currentMovie) => {
    if (previousMovie.year > currentMovie.year) {
      return 1;
    } else if (previousMovie.year < currentMovie.year) {
      return -1;
    } else if (previousMovie.title > currentMovie.title) {
      return 1;
    } else if (previousMovie.title < currentMovie.title) {
      return -1;
    } else {
      return 0;
    }
  })
  return moviesByYear;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesByTitle = movies.sort((previousMovie, currentMovie) => {
    if (previousMovie.title > currentMovie.title) {
      return 1;
    } else if (previousMovie.title < currentMovie.title) {
      return -1;
    } else {
      return 0;
    }
  })
  twentyByTitle = (moviesByTitle.slice(0, 20)).map(eachMovie => eachMovie.title);
  return twentyByTitle;
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
  const moviesInMinutes = 1
}
//  movies[0].duration;

// console.log(stringToTime(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
