const root = new Vue({
  el: '#root',
  data: {
      indexPic: 0,
      pictures: [
          './images/image1.jpg',
          './images/image2.jpg',
          './images/image3.jpg',
          './images/image4.jpg',
      ]
  },

  methods: {
    nextPic() {
      this.indexPic += 1;

      if (this.indexPic > (this.pictures.length - 1)) {
          this.indexPic = 0;
      }
    },

    prevPic() {
      this.indexPic -= 1;

      if (this.indexPic < 0) {
        this.indexPic = this.pictures.length - 1;
      }
    },

    setPic(index) {
      this.indexPic = index;
    }

  }

});
