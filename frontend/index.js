function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const card = document.createElement('nav') // create a nav element
    links.forEach(link => { // loop through the links array
      const a = document.createElement('a') // create an anchor element
      a.href = link.href // set the href attribute
      a.title = link.title // set the title attribute
      a.textContent = link.textContent // set the text content
      card.appendChild(a) // append the anchor element to the nav element
    }) // add closing parenthesis for the forEach loop
      return card // return the nav element
  }

    // ❗ DOM creation using your `buildNav` component (do not change):
    document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const card = document.createElement('div') // create a div element
    card.classList.add = 'Learner Card' // set the text content of the div element
    
    const nameP = document.createElement('p') // create a p element
    nameP.textContent = learner.fullName // set the text content of the p element

    const idElement = document.createElement('p') // create a p element
    idElement.textContent = `Learner ID: ${learner.id}` // set the text content of the p element

    const dobP = document.createElement('p') // create a p element
    dobP.textContent = `DOB: ${learner.dateOfBirth}` // set the text content of the p element
    
    const favLangP = document.createElement('p') // create a p element
    const favLanguage = languages.find(lang => lang.id === learner.favLanguage) // find the favorite language
    favLangP.textContent = `Favorite Language: ${favLanguage.name}` ; // set the text content of the p element

    [nameP, idElement, dobP, favLangP].forEach(p => card.appendChild(p)) // loop through the p elements and append them to the div element

    card.addEventListener('click', evt => { // add an event listener to the div element
      document.querySelectorAll('Learner Card').forEach(card => { // loop through all the div elements
        card.classList.remove('active') // remove the active class from the div element
      })
      card.classList.add('active') // add the active class to the div element
    })
    return card // return the div element
  }

    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach(learner => { // loop through the learners array
      const learnerCard = buildLearnerCard(learner, languages) // create a learner card
      document.querySelector('section').appendChild(learnerCard) // append the learner card to the section element
    }) // add closing parenthesis for the forEach loop
  

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer') // create a footer element

    let companyStuff = document.createElement('div') // create a div element
    companyStuff.classList.add('company-stuff') // add a class to the div element

    let companyName = document.createElement('p') // create a p element
    companyName.classList.add('company-name') // add a class to the p element
    companyName.textContent = footerData.companyName // set the text content of the p element

    let address = document.createElement('p') // create a p element
    address.classList.add('address') // add a class to the p element
    address.textContent = footerData.address // set the text content of the p element 

    let contactEmail = document.createElement('p') // create a p element
    contactEmail.classList.add('contact-email') // add a class to the p element
    contactEmail.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}">${footerData.contactEmail}</a>` // set the text content of the p element

    companyStuff.appendChild(companyName) // append the p element to the div element
    companyStuff.appendChild(address) // append the p element to the div element
    companyStuff.appendChild(contactEmail) // append the p element to the div element

    let socialMediaDiv = document.createElement('div') // create a div element
    socialMediaDiv.classList.add('social-media') // add a class to the div element

    for (let platform in footerData.socialMedia) { // loop through the social media object
      let socialMediaLink = document.createElement('a') // create an anchor element
      socialMediaLink.href = footerData.socialMedia[platform] // set the href attribute
      socialMediaLink.textContent = platform.charAt(0).toUpperCase() + platform.slice(1) 
      socialMediaDiv.appendChild(socialMediaLink) // append the anchor element to the div element
    } // add closing parenthesis for the for...in loop
    
    let currentYear = new Date().getFullYear() // get the current year
    let copyRight = document.createElement('div') 
    copyRight.textcontent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`


    footer.appendChild(companyStuff)
    footer.appendChild(socialMediaDiv)
    footer.appendChild(copyRight)


    return footer // return the footer element  
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
