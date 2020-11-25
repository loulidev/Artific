


	//----------------------------------------------------------------------------------MODAL ADD NEW  PROJECT FORM-------//
	const modalBtn = document.querySelector('.addBtn');
	const modalBg = document.querySelector('.modal-bg');
	const modalClose = document.querySelector('.modal-close');

	modalBtn.addEventListener('click', function(){
		modalBg.classList.add('bg-active')
	});

	modalClose.addEventListener('click', function(){
		modalBg.classList.remove('bg-active')
	});

	//------------------------------------------------------------------------------------TAGS INPUT----------------------//
	const tagInput = document.querySelector('.modtags');
	const tagList = document.querySelector('.tag-list');
	const tagButton = document.querySelector('.addTagBtn');

	tagButton.addEventListener('click', function addInputTag(event){
		//prevent form from submitting
		event.preventDefault();
		
		//TAG CONTAINER
		const newInputTagContainer = document.createElement('div');
		newInputTagContainer.classList.add('tag-container');
		
		
		//create tag content
		const newInputTag = document.createElement('li');
		newInputTag.innerHTML = tagInput.value;
		newInputTag.classList.add('inputtags');
		newInputTagContainer.appendChild(newInputTag);

		//delete tag button
		const deleteTagButton = document.createElement('span');
		deleteTagButton.innerHTML = 'x';
		deleteTagButton.classList.add('deleteTagBtn');
		newInputTagContainer.appendChild(deleteTagButton);
		deleteTagButton.addEventListener('click', function(){
			newInputTagContainer.remove();
		});

		//append to list
		tagList.appendChild(newInputTagContainer);

		//clear input value
		tagInput.value = " ";
		});

	//---------------------------------------------------------------------------------------------------CREATING A NEW PROJECT----------------//

	//SELECTORS
	const submitButton = document.querySelector('.submitbtn');
	const projectContainer = document.querySelector('.my-projects-container');//to append projects
	const titleInput = document.querySelector('.modtitle');
	const imgInput = document.querySelector('.thumb');
	const categoryInput = document.querySelector('.modal-categories');
	const tagsInput = document.querySelector('.modtags');
	const descriptionInput = document.querySelector('.moddescription');

	//EVENT LISTENERS
	submitButton.addEventListener('click', addProject);


	//FUNCTIONS
	function addProject(event){
		//prevent form from submitting
		event.preventDefault();

		//PROJECT WRAPPER DIV
		const projectWrapperDiv = document.createElement('div');
		projectWrapperDiv.classList.add('project-wrapper');

		//PROJECT IMAGE
		const newProjectImg = document.createElement('img');
		newProjectImg.src= imgInput.value;
		newProjectImg.classList.add('project-img');
		projectWrapperDiv.appendChild(newProjectImg);

		//PROJECT INFO DIV
		const newProjectInfoDiv = document.createElement('div');
		newProjectInfoDiv.classList.add('project-info');
		projectWrapperDiv.appendChild(newProjectInfoDiv);

		//PROJECT TITLE
		const newProjectTitle = document.createElement('h3');
		newProjectTitle.innerHTML=titleInput.value;
		newProjectTitle.classList.add('title');
		newProjectInfoDiv.appendChild(newProjectTitle);

		//PROJECT SOCIAL ELEMENTS
		const projectSocial = document.createElement('span');
		projectSocial.innerHTML='<span><i class="fas fa-heart"></i>Favourites</span><span><i class="fas fa-eye"></i>Views</span>';
		projectSocial.classList.add('social');
		newProjectInfoDiv.appendChild(projectSocial);

		//PROJECT CATEGORY
		const newProjectCategory = document.createElement('a');
		newProjectCategory.innerHTML= categoryInput.value;
		newProjectCategory.classList.add('category');
		newProjectInfoDiv.appendChild(newProjectCategory);

		//PROJECT TAGS
		const newProjectTags = document.createElement('ul');
		newProjectTags.classList.add('tags');
		newProjectInfoDiv.appendChild(newProjectTags);

		tagsLoop = tagList.childNodes;
		tagsLoop.forEach(function(newInputTag){
			const newProjectTag = document.createElement('li');
			newProjectTag.innerHTML = newInputTag.innerHTML;
			newProjectTag.classList.add('tag');
			newProjectTags.appendChild(newProjectTag);
		});

		//PROJECT DESCRIPTION
		const newProjectDescription = document.createElement('p');
		newProjectDescription.innerHTML= descriptionInput.value;
		newProjectDescription.classList.add('description');
		newProjectInfoDiv.appendChild(newProjectDescription);

		//PROJECT MORE BUTTONS
		const newMoreButtonList = document.createElement('ul');
		newMoreButtonList.classList.add('more-buttons');
		newProjectInfoDiv.appendChild(newMoreButtonList);

		const newEditButton = document.createElement('li');
		newEditButton.innerHTML = '<a>Edit</a><span><i class="fas fa-edit"></i></span>';
		newEditButton.classList.add('edit');
		newMoreButtonList.appendChild(newEditButton);

		const newDeleteButton = document.createElement('li');
		newDeleteButton.innerHTML = '<a> Delete </a><span> <i class="fas fa-trash"></i> </span>';
		newDeleteButton.classList.add('remove');
		newMoreButtonList.appendChild(newDeleteButton);			


		//APPEND PROJECT WRAPPER DIV TO CONTAINER
		projectContainer.appendChild(projectWrapperDiv);


		//EXIT MODAL FORM AFTER SUBMIT
		modalBg.classList.remove('bg-active');

		//CLEAR INPUT VALUES

	}//end of addProject function

	// -----------------------------------DELETE PROJECT----------------------------------------
	const modalDeleteButton = document.querySelectorAll('.remove');
	const modalDeleteBackground = document.querySelector('.modal-delete-bg');
	const modalDeleteClose = document.querySelector('.modal-delete-close');
	const modalConfirmButton = document.querySelector('yes');
	
	function removeModalBg(){
		modalDeleteBackground.classList.add('bg-active');
	};
	
	for (var i = 0; i < modalDeleteButton.length; i++) {
    	modalDeleteButton[i].addEventListener("click", removeModalBg );
	}

	modalDeleteClose.addEventListener('click', function(){
		modalDeleteBackground.classList.remove('bg-active')
	});	

// ---------------------------------EDIT PROJECT------------------------------------


 


