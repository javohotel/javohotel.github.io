var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    episodes:[]
  },
  mounted: function() {
  	fetch('js/episodes.json')
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(myJson) {
	    this.episodes = myJson;
	  });
  }
})