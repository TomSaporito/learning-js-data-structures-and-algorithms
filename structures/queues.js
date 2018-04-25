(function(){
   var temp = `
   <h3>
       Queues
   </h3>
   Check console for: 
   <ol>
     <li>Queues</li>
     <li>MinPriorityQueues</li>
     <li>MaxPriorityQueues</li>
     <li>the Hot Potato game</li>
   </ol>
   <button type="button" id="q-btn">
       Run Queues
   </button>
   `
    appendHTML($('#queues'), temp, '#q-btn', runQueues);

})();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




let Queue = (function(){
    
    //allows for private properties 
    //but they cannot be extended
    const items = new WeakMap();

    class Queue{
        constructor(){
            items.set(this, []);
        }
        
        enqueue(el){
            let q = items.get(this);
            q.push(el);
        }
        
        dequeue(){
            let q = items.get(this);
            let r = q.shift();
            return r;
        }
        
        front(){
            return items.get(this)[0];
        }
        
        isEmpty(){
            return items.get(this).length === 0;
        }
        
        size(){
            return items.get(this).length;
        }
        
        print(){
            console.log(items.get(this).toString());
        }
    }

    return Queue

})();



class QueueElement{
    constructor(element, priority){
        this.element = element;
        this.priority = priority;
    }
}

let MinPriorityQueue = (function(){
    //allows for private properties 
    //but they cannot be extended
    const items = new WeakMap();
    

    
    class MinPriorityQueue{
        constructor(){
            items.set(this, []);
        }
        
        enqueue(el, pr){
            
            let q = items.get(this);
            let qElement = new QueueElement(el, pr);
            let added = false;
            
            for(let i = 0; i < this.size(); i++){
                if(qElement.priority < q[i].priority){
                    q.splice(i,0,qElement);
                    added = true;
                    break;
                }
            }
            
            if(!added){
                q.push(qElement);
            }
        }
        
        dequeue(){
            let q = items.get(this);
            let r = q.shift();
            return r;
        }
        
        front(){
            return items.get(this)[0];
        }
        
        isEmpty(){
            return items.get(this).length === 0;
        }
        
        size(){
            return items.get(this).length;
        }
        
        print(){
            console.log(items.get(this));
        }
    }
    
    
    
    return MinPriorityQueue;
    
})();



let MaxPriorityQueue = (function(){
    //allows for private properties 
    //but they cannot be extended
    const items = new WeakMap();
    

    
    class MaxPriorityQueue{
        constructor(){
            items.set(this, []);
        }
        
        enqueue(el, pr){
            
            let q = items.get(this);
            let qElement = new QueueElement(el, pr);
            let added = false;
            
            for(let i = 0; i < this.size(); i++){
                if(qElement.priority > q[i].priority){
                    q.splice(i,0,qElement);
                    added = true;
                    break;
                }
            }
            
            if(!added){
                q.push(qElement);
            }
        }
        
        dequeue(){
            let q = items.get(this);
            let r = q.shift();
            return r;
        }
        
        front(){
            return items.get(this)[0];
        }
        
        isEmpty(){
            return items.get(this).length === 0;
        }
        
        size(){
            return items.get(this).length;
        }
        
        print(){
            console.log(items.get(this));
        }
    }
    
    
    
    return MaxPriorityQueue;
    
})();


function runQueues(){

    const test = new Queue();

    test.enqueue('hello');
    test.enqueue('goodbye');
    test.enqueue('hello again');
    test.enqueue('bye again');
    test.print();
    test.dequeue();
    console.log(test.size());
    test.print();
    test.dequeue();
    test.print();
    console.warn('^^^^ End of regular Queue');


    let pTest = new MinPriorityQueue();

    pTest.enqueue('Tom', 2);
    pTest.enqueue('Maureen', 1);
    pTest.enqueue('Kale', 8);
    pTest.enqueue('Avocado', 2);
    pTest.print();
    pTest.dequeue();
    pTest.print();
    console.warn('^^^^ End of MinPriorityQueue');

    let pMTest = new MaxPriorityQueue();

    pMTest.enqueue('Tom', 1);
    pMTest.enqueue('Maureen', 5);
    pMTest.enqueue('Kale', 3);
    pMTest.enqueue('Avocado', 3);
    pMTest.print();
    console.warn('^^^^ End of MaxPriorityQueue')
    let names = ['John', 'Jack', 'Barb', 'Ray', 'Leela', 'Dennis'];
    let winner = hotPotato(names, 7);
    console.log(`The winner for int 7 is ${winner}!`);

    let rand = getRandomInt(1, 7);
    let winner2 = hotPotato(names, rand);
    console.log(`The winner for the int ${rand} is ${winner2}`);
    console.warn('^^^^ End of Hot Potato games');
}



function hotPotato(nameList, num){
    
    let myQ = new Queue();
    
    for (let i = 0; i < nameList.length; i++){
        myQ.enqueue(nameList[i]);
    }
    
    let eliminated = '';
    
    while ( myQ.size() > 1 ){
        for (let i = 0; i < num; i++){
            myQ.enqueue(myQ.dequeue());
        }
        eliminated = myQ.dequeue();
        console.log(`${eliminated} was eliminated from the Hot Potato game.`);
    }
    
    return myQ.dequeue();
}

