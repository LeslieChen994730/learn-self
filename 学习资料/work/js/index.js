window.onload = function() {
  var nav = document.getElementById('container-nav');
  var activeClassName = 'container-nav-show';

  this.document
    .getElementById('header-container-btn')
    .addEventListener('click', function(e) {
        e.preventDefault();
        if(nav.classList.contains(activeClassName)){
            nav.classList.remove(activeClassName);
        }else{
            nav.classList.add(activeClassName);
        }
        return false;
    },false);
};
