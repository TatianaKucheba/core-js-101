function getComposition(f, g) {
  return (x) => f(g(x));
}

function getPowerFunction(exponent) {
  return (x) => x ** exponent;
}

function getPolynom(...args) {
  const argArray = [...args];
  if (argArray.length === 0) return null;
  return (x) => argArray.reduce(
    (acc, item, index, arr) => acc + item * x ** (arr.length - 1 - index),
    0,
  );
}

function memoize(func) {
  const prev = func();
  return () => prev;
}

function retry(func, attempts) {
  return () => {
    try {
      return func();
    } catch (err) {
      return retry(func, attempts - 1)();
    }
  };
}

function logger(func, logFunc) {
  return (...args) => {
    const argStr = JSON.stringify(args).slice(1, -1);
    logFunc(`${func.name}(${argStr}) starts`);
    const res = func(...args);
    logFunc(`${func.name}(${argStr}) ends`);
    return res;
  };
}

function partialUsingArguments(fn, ...args1) {
  return (...args) => fn(...args1, ...args);
}

function getIdGeneratorFunction(startFrom) {
  let counter = startFrom - 1;
  return () => {
    counter += 1;
    return counter;
  };
}

module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
