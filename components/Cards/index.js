// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then(response => {
		console.log(response);
		console.log(response.data.articles); 

		const articles = response.data.articles;
		articles.bootstrap.forEach(item => {
			cardsContainer.appendChild(Cards(item));
		})
	})
	.catch(error => {
		console.log('there was an error', error); 
	})

function Cards(object) {
	const card = document.createElement('div'),
	headline = document.createElement('div'),
	author = document.createElement('div'),
	imageContainer = document.createElement('div'),
	imageAuthor = document.createElement('img'),
	authorName = document.createElement('span');

	card.appendChild(headline);
	card.appendChild(author);
	card.appendChild(authorName);
	author.appendChild(imageContainer);
	author.appendChild(imageAuthor);
	
	card.classList.add('card');
	headline.classList.add('headline');
	author.classList.add('author');
	imageContainer.classList.add('img-container');

	headline.textContent = object.headline; 
	imageAuthor.src = object.authorPhoto;
	authorName.textContent = object.authorName;

	return card;
}

const cardsContainer = document.querySelector('.cards-container');
const pickCard = document.querySelector('.card'); 