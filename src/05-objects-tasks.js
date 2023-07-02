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

class CssSelectorBuilder {
  constructor() {
    this.elements = [];
    this.combinators = [];
    this.isElementUsed = false;
    this.isIdUsed = false;
    this.isClassUsed = false;
    this.isAttrUsed = false;
    this.isPseudoClassUsed = false;
    this.isPseudoElementUsed = false;
  }

  validateSingleUsage(selectorType) {
    if (selectorType) {
      if (selectorType === 'element' && this.isElementUsed) {
        throw new Error(
          'Element, id, and pseudo-element should not occur more than one time inside the selector',
        );
      }
      if (selectorType === 'id' && this.isIdUsed) {
        throw new Error(
          'Element, id, and pseudo-element should not occur more than one time inside the selector',
        );
      }
      if (selectorType === 'class' && this.isClassUsed) {
        throw new Error(
          'Element, id, and pseudo-element should not occur more than one time inside the selector',
        );
      }
      if (selectorType === 'attr' && this.isAttrUsed) {
        throw new Error(
          'Element, id, and pseudo-element should not occur more than one time inside the selector',
        );
      }
      if (selectorType === 'pseudoClass' && this.isPseudoClassUsed) {
        throw new Error(
          'Element, id, and pseudo-element should not occur more than one time inside the selector',
        );
      }
      if (selectorType === 'pseudoElement' && this.isPseudoElementUsed) {
        throw new Error(
          'Element, id, and pseudo-element should not occur more than one time inside the selector',
        );
      }
    }
  }

  element(value) {
    this.validateSingleUsage('element');
    this.elements.push(value);
    this.isElementUsed = true;
    return this;
  }

  id(value) {
    this.validateSingleUsage('id');
    this.elements.push(`#${value}`);
    this.isIdUsed = true;
    return this;
  }

  class(value) {
    this.validateSingleUsage('class');
    this.elements.push(`.${value}`);
    this.isClassUsed = true;
    return this;
  }

  attr(value) {
    this.validateSingleUsage('attr');
    this.elements.push(`[${value}]`);
    this.isAttrUsed = true;
    return this;
  }

  pseudoClass(value) {
    this.validateSingleUsage('pseudoClass');
    this.elements.push(`:${value}`);
    this.isPseudoClassUsed = true;
    return this;
  }

  pseudoElement(value) {
    this.validateSingleUsage('pseudoElement');
    this.elements.push(`::${value}`);
    this.isPseudoElementUsed = true;
    return this;
  }

  combine(selector1, combinator, selector2) {
    this.combinators.push(`${selector1}${combinator}${selector2}`);
    return this;
  }

  stringify() {
    return `${this.elements.join('')}${this.combinators.join('')}`;
  }
}

const cssSelectorBuilder = new CssSelectorBuilder();

module.exports = {
  cssSelectorBuilder,
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
