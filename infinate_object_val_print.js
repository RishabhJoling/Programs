/// INput = {'a': 'cow', 'b': { 'c': 'buffalow', 'd': 'grass', 'e': {'f': 'hills'}}}
/// op = [a, b.c, b.d, b.e.f ]
/// input = {'a': 'cow', 'b': { 'c': 'buffalow', 'd': 'grass', 'e': {'f': 'hills', 'g': {'h': 'floor'}}}}

function main() {
    // const inputObj = {'a': 'cow', 'b': { 'c': 'buffalow', 'd': 'grass', 'e': {'f': 'hills'}}};
    const inputObj = {'a': 'cow', 'b': { 'c': 'buffalow', 'd': 'grass', 'e': {'f': 'hills', 'g': {'h': 'floor'}}}};

    let finalArray = [];

    const checkIfObj = (obj) => {
        if(obj && obj instanceof Object && typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]') {
            return true;
        }
        return false;
    }

    const recurssiveCall = (parentKeyChain, obj) => {
        if(checkIfObj(obj)) {
            const objectEntries = Object.entries(obj);
            objectEntries.length && objectEntries.map(([key, val]) => {
                const currentKey = parentKeyChain ? parentKeyChain + '.' + key : key;
                recurssiveCall(currentKey, val);
            })
        }
        else {
            finalArray.push(parentKeyChain);
        }   
    };

    recurssiveCall('', inputObj);

    console.log("finalArray : ", finalArray);
}

main();
