(function () {
    class Transform{
        constructor(selector){
            this.el=document.querySelector(selector);
        }
    }

    const tf=new Transform('.ball');
    console.log(tf);
  })();