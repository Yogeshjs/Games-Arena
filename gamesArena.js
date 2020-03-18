const url = "http://starlord.hackerearth.com/gamesarena";
async function gamesArena(url){
	
	/* return fetch(url).then((response)=>{
			return response.json();
		  }).then((data)=>{
			return data.slice(1,data,length);
		  })
	*/

	const response = await fetch(url);
	const data = await response.json();
	return data.slice(1,data.length);
	
}

/*gamesArena(url).then((data)=>{
	console.log(data)
});*/

function apiCall(url, startPos = null , callback){

	fetch(url).then((response)=>{
		return response.json();
	}).then((data)=>{
		if(isNaN(startPos)){
			console.log(startPos);
			callback(data)
		}else{
			//console.log(typeof startPos);
			callback(data.slice(startPos, data.length));
		}
	})

}

function createElm(elmName){
	return document.createElement(elmName);
}

function createText(str){
	return document.createTextNode(str);
}

function createCard(data){

	const displayCards = document.getElementById('showcase');
	
	data.map((currObj) =>{
		const card = createElm('div', 'card');
		card.setAttribute('class', 'card');	

		const h4 = createElm('h4', 'title');
		h4.setAttribute('class', 'title');
		
		const title = createText(currObj.title);
		h4.appendChild(title);

		const cardHead = createElm('div');
		cardHead.setAttribute('class', 'card-head');
		cardHead.appendChild(h4);

		const cardBody = createElm('div');
		cardBody.setAttribute('class', 'card-body');
		
		const content = createElm('p');
		content.setAttribute('class', 'content');
		content.innerHTML = `<b>Platform:</b> ${currObj.platform}<br><b>Score:</b> ${currObj.score}<br><b>Genre:</b> ${currObj.genre}<br><b>Editors Choice:</b> ${currObj.editors_choice === "Y"? "<spna class='choice-yes'>&#9733</span>" : "<spna class='choice-no'>&#9733</span>"}`;
		cardBody.appendChild(content);

		card.appendChild(cardHead);
		card.appendChild(cardBody);

		displayCards.appendChild(card);
		
	});
}

apiCall(url, null,console.log);

apiCall(url, 1, createCard);