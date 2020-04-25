site_url="https://happybirthdayyouoldassboi.arjungandhi.com/images/"

stage_data={
  "1": {
        "big_prompt":"Yo Fucker Let's play A Shitty Game",
        "little_prompt":"Corona is a single chinese monkey with a shotgun that got shrunk down escaped.",
        "rules":"Listen Up  Bitch. This isn't Hard But I'm sure we'll fuck it up.\n After each round, you get a hint to guess the password. We keep playing until you get it right.",
        "password":"OMACWARH"
        },
  "2": {
        "big_prompt":"Lets go make Cooper feel bad cause he can't draw!",
        "little_prompt":"Fun fact, I can punt a baby 30 yards. Don't ask how I know that.",
        "rules":"These rules haven't changed I can't be fucked to type all that again.",
        "password":"rubber ducky"
        },
  "3": {
        "big_prompt":"Time To Bend Over and Get Lashed ;)",
        "little_prompt":"Epstien didn't kill himself.",
        "rules":"OOOOOHHH baby a rule change. See Now. You have to be good.\n You gotta get atleast a bronze medal to get a hint.",
        "password":"Wes Anderson"
        },
  "4": {
        "big_prompt":"Tie a Noose and Jump off a Cliff",
        "little_prompt":"beep booop. I'm a mother fucking dinosaur. beep beep bitch.",
        "rules":"If you can't figure this one out disown yourself.",
        "password":"Atwater Kent"
       },
  "5": {
        "big_prompt":"Uh Shit Fuck. You actually a made it this far",
        "little_prompt":"Here's a prize I guess",
        "rules":"REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
        "password":"Theres no fucking password dont type shit you fuck."
  },
  }


wrong=[ "This is papa penguin speaking, and I'm dissapointed",
        "Do better or I'll outsource your job to my country",
        "Come on collin, I didn't want you to se this",
        "Your mother regrets not swallowing to this day",
        "beep beep you suck.",
        "We're gonna be here all week arent we.",
        "The only pokemon you deserve is bidoof.",
        "A slowpoke would easily outpace you.",
        "F",
        "This is why your name has to L's"
      ]

pholder=[
      "10 Digit SSN Goes Here.....",
      "Whats Your Mothers Maiden Name....",
      "Name of the Town you were born in.....",
      "Bank account Password Pls.....",
      "Date of Birth....",
      "What Is your favorite book....",
      "Where did you go to high school......",
      "What was the name of your first pet......."
]

document.addEventListener('DOMContentLoaded', (event) => {
  load()
})

async function searchFunction(e) {
  //stop page reload
  e.preventDefault();
  //get input value
  var inputVal = document.getElementById("query").value
  //show button is loading
  var form = document.getElementById("loading")
  checkPassword(inputVal)
  document.getElementById("query").value=""
}


async function load() {
  const form = document.getElementById('password');
  form.addEventListener('submit', searchFunction);
  await updateStage(0)
  update()
}

function checkPassword(input){
  cur_stage=localStorage.getItem('stage')
  if (input.toLowerCase() == stage_data[cur_stage]["password"].toLowerCase()){
    updateStage()
    update()

  } else {
    var text = wrong[Math.floor(Math.random() * wrong.length)];
    alert(text)
  }

}


async function updateStage(input){
  if (localStorage.getItem('stage')==null){
    localStorage.setItem('stage', '1')
  }  else if (input != 0 ){
    cur_stage=localStorage.getItem('stage')
    localStorage.setItem('stage',(parseInt(cur_stage)+1).toString())
    }
}

function update(){
  update_background()
  updatePrompt()
  
  cur_stage=localStorage.getItem('stage')
  if(cur_stage=='5'){
    console.log('hi')
    doWin()
  } else{
    showRules()
  }
}

function showRules(){
  cur_stage=localStorage.getItem('stage')
  alert(stage_data[cur_stage]['rules'])

}

function update_background(){
  link='url("'+site_url+localStorage.getItem('stage')+'.jpg")'
  document.getElementById('content').style.backgroundImage = link;
}

function doWin(){
  t=document.getElementById('password').outerHTML='<video controls="controls" width="600" height="400" name="Video Name" src="http://happybirthdayyouoldassboi.arjungandhi.com/fuck.mov"></video>'
  window.localStorage.removeItem('stage')
}


function updatePrompt(){
  cur_stage=localStorage.getItem('stage')
  document.getElementById("big_prompt").innerHTML=stage_data[cur_stage]["big_prompt"]
  document.getElementById("little_prompt").innerHTML=stage_data[cur_stage]["little_prompt"]
  document.getElementById("query").placeholder=pholder[Math.floor(Math.random() * pholder.length)]
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
