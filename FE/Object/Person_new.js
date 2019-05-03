/**
 * Created by cc on 17/8/16.
 */


Function.prototype.new  = function(){
    var args = Array.prototype.slice.call(arguments)
    function functor(){
        return constr.apply(this,args)
    }
    functor.prototype = this.prototype
    var constr = this;
    return new functor
}


function Person(firstname,lastname){
    this.firstname = firstname ;
    this.lastname = lastname ;
}

var author = Person.new.apply(Person,['Aadit','Shah'])

console.log(author)