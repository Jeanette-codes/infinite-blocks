var infiniteBlocks = function(){

   var box = document.getElementsByTagName("div")[0];
   
   box.onmouseover = function maker(e){
      var target = e.target;
      birthing(target);
   }

   function birthing(target) {

      var posLeft = ObjectPosition(target)[0]; 
      var posTop = ObjectPosition(target)[1];
      var width = Math.round(target.offsetWidth / 2);
      var height = Math.round(target.offsetHeight / 2); 
      var baby1 = new next_box(posLeft, posTop, width, height);

      var posLeft2 = posLeft + width; 
      var posTop2 = posTop;
      var width2 = target.offsetWidth - width;
      var height2 = height;
      var baby2 = new next_box(posLeft2, posTop2, width2, height2);

      var posLeft3 = posLeft;
      var posTop3 = posTop + height;
      var width3 = width;
      var height3 = target.offsetHeight - height;
      var baby3 = new next_box(posLeft3, posTop3, width3, height3);
      
      var posLeft4 = posLeft3 + width3;
      var posTop4 = posTop + height2;
      var width4 = target.offsetWidth - width3;
      var height4 = target.offsetHeight - height2;
      var baby4 = new next_box(posLeft4, posTop4, width4, height4);
      
      function next_box(posLeft, posTop, width, height) {

         var createDIV = document.createElement("div");

         //style that puppy
         createDIV.style.display = "block";
         createDIV.style.position = "absolute";
         createDIV.style.top = posTop;
         createDIV.style.left = posLeft;
         createDIV.style.width = width;
         createDIV.style.height = height;
         createDIV.style.backgroundColor = randomColor();
         
         document.body.appendChild(createDIV);

         createDIV.onmouseover = function(e){
            var target = e.target;
            birthing(target);
         }
      }

      target.parentNode.removeChild(target);
   }

   function randomColor(){
      var colorshuffle=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
      var randColor = "";

      for (i=0; i<=5; i++){
            colorshuffle.shuffle();
            randColor = randColor + String(colorshuffle[0]);
      }
      return randColor;
   }

   Array.prototype.shuffle = function() {
      var s = [];
      while (this.length) s.push(this.splice(Math.random() * this.length, 1));
      while (s.length) this.push(s.pop());
      return this;
   }

   function ObjectPosition(obj) {
      var curleft = 0;
      var curtop = 0;
      if (obj.offsetParent) {
         do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
         } while (obj = obj.offsetParent);
      }
      return [curleft,curtop];
   }

}();
