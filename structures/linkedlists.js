(function(){
    var temp = `
    <h3>
        Linked Lists
    </h3>
    <button id="ll-btn" type="button">
        Run Linked Lists
    </button>
    `;


    appendHTML($('#linked-lists'), temp, '#ll-btn', runLists);


})();




let LinkedList = (function(){


// Add your code here

class Node {
    constructor(el){
        this.element = el;
        this.next = null;
    }
}


class LinkedList {
    constructor(){
        
        this.length = 0;
        this.head = null;
    }

    getHead(){
        return this.head;
    }
    
    append(el){
        let node = new Node(el),
        current;
        
        if (this.head == null) {
            this.head = node;
        } else {
            
            current = this.head;
            
            while(current.next){
                current = current.next;
            }
        
            current.next = node;
            
        }
        
        this.length++;
    }
    
    insert(position, element){
        //check for out of bounds values
        if (position >= 0 && position <= this.length){
            let node = new Node(element),
            current = this.head,
            previous,
            index = 0;

            if (position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            this.length++;

            return true;

        } else {
            return false;
        }
    }
    
    removeAt(position){
        if (position > -1 && position < this.length) {
            let current = this.head,
            previous,
            index = 0;
            
            if (position === 0){
                this.head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                
                previous.next = current.next;
            }
            
            this.length--;
            
            return current.element;
        } else {
            return null;
        }
        
    }


    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    
    indexOf(element){
        let current = this.head,
        index = 0;

        while(current) {
            if (element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    
    isEmpty(){
        return this.length === 0;
    }
    
    size(){
        return this.length;
    }
    
    toString(){
        let current = this.head,
        string = '';

        while (current) {
            string += current.element + (current.next? '\n' : '');
            current = current.next;
        }

        return string;
    }
    
}

    return LinkedList;

})();


class DoubleNode{
    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    insert(position, element){
        //check for out of bounds values
        if (position >= 0 && position <= this.length){
            let node = new DoubleNode(element),
            current = this.head,
            previous,
            index = 0;

            //adding to the head of the linked list
            if (position === 0) {
                //if this list is empty;
                if(!this.head){
                    //this node is the only element in the list
                    this.head = node;
                    this.tail = node;

                } else { //the list is not empty
                    //the set the node to the head;
                    //next in now out head
                    node.next = current;
                    //next prev is then our new head
                    current.prev = node;
                    //the head is now the new node
                    this.head = node;
                }
                
            } else if (position === length){// the node is now the final element in the list
                //change current to the tail
                current = this.tail;
                //the next of the tail is the node
                current.next = node;
                //the prev for the new node is the current
                node.prev = current;
                //now the tail is the node
                this.tail = node;
            } else {
                //loop through the list until we get to the desired position
                while (index++ < position) {
                    //assign the previous to the current el
                    previous = current;
                    //the current is now the next one 
                    current = current.next;
                }
                //stop loop
                //the new nodes next is now the current
                node.next = current;
                //the previous next is the new node
                previous.next = node;
                //the next prev is the new node
                current.prev = node;
                //the new node's prev is the previous
                node.prev = previous;
            }
            this.length++;
            return true;

        } else {
            return false;
        }
    }

    removeAt(position){
        //look for out-of-bounds values
        if (position > -1 && position < this.length) {
            let current = this.head,
            previous,
            index = 0;

            //removing first item
            if (position === 0){
                this.head = current.next;

                //if there is only one item, update tail
                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (position === this.length-1) { //last item
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                //link previous with current's next - skip it
                previous.next = current.next;
                current.next.prev = previous;
            }

            this.length--;
            return current.element;
        } else {
            return null;
        }
    }

    getHead(){
        return this.head;
    }

    size(){
        return this.length;
    }

    isEmpty(){
        this.length === 0;
    }

    toString(){
        let current = this.head,
        string = '';

        while (current) {
            string += current.element + (current.next? '\n' : '');
            current = current.next;
        }

        return string;
    }

    indexOf(element){
        let current = this.head,
        index = 0;

        while(current) {
            if (element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    append(el){
        let node = new DoubleNode(el),
        current;
        
        if (this.head == null) {
            this.head = node;
        } else {
            
            current = this.head;
            
            while(current.next){
                current = current.next;
            }
        
            current.next = node;
            node.prev = current;
            this.tail = node;
            
        }
        
        this.length++;
    }
}


class CircularLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    closeCircle(){
        if (this.length > 0) {
            this.tail.next = this.head;
        }
        return;
    }

    insert(position, element){
        //check for out of bounds values
        if (position >= 0 && position <= this.length){
            let node = new DoubleNode(element),
            current = this.head,
            previous,
            index = 0;

            //adding to the head of the linked list
            if (position === 0) {
                //if this list is empty;
                if(!this.head){
                    //this node is the only element in the list
                    this.head = node;
                    node.prev = node;
                    node.next = node;
                    this.tail = node;

                } else { //the list is not empty
                    //the set the node to the head;
                    //next in now out head
                    node.next = current;
                    //next prev is then our new head
                    current.prev = node;
                    //the head is now the new node
                    this.head = node;
                }
                
            } else if (position === this.length){// the node is now the final element in the list
            
                //change current to the tail
                current = this.tail;
                //the next of the tail is the node
                current.next = node;
                //the prev for the new node is the current
                node.prev = current;

                node.next = this.head;
                //now the tail is the node
                this.tail = node;
            } else {
                //loop through the list until we get to the desired position
                while (index++ < position) {
                    //assign the previous to the current el
                    previous = current;
                    //the current is now the next one 
                    current = current.next;
                }
                //stop loop
                //the new nodes next is now the current
                node.next = current;
                //the previous next is the new node
                previous.next = node;
                //the next prev is the new node
                current.prev = node;
                //the new node's prev is the previous
                node.prev = previous;
            }
            this.length++;
            this.closeCircle();
            return true;

        } else {
            return false;
        }
    }

    removeAt(position){
        //look for out-of-bounds values
        if (position > -1 && position < this.length) {
            let current = this.head,
            previous,
            index = 0;

            //removing first item
            if (position === 0){
                this.head = current.next;

                //if there is only one item, update tail
                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (position === this.length-1) { //last item
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                //link previous with current's next - skip it
                previous.next = current.next;
                current.next.prev = previous;
            }

            this.length--;
            this.closeCircle();
            return current.element;
        } else {
            return null;
        }
    }

    getHead(){
        return this.head;
    }

    size(){
        return this.length;
    }

    isEmpty(){
        this.length === 0;
    }

    toString(){
        let current = this.head,
        string = '';

        while (current) {
            string += current.element + (current.next? '\n' : '');
            current = current.next;
        }

        return string;
    }

    indexOf(element){
        let current = this.head,
        index = 0;

        while(current) {
            if (element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    append(el){
        let node = new DoubleNode(el),
        current;
        
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            
            current = this.head;
            
            while(current.next && current.next != this.head){
                current = current.next;
            }
        
            current.next = node;
            node.prev = current;
            this.tail = node;
            
        }
        
        this.length++;
        this.closeCircle();
    }
}






function runLists(){
    console.warn('START OF LINKED LISTS')
    var t = new LinkedList();

    t.append('tom');
    t.append('maureen');
    t.append('dog');
    t.append('mouse');
    t.append('tail');
    t.append('story');
    console.log(t);

    t.removeAt(1);
    t.insert(1, 'tomato');
    t.insert(1, 'masssss');
    t.append('olosd');
    t.remove('tomato');
    console.log(t.toString());
    console.log(t.getHead());
    console.log(t.size());
    console.log(t.isEmpty());

    console.log(t);
    console.log(t.toString());
    console.log(t.indexOf('tail'));
    console.log(t.indexOf('maureen'));
    t.remove('tail');
    console.log(t);

    console.log(`t is empty?  ${t.isEmpty()}.  The size of it is ${t.size()}`);
    console.log(`the Head element is ${t.getHead().element}`);
    console.warn('END OF LINKED LISTS ^^^^^^');

    console.warn('START OF DOUBLY LINKED LISTS vvvv');
    var d = new DoublyLinkedList();
    d.append('Thomas');
    d.append('Maureen');
    d.append('Puppy');
    console.log(d);
    console.log(d.indexOf('Puppy'));
    d.insert(1, 'Lion');
    console.log(d);
    d.removeAt(3);
    console.log(d);
    console.warn('END OF DOUBLY LINKED LISTS ^^^^^');

    console.warn('START OF CIRCULAR LIST vvvvv');
    var cc = new CircularLinkedList();
    console.log(cc);
    cc.append('Tom');
    cc.append('Maureen');
    cc.append('Puppy');
    cc.append('Robot');
    cc.insert(4, 'Doctor');
    console.log(cc);
    console.warn('END OF CIRCULAR LIST ^^^^^');

}

