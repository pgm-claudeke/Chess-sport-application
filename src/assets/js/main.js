(() => {
  const app = {
    init () {
      this.cacheElements();
      this.getParams()
      this.eventListeners();
      
    },
    cacheElements () {
      this.$navIcon = document.querySelector('.navbar__icon');
      this.$close = document.querySelector('.navbar-pop__close');
      
      this.$replyBoxBtn = document.querySelector('.card-post__btn');
      this.$replyBox = document.querySelector('.card-post__reply');
      this.$replySend = document.querySelector('.btn--reply')
    },
    eventListeners () {
      this.$navPopUp = document.querySelector('.navbar-pop');

      this.$navIcon.addEventListener('click', () => {
        this.$navPopUp.classList.add('show');
        this.$navPopUp.classList.remove('hide');
      });

      this.$close.addEventListener('click', () => {
        this.$navPopUp.classList.remove('show');
        this.$navPopUp.classList.add('hide');
      });

      this.$replyBoxBtn.addEventListener('click', () => {
        this.$replyBox.classList.remove('card-post__reply--hide');
      });

      this.$replySend.addEventListener('click', () => {
        this.$replyBox.classList.add('card-post__reply--hide');
      });
    },
    getParams() {
      this.$navLearn = document.querySelector('.navbar__link--learn');
      this.$navPlay = document.querySelector('.navbar__link--play');
      this.$navCommunity = document.querySelector('.navbar__link--community');

      console.log(window.location.pathname)

      if (window.location.pathname.includes('learn')) {
        console.log('learn')
        this.$navLearn.classList.add("selected");
        this.$navPlay.classList.remove("selected");
        this.$navCommunity.classList.remove("selected");
      } else if (window.location.pathname.includes('play')) {
        console.log('play')
        this.$navLearn.classList.remove("selected");
        this.$navPlay.classList.add("selected");
        this.$navCommunity.classList.remove("selected");
      } else if (window.location.pathname.includes('community')) {
        console.log('community')
        this.$navLearn.classList.remove("selected");
        this.$navPlay.classList.remove("selected");
        this.$navCommunity.classList.add("selected");
      }
    },
  }
  app.init();
})();