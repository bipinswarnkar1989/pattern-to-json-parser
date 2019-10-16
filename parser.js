const { input1, input2, input3 } = require('./inputs');

const parser = pattern => {
    let split = pattern.split(',');
    
    const result = () => {
       let k, v;
       let b = split.map(s => k = s.replace('_', '.'));
       const newAr = [];
       b.forEach(e => {
           let s = e.split(':');
           newAr.push([s[0], s[1]]);
       });
      
       const obj = Object.assign({}, ...Array.from(newAr, ([k, v]) => ({[k]: decidePattern(v)}) ));;
    
       return obj;
    }
     
    return result;
}

const output1 = parser(input1);

const output2 = parser(input2);

const output3 = parser(input3);

console.log(output3());

function decidePattern(p) {
    let result;
    if (p.indexOf('to') !== -1) {
        result = createDateRange(p);
    } else if (p.indexOf('|') !== -1) {
        result = createOrformat(p);
    } else {
        result = createNormalObj(p);
    }
    return result;
}

function createDateRange(d){
   const dateSplit = d.split('--to--');
   const obj = {
    "between": dateSplit
    }
   return obj;
}

function createOrformat(v) {
    const orSplit = v.split('|');
    const obj = {
        "inq": orSplit
    }
    return obj;
}

function createNormalObj(v){
    const obj = {
        "eq": v
    }
    return obj;
}