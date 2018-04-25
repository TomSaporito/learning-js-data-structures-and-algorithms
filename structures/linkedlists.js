(function(){


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
    
    insert(){
        
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

var t = new LinkedList();

t.append('tom');
t.append('maureen');
t.append('dog');
console.log(t);

t.removeAt(1);

console.log(t);











    function appendHTML(){
        $('#linked-lists').append(`
        <h2>
            Linked Lists
        </h2>
        `);
    }
    appendHTML();

})();