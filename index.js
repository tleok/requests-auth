function getGitHubUser(userInput){
    var myHeaders = new Headers()
    myHeaders.append("Accept", "application/json")
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

fetch("https://api.github.com/users/" + userInput + "/repos", requestOptions)
  .then(response => response.json())
  .then(result => showResult(result))
  .catch(error => alert('Something went wrong. Try again later.'))
}

function showResult(result){
    console.log(result)
    result.forEach(function(arrayItem){
        // console.log(arrayItem)
        const repoNames = arrayItem.name
        const repoLink = arrayItem.html_url
        console.log(repoNames, repoLink)
        $(`<h2>${repoNames}</h2>
           <a href="${repoLink}">${repoLink}</a>`).appendTo('.user-results')
    })
    $('.user-results').removeClass('hidden');
}

function grabUserInput(){
    $('form').submit(event => {
        event.preventDefault()
        const userInput = $('#user-input').val()
        getGitHubUser(userInput)
        console.log(userInput)
    })
}

$(function(){
    grabUserInput()
})