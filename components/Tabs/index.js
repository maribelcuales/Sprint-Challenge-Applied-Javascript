// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// function Tabs(object) {
// 	const tab = document.createElement('div');
// 	tab.classList.add('tab');
// 	tab.textContent = 'topic here';

// 	return tab; 
// }

const topicsContainer = document.querySelector('.topics'); 

axios
	.get(`https://lambda-times-backend.herokuapp.com/topics`)
	.then(response => {
		console.log(response); 
		console.log(response.data.topics)

		const dataTopics = response.data.topics;
		dataTopics.forEach(topic => {
			const tab = document.createElement('div');
			tab.classList.add('tab');
			tab.textContent = topic; 
			topicsContainer.appendChild(tab); 
		})
	})
	.catch(error => {
		console.log('there was an error', error); 
	}) 
