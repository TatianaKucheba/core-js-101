function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, reject) => {
    if (typeof isPositiveAnswer === 'boolean') {
      if (isPositiveAnswer) {
        resolve('Hooray!!! She said "Yes"!');
      } else {
        resolve('Oh no, she said "No".');
      }
    } else {
      reject(new Error('Wrong parameter is passed! Ask her again.'));
    }
  });
}

function processAllPromises(array) {
  return Promise.all(array);
}

function getFastestPromise(array) {
  return Promise.race(array);
}

function chainPromises(array, action) {
  return new Promise((resolve) => {
    const results = [];
    let index = 0;

    function processNextPromise() {
      if (index >= array.length) {
        resolve(results.reduce(action));
        return;
      }

      const currentPromise = array[index];
      currentPromise
        .then((result) => {
          results.push(result);
          index += 1;
          processNextPromise();
        })
        .catch(() => {
          index += 1;
          processNextPromise();
        });
    }

    processNextPromise();
  });
}

module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
