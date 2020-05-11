// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let container = [];
  let findContain = element => {
    if(element.classList && element.classList.contains(className)){
      container.push(element);
    }
    if(element.childNodes){
      _.each(element.childNodes, function(item){
        findContain(item);
      })
    }
  }
  findContain(document.body);
  return container;


};

