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

    remove(el){
        let index = this.indexOf(el);
        return this.removeAt(index);
    }
    
    indexOf(elSearch){
        let current = this.head,
        index = 0;
        
        while(current) {
            if(elSearch === current.element){
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
     
     while (current){
         string += current.element + (current.next ? '\n' : '');
         current = current.next;
     }

     return string;

    }
    
    // print(){
        
    // }
    
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

    console.log(t);
    console.log(t.toString());
    console.log(t.indexOf('tail'));
    console.log(t.indexOf('maureen'));
    t.remove('tail');
    console.log(t);

    console.log(`t is empty?  ${t.isEmpty()}.  The size of it is ${t.size()}`);
    console.log(`the Head element is ${t.getHead().element}`);
    console.warn('END OF LINKED LISTS ^^^^^^');

}

