/**
 * Created by cc on 17/8/16.
 */

/* class extends*/


function Parent(name,age){
    this.name = name
    this.age = age
    this.say = function(name,age){
        console.log(name+' 1 '+age)
    }
}

Parent.prototype = {
    speakSometing:function(){
        console.log("I can speek chinese");
    }
}

function Child(name,age){
    this.name = name
    this.age = age
}

Child.prototype = new Parent()

// Child.prototype = {
//
// }

var c = new Child('job',30)

console.log(c)