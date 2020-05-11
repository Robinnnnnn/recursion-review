// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


  var stringifyJSON = function (obj) {
    // your code goes here
    if (typeof obj === 'function') {
      return null;
    }
    if (typeof obj === 'undefined') {
      return null;
    }
    if (typeof obj === 'number') {
      return `${obj}`;
    }
    if (obj == null) {
      return 'null';
    }
    if (typeof obj === 'string') {
      return `"${obj}"`;
    }
    if (typeof obj === 'boolean') {
      return `${obj}`;
    }
    if (Array.isArray(obj)) {
      return '[' + obj.map((item) => stringifyJSON(item)).join(',') + ']';
    }

    if (typeof obj === 'object') {
      let pairs = [];
      let keyArray = Object.keys(obj);
      keyArray.forEach((key) => {
        let keyValue = stringifyJSON(obj[key]);
        if (keyValue !== null) {
          pairs.push(`"${key}"` + ':' + keyValue);
        }
      });
      return '{' + pairs.join(',') + '}';
    }
  };

