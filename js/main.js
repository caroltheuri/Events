// import{Animal};
class Animal{
  constructor(name,breed,color,sound){
    this.name=name;
    this.breed=breed;
    this.color=color;
    this.sound=sound;
}
    static sound(sound){
      return  this.sound=sound;
    }
  property(){
    let vm = this;

    return vm.name+" "+vm.breed;
  }
}

 Animal.sound("Barks");

 let dog=[new Animal('fancy','chihuahua','brown',Animal.sound),
          new Animal('Nasty','German Shepherd','brown/black',Animal.sound),
          new Animal('fluffy','Japanese Sprits','white',Animal.sound),
          new Animal('Mad','Bull Dog','grey',Animal.sound)
        ];
let cow=[new Animal('njoro','fresian','white','moors'),
         new Animal('Nyani','Gyeser','green','moors'),
         new Animal('boor','perex','yellow','moors'),
         new Animal('wendo','breedsghy','black','moors')];

  let cat=[new Animal('nyau','chihuahua','brown','meows'),
           new Animal('mbere','German Shepherd','brown/black','meows'),
           new Animal('flerr','Japanese Sprits','white','meows'),
           new Animal('chasj','Bull Dog','grey','meows')];
           //generator and set
          //  function* generate() {
          //    yield* ['1', '2', '3'];
          //  }
          //
          //  generate().next(); // { value: "a", done: false }
          //
          //  // [1,2,3] = new Set(['1', '2', '3']);
          // 1;
          function display(){
          dog.forEach(function(objectItem){
             document.getElementById("dogs").innerHTML=(objectItem.name);

          });
          cow.forEach(function(objectItem){
             document.getElementById("cows").innerHTML=(objectItem.name);
            });
            cat.forEach(function(objectItem){
               document.getElementById("cats").innerHTML=(objectItem.name);

            });
        }


 // document.getElementById("dogs").innerHTML=(dog);
 // document.getElementById('cows').innerHTML=(cow);
 // document.getElementById('cats').innerHTML=(cat);
//iterator
 function Iterate(array) {
    var nextIndex = 0;

    return {
       next() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}
 var categories = Iterate(['cow','cat','dog']);
 alert("This is an online Petshop. continue to see the available pets in the store.");
 alert(`The first is: ${categories.next().value}`);
 alert(`The second is: ${categories.next().value}`);
  alert(`The third is: ${categories.next().value}`);
  let figures=[45,67,93,84,34,67];
  // document.getElementById("num").innerHTML=(new Set(figures));
  console.log(new Set(figures));
  //promise
  function promise(){
    var count=function(length){
      return new Promise(function(resolve,reject){
        ('Initial Promise');
        setTimeout(function(){
                ('Timeout');
          resolve();
          length;
        });
      });
    };
    count(10000).then(()=>alert("Thankyou for trusting us. We will get back to you."));
  };
