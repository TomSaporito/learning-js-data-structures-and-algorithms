(function(){

  var temp = `
  <h3>
      Stacks
  </h3>
  <button id="stacks-btn" type="button">
    Run Stacks
  </button>

  `;

  appendHTML($('#stacks'), temp, '#stacks-btn', runStacks);

})();

let Stack = (function(){
  const _items = new WeakMap();
  const _count = new WeakMap();
  
  class Stack {
    constructor() {
      _count.set(this, 0);
      _items.set(this, {});
    }
  
    push(element) {
      const items = _items.get(this);
      const count = _count.get(this);
      items[count] = element;
      _count.set(this, count + 1);
    }
  
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      const items = _items.get(this);
      let count = _count.get(this);
      count--;
      _count.set(this, count);
      const result = items[count];
      delete items[count];
      return result;
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      const items = _items.get(this);
      const count = _count.get(this);
      return items[count - 1];
    }
  
    isEmpty() {
      return _count.get(this) === 0;
    }
  
    size() {
      return _count.get(this);
    }
  
    clear() {
      /* while (!this.isEmpty()) {
          this.pop();
        } */
      _count.set(this, 0);
      _items.set(this, {});
    }
  
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      const items = _items.get(this);
      const count = _count.get(this);
      let objString = `${items[0]}`;
      for (let i = 1; i < count; i++) {
        objString = `${objString},${items[i]}`;
      }
      return objString;
    }
  }

  return Stack;
})();

function runStacks(){
  console.warn('START OF STACKS -------');
  var stack = new Stack();
  console.log(stack)
  console.log(stack.isEmpty());
  stack.push(5);
  stack.push(8);
  console.log(stack.peek());
  stack.push(11);
  console.log(stack.size());
  console.log(stack.isEmpty());
  stack.push(15);
  stack.pop();
  stack.pop();
  console.log(stack.size());
  console.log(stack);
  console.warn('END OF STACKS ^^^^^^^');
}