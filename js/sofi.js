var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    episodes:[
		   { 
		      "title":"Homer the Great (1995)",
		      "img": "https://m.media-amazon.com/images/M/MV5BNWY4ZmNhYzEtYmU2OC00NDM2LWEzODItOGE2YTA3ODg1Y2M1XkEyXkFqcGdeQXVyNjYyODY4NDU@._V1_UY268_CR87,0,182,268_AL_.jpg",
		      "ratingname": "uno",
		      "link":"#top",
		      "rate":"9,0",
		      "description":"Homer becomes a member of a mysterious organization called the Stonecutters and is heralded as 'the chosen one'."
		   },
		   { 
		      "title":"Homer Badman (1989)",
		      "img": "https://m.media-amazon.com/images/M/MV5BYzE2OWUwMDYtZTNkZC00NmIwLTkyOWMtYjcyZGVkMDFhYzI0XkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_UY268_CR79,0,182,268_AL_.jpg",
"ratingname": "dos",
		      "link":"#top",
		      "rate":"8,9",
		      "description":"After a series of misunderstandings, Homer is labeled a pervert, and must try to clear his name."
		   },
		   { 
		      "title":"Flaming Moe's (1991)",
		      "img": "https://m.media-amazon.com/images/M/MV5BNTIzNTI1NDI1MV5BMl5BanBnXkFtZTgwMTc3NTQ2MjE@._V1_UY209_CR69,0,140,209_AL_.jpg",
		      "ratingname": "tres",
		      "link":"#top",
		      "rate":"8,8",
		      "description":"Moe claims a drink that Homer invented is his own, with the drink making the bar a local hot spot, but threatens his friendship with Homer."
		   },
		   { 
		      "title":"Last Exit to Springfield (1993)",
		      "img": "https://m.media-amazon.com/images/M/MV5BNWRiNjI0OTMtZTk0MS00NmIyLThjOGQtOGZjYTk1OTkyYTZkXkEyXkFqcGdeQXVyNjYyODY4NDU@._V1_UY209_CR69,0,140,209_AL_.jpg",
		      "ratingname": "cuatro",
		      "link":"#top",
		      "rate":"9,1",
		      "description":"Homer becomes union leader and leads a company strike when Mr. Burns takes away the company dental plan."
		   },
		   { 
		      "title":"Homer the Heretic (1989)",
		      "img": "https://m.media-amazon.com/images/M/MV5BZDUxMTFjMzMtYjdkZS00Mjk0LWJkZTUtMjFmYjdkZDdhYzBmXkEyXkFqcGdeQXVyNjQwMTkxMDU@._V1_UY268_CR147,0,182,268_AL_.jpg",
		      "ratingname": "cinco",
		      "link":"#top",
		      "rate":"9,0",
		      "description":"After skipping church one week, Homer decides that he is never going back. However, when a calamity occurs, it takes the combined efforts of a number of people from different faiths to save him."
		   },
		   { 
		      "title":"Treehouse of Horror V (1994)",
		      "img": "https://m.media-amazon.com/images/M/MV5BMjA4Nzc0NzkzMF5BMl5BanBnXkFtZTgwMTQxOTUwNDI@._V1_UY209_CR116,0,140,209_AL_.jpg",
		      "ratingname": "seis",
		      "link":"#top",
		      "rate":"9,1",
		      "description":"The family's job at Mr. Burns' country estate goes awry when Homer goes mad; Homer's attempt to repair a toaster results in inadvertent time travel; The school staff turn cannibalistic."
		   },
		   { 
		      "title":"King Size Homer (1995)",
		      "img": "https://m.media-amazon.com/images/M/MV5BMjIyODQ4MjM3NF5BMl5BanBnXkFtZTgwNTk5NjA1MjE@._V1_UY209_CR14,0,140,209_AL_.jpg",
		      "ratingname": "siete",
		      "link":"#top",
		      "rate":"9,0",
		      "description":"Homer intentionally gains more weight in order to qualify for disability and work from home, but soon realizes that being morbidly obese comes with its own problems."
		   },
		   { 
		      "title":"Itchy & Scratchy Land (1994)",
		      "img": "https://m.media-amazon.com/images/M/MV5BZWRkY2VlZjAtNGI2My00ODBjLWJkODMtMTkwZGNkNmIzZDhmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
		      "ratingname": "ocho",
		      "link":"#top",
		      "rate":"8.6",
		      "description":"A family vacation to Itchy & Scratchy Land turns disastrous when the robots malfunction and turn on the tourists."
		   },
		   { 
		      "title":"The City of New York vs. Homer Simpson (1997)",
		      "img": "https://m.media-amazon.com/images/M/MV5BMTc4MzEzNjI5M15BMl5BanBnXkFtZTgwNjk5NjA1MjE@._V1_UY209_CR8,0,140,209_AL_.jpg",
		      "ratingname": "nueve",
		      "link":"#top",
		      "rate":"9,1",
		      "description":"Homer must travel to New York to get his car back, which is illegally parked at World Trade Center Plaza."
		   },
		   { 
		      "title":"The Wizard of Evergreen Terrace (1998)",
		      "img": "https://m.media-amazon.com/images/M/MV5BZDI3YTU4Y2UtMDg0ZC00YWNjLTk3MDItNzg1YzNlNTczMGE2XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UY209_CR116,0,140,209_AL_.jpg",
		      "ratingname": "diez",
		      "link":"#top",
		      "rate":"8,2",
		      "description":"Homer's midlife crisis leads to a disastrous attempt at being an inventor."
		   },
		   { 
		      "title":"Mayored to the Mob (1998)",
		      "img": "https://m.media-amazon.com/images/M/MV5BMGM4ODQxZTAtNWY3Ni00ZDQ4LThjM2EtNDE4MWFiNmJhNzBmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UY209_CR71,0,140,209_AL_.jpg",
		      "ratingname": "once",
		      "link":"#top",
		      "rate":"8,2",
		      "description":"Homer deals with corruption when he becomes Mayor Quimby's bodyguard."
		   },
		   { 
		      "title":"Behind the Laughter (2000)",
		      "img": "https://m.media-amazon.com/images/M/MV5BZDk4Yjk0ZjMtNTAxZS00OTZmLTk2MmItODg0NzdkMmQ5MzIwXkEyXkFqcGdeQXVyNzA5NTYxMDg@._V1_UY209_CR17,0,140,209_AL_.jpg",
		      "ratingname": "doce",
		      "link":"#top",
		      "rate":"7,9",
		      "description":"Fans are invited to take a behind-the-scenes look at 'The Simpsons'2, revisiting some of the most memorable experiences the family has been through."
		   },
		   { 
		      "title":"Marge vs. the Monorail (1993)",
		      "img": "https://m.media-amazon.com/images/M/MV5BZmMyNzgwNDYtN2YzMS00MmViLTgwYWEtOTllYzU0Mzk3OGNjXkEyXkFqcGdeQXVyNjQwMTkxMDU@._V1_UY268_CR147,0,182,268_AL_.jpg",
		      "ratingname": "trece",
		      "link":"#top",
		      "rate":"9,1",
		      "description":"After receiving a considerable donation of money, Springfield builds a monorail system with Homer as the conductor, unaware they've just boarded a one-way train to Hell."
		   }
		]
  }
});


$(document).ready(function(){
	$('.rating.uno').appendTo('#uno');
	$('.rating.dos').appendTo('#dos');
	$('.rating.tres').appendTo('#tres');
	$('.rating.cuatro').appendTo('#cuatro');
	$('.rating.cinco').appendTo('#cinco');
	$('.rating.seis').appendTo('#seis');
	$('.rating.siete').appendTo('#siete');
	$('.rating.ocho').appendTo('#ocho');
	$('.rating.nueve').appendTo('#nueve');
	$('.rating.diez').appendTo('#diez');
	$('.rating.once').appendTo('#once');
	$('.rating.doce').appendTo('#doce');
	$('.rating.trece').appendTo('#trece');
});