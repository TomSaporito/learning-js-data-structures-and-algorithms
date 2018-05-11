(function(){
    var temp = `
    <h3>
        Linked Lists
    </h3>
    <button id="ll-btn" type="button">
        Run Linked Lists
    </button>
    `;


    appendHTML($('#linked-lists'), temp, '#ll-btn', runLists)


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
            
            length--;
            
            return current.element;
        } else {
            return null;
        }
        
    }

    remove(){
        
    }
    
    indexOf(){
        
    }
    
    isEmpty(){
        
    }
    
    size(){
        
    }
    
    toString(){
        
    }
    
    print(){
        
    }
    
}

    return LinkedList;

})();

function runLists(){
    console.warn('START OF LINKED LISTS')
    var t = new LinkedList();

    t.append('tom');
    t.append('maureen');
    t.append('dog');
    console.log(t);

    t.removeAt(1);

    console.log(t);

    console.warn('END OF LINKED LISTS ^^^^^^');

}

