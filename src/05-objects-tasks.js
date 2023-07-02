function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  function getArea() {
    return this.width * this.height;
  }

  this.getArea = getArea;
}

function getJSON(obj) {
  return JSON.stringify(obj);
}

function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  return Object.assign(Object.create(proto), obj);
}

const cssSelectorBuilder = {
  selectors: '',
  currentElement: null,
  noDuplicateElement: [1, 2, 6],

  addSelector(value, el) {
    this.checkOrder(el);
    this.checkUnique(el);
    const nextSelector = Object.create(cssSelectorBuilder);
    nextSelector.selectors = `${this.selectors}${value}`;
    nextSelector.currentElement = el;
    return nextSelector;
  },
  checkOrder(el) {
    if (this.currentElement > el) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }
  },
  checkUnique(el) {
    if (this.noDuplicateElement.includes(el) && el === this.currentElement) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
  },
  element(value) {
    return this.addSelector(value, 1);
  },
  id(value) {
    return this.addSelector(`#${value}`, 2);
  },
  class(value) {
    return this.addSelector(`.${value}`, 3);
  },
  attr(value) {
    return this.addSelector(`[${value}]`, 4);
  },
  pseudoClass(value) {
    return this.addSelector(`:${value}`, 5);
  },
  pseudoElement(value) {
    return this.addSelector(`::${value}`, 6);
  },
  combine(selectorsGroup1, combinator, selectorsGroup2) {
    return this.addSelector(
      `${selectorsGroup1.selectors} ${combinator} ${selectorsGroup2.selectors}`,
    );
  },
  stringify() {
    return this.selectors;
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
