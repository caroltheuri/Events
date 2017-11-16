 export class Animal{
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
           function* generate() {
             yield* ['1', '2', '3'];
           }

           generate().next(); // { value: "a", done: false }

           [1,2,3] = new Set(['1', '2', '3']);
          1;
 console.log(dog);
 console.log(cow);
 console.log(cat);
//iterator
 function Iterate(array) {
    var nextIndex = 0;

    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}
 var categories = Iterate(['cow','cat','dog']);
 console.log(categories.next().value);
 console.log(categories.next().value);
  console.log(categories.next().value);
 console.log(categories.next().done);
