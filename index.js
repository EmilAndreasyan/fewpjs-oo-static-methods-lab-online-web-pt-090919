class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
   static sanitize(string) {
<<<<<<< HEAD
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
=======
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
>>>>>>> 58202ed52e207fa93869112e9169fcb3aca18cac
   }
  
   static titleize(sentence){
     let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
     let result = [];
     let words = sentence.split(" ");
     for(let i = 0; i < words.length; i++){
       if(i === 0) {
         result.push(this.capitalize(words[i]))
       } else {
         if (exceptions.includes(words[i])){
           result.push(words[i])
         } else {
           result.push(this.capitalize(words[i]))
         }
       }
     }
     return result.join(" ")
   }
}