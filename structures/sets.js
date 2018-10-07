(function(){
    var temp = `
    <h3>
        Sets
    </h3>
    <button type="button" id="set-btn">
        Run Sets
    </button>

    <p>
        Run sets then view console
    </p>
    <ul>
        <li>
            <strong>Union:</strong> Given two sets, this returns a new set with elements from both the given sets
        </li>
        <li>
            <strong>Intersection:</strong> Given two sets, this returns a new set with the elements that exist in both sets
        </li>
        <li>
            <strong>Difference:</strong> Given two sets, this returns a new set with all the elements that exist in the first set and do NOT exist in the second set
        </li>
        <li>
            <strong>Subset:</strong> This confirms whether a given set is a subset of another set.
        </li>
    </ul>
    `
     appendHTML($('#sets'), temp, '#set-btn', runSets);
})();


function Set(){
    
    this.items= {};

    this.has = (value) => {
        return this.items.hasOwnProperty(value);
    }

    this.add = (value)=>{
        if(!this.has(value)){
            this.items[value] = value;
            return true;
        }
        return false;
    };

    this.delete = (value)=>{
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    };

    this.size = ()=>{
        return Object.keys(this.items).length;
    };

    this.values = ()=>{
        let values = [];
        for (let i =0, keys = Object.keys(this.items); i <keys.length; i++) {
            values.push(this.items[keys[i]])
        }
        return values;
    };

    this.union = (otherSet)=>{
        let unionSet = new Set();

        let values = this.values();
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };

    this.intersection = (otherSet) =>{
        let intersectionSet = new Set();
        let values = this.values();
        for(let i = 0; i <values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };

    this.difference = (otherSet) =>{
        let differenceSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++){
            if (!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };

    this.subset = (otherSet) =>{
        if(this.size()> otherSet.size()){
            return false;
        } else {
            let values = this.values();
            for (let i = 0; i < values.length; i++){
                if(!otherSet.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    };


}


function runSets(){
    const mySet = new Set();
    console.log(mySet)
    mySet.add('Jello');
    mySet.add('Marriage');
    mySet.add('Nestle');
    console.log(mySet.has('Nestle'));
    console.log(mySet.values());
    mySet.delete('Jello');
    console.log(mySet.size());
    console.log(mySet.values());
    console.log(mySet.has('Jello'));

    set1 = new Set();
    set1.add(1);
    set1.add(2);
    set1.add(2);
    set1.add(5);

    set2 = new Set();
    set2.add(2);
    set2.add(3);
    set2.add(4);

    console.log('Union Set: ', set1.union(set2).values());
}