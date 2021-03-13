/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
//### Iteration 4: All rates average
function ratesAverage(arr) {
  if (arr.length === 0) return 0;
  const avrRate =
    arr.reduce((acc, val) => {
      if (!val.rate) val.rate = 0;
      return acc + val.rate;
    }, 0) / arr.length;
  return parseFloat(avrRate.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
// ### Iteration 5: Drama movies
function dramaMoviesRate(array) {
  let dramaWord = 0;
  let sum = array.reduce((accumulator, value) => {
    if (value.genre.includes("Drama")) {
      dramaWord += 1;
      return accumulator + value.rate;
    } else {
      return accumulator;
    }
  }, 0);
  if (!dramaWord) {
    return 0;
  }

  let average = parseFloat((sum / dramaWord).toFixed(2));
  return average;
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
// ### Iteration 1: Order by year
function orderByYear(array) {
  const sortedArray = array.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedArray;
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
// ### Iteration 2: Steven Spielberg. The best?
function howManyMovies(array) {
  const arrayCounter = array.filter(
    item => item.director === "Steven Spielberg" && item.genre.includes("Drama")
  );

  return arrayCounter.length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
// ### Iteration 3: Alphabetic order
function orderAlphabetically(array) {
  let newArray = array
    .map(item => {
      return item.title;
    })
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);

  return newArray;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// ### Iteration 6: Time format
const turnHoursToMinutes = ar => ar.map(movie => {
    let convertedDuration = 0;
    if (movie.duration.includes('h')) {
        convertedDuration += Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60;
    }
    if (movie.duration.includes('min')) {
        convertedDuration += Number(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m')));
    }
    return ({...movie, duration: convertedDuration});       
})

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = ar => {
    if (!ar.length) return null;
    const yearsWithRatedMovies = [...new Set(ar.map(movie => movie.year))];
    const averageRatingsPerYear = [];
    yearsWithRatedMovies.forEach(year => averageRatingsPerYear.push({year,rate: ratesAverage(ar.filter(movie => movie.year === year))}));
    const best = averageRatingsPerYear.sort((a, b) => b.rate - a.rate === 0 ? a.year - b.year : b.rate - a.rate)[0];
    return `The best year was ${best.year} with an average rate of ${best.rate}`;
}
