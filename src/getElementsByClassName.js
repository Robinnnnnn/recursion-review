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

// var getElementsByClassName = function (className) {
//   let allClasses = [];
//   let parent = document.body;

//   function find(parent) {
//     if (parent.nodeType === 1) {
//       for (let n = 0; n <= parent.classList.length - 1; n++) {
//         if (parent.classList[n] === className) {
//           allClasses.push(parent);

//         }
//       }
//     }
//     if (parent.nodeType === 1 && parent.childNodes) {
//       for (let i = 0; i <= parent.childNodes.length - 1; i++) {
//         if (parent.childNodes[i].nodeType === 1) {
//           find(parent.childNodes[i]);
//         }
//       }
//     }
//   }

//   find(parent);
//   return allClasses;
// };

