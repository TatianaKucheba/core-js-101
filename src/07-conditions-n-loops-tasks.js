function getFizzBuzz(num) {
  let res = '';
  if (!(num % 5)) {
    if (!(num % 3)) {
      res = 'FizzBuzz';
    } else {
      res = 'Buzz';
    }
  } else if (!(num % 3)) {
    res = 'Fizz';
  } else {
    res = `${num}`;
  }
  return res;
}

function getFactorial(n) {
  return n !== 1 ? n * getFactorial(n - 1) : 1;
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  const x = rect1.left + rect1.width;
  const y = rect1.top + rect1.height;
  return x > rect2.left && y > rect2.top;
}

function isInsideCircle(circle, point) {
  return (
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2
    < circle.radius ** 2
  );
}

function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const arr = [a, b].sort((x, y) => x - y);
  const bracketStart = isStartIncluded ? '[' : '(';
  const bracketEnd = isEndIncluded ? ']' : ')';
  return `${bracketStart}${arr[0]}, ${arr[1]}${bracketEnd}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  return `${num}`.split('').reverse().join('') * 1;
}

function isCreditCardNumber(ccn) {
  const arrCNN = [...`${ccn}`].map(Number).reverse();
  const result = arrCNN.reduce((acc, item, index) => {
    const res = index % 2 ? item * 2 : item;
    return res > 9 ? acc + (res - 9) : acc + res;
  }, 0);
  return result % 10 === 0;
}

function getDigitalRoot(num) {
  const arrNum = [...`${num}`].map(Number);
  const res = arrNum.reduce((acc, item) => acc + item, 0);
  return res > 9 ? getDigitalRoot(res) : res;
}

function isBracketsBalanced(str) {
  const [open, close] = [
    ['[', '(', '{', '<'],
    [']', ')', '}', '>'],
  ];
  const res = [];
  for (let i = 0; i < str.length; i += 1) {
    if (open.includes(str[i])) {
      res.push(str[i]);
    }
    if (close.includes(str[i])) {
      if (res.pop() !== open[close.indexOf(str[i])]) {
        return false;
      }
    }
  }
  return res.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
  const arrPathes = pathes.map((item) => item.split('/'));
  const res = [];
  for (let x = 0; x < arrPathes[0].length; x += 1) {
    if (x > 0 && res.length === 0) {
      return '';
    }
    res.push(arrPathes[0][x]);
    for (let y = 0; y < arrPathes.length; y += 1) {
      if (res[x] !== arrPathes[y][x]) {
        res.pop();
        break;
      }
    }
  }
  return `${res.join('/')}/`;
}

function getMatrixProduct(m1, m2) {
  const res = [];
  m1.forEach((itemM1, indexM1) => {
    res.push([]);
    m2[0].forEach((itemM2, indexM2) => {
      res[indexM1][indexM2] = 0;
      for (let i = 0; i < m1[0].length; i += 1) {
        res[indexM1][indexM2] += m1[indexM1][i] * m2[i][indexM2];
      }
    });
  });
  return res;
}

function evaluateTicTacToePosition(position) {
  const res = [];
  for (let y = 0; y < 3; y += 1) {
    // строки
    res[y] = 0;
    for (let x = 0; x < 3; x += 1) {
      // столбцы
      if (position[y][x] === 'X') res[y] += 1;
      if (position[y][x] === '0') res[y] -= 1;
    }
    if (res[y] === 3) return 'X';
    if (res[y] === -3) return '0';
  }

  for (let x = 0; x < 3; x += 1) {
    // столбцы
    res[x + 3] = 0;
    for (let y = 0; y < 3; y += 1) {
      // строки
      if (position[y][x] === 'X') res[x + 3] += 1;
      if (position[y][x] === '0') res[x + 3] -= 1;
    }
    if (res[x + 3] === 3) return 'X';
    if (res[x + 3] === -3) return '0';
  }

  if (
    position[0][0] === position[1][1]
    && position[1][1] === position[2][2]
    && position[2][2] === 'X'
  ) res[6] = 3;
  if (
    position[0][2] === position[1][1]
    && position[1][1] === position[2][0]
    && position[2][0] === 'X'
  ) res[7] = 3;
  if (
    position[0][0] === position[1][1]
    && position[1][1] === position[2][2]
    && position[2][2] === '0'
  ) res[6] = -3;
  if (
    position[0][2] === position[1][1]
    && position[1][1] === position[2][0]
    && position[2][0] === '0'
  ) res[7] = -3;

  if (res.includes(3)) {
    return 'X';
  }
  if (res.includes(-3)) {
    return '0';
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
