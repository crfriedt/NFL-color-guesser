// Grab UI Elements
const colorOne = document.querySelector('.colorOne'),
      colorTwo = document.querySelector('.colorTwo'),
      colorThree = document.querySelector('.colorThree'),
      randomTeamBtn = document.querySelector('.randomTeamButton'),
      input = document.querySelector('input'),
      submitBtn = document.querySelector('.submitAnswer'),
      alert = document.querySelector('.alert');

// Event Handlers

/* Random Team Button
  on click it will randomly select a team object, then change the displayed colors to that team color

  if the team only has two colors, modify css
*/
var selectedTeam;
randomTeamBtn.addEventListener('click', function(){
  input.value = '';
  let generatedTeam = randomSelect();
  selectedTeam = generatedTeam;
  console.log(generatedTeam);
  if(generatedTeam.colors.length === 3){
    colorTwo.style.display = 'block';
    colorOne.style.backgroundColor = generatedTeam.colors[0];
    colorTwo.style.backgroundColor = generatedTeam.colors[1];
    colorThree.style.backgroundColor = generatedTeam.colors[2];
  } else if(generatedTeam.colors.length === 2){
    colorTwo.style.display = 'none';
    colorOne.style.backgroundColor = generatedTeam.colors[0];
    colorThree.style.backgroundColor = generatedTeam.colors[1];
  }

});

/* Submit answer btn
  on click it will evaluate whether the input matches the generated team name. if it does then display success alert and clear input field.

  if not correct then display failed alert and clear input field.
*/

submitBtn.addEventListener('click', function(){
  if(input.value.toLowerCase() === selectedTeam.teamName.toLowerCase()){
    alert.style.display = 'block';
    alert.style.backgroundColor = 'green';
    alert.innerHTML = 'Success !';
    setTimeout(function(){
      alert.style.display = 'none';
      alert.innerHTML = 'none';
    },3000);
    // success
    // clear input
  } else {
    alert.style.display = 'block';
    alert.style.backgroundColor = 'red';
    alert.innerHTML = 'Incorrect !';
    setTimeout(function(){
      alert.style.display = 'none';
      alert.innerHTML = 'none';
    },3000);

    // display error
    // clear input
  }
});

// Randomly select team function
function randomSelect(){
 return nflTeams[Math.floor(Math.random() * nflTeams.length)];
};



// NFL Teams
const nflTeams = [
  { teamName: 'Arizona Cardinals',
    colors: ['#97233F', '#000000', '#FFB612' ]
  },
  { teamName: 'Atlanta Falcons',
    colors: ['#A71930', '#000000', '#A5ACAF']
  },
  { teamName: 'Baltimore Ravens',
    colors: ['#241773', '#000000', '#9E7C0C']
  },
  {
    teamName: 'Buffalo Bills',
    colors: ['#00338D', '#C60C30']
  },
  {
    teamName: 'Carolina Panthers',
    colors: ['#0085CA', '#101820', '#BFC0BF']
  },
  {
    teamName: 'Chicago Bears',
    colors: ['#0B162A', '#C83803']
  },
  {
    teamName: 'Cincinnati Bengals',
    colors: ['#FB4F14', '#000000']
  },
  {
    teamName: 'Cleveland Browns',
    colors: ['#311D00', '#FF3C00']
  },
  {
    teamName: 'Dallas Cowboys',
    colors: ['#003594', '#041E42', '#869397']
  },
  {
    teamName: 'Denver Broncos',
    colors: ['#FB4F14', '#002244']
  },
  {
    teamName: 'Detroit Lions',
    colors: ['#0076B6', '#B0B7BC', '#000000']
  },
  {
    teamName: 'Green Bay Packers',
    colors: ['#203731', '#FFB612']
  },
  {
    teamName: 'Houston Texans',
    colors: ['#03202F', '#A71930']
  },
  {
    teamName: 'Indianapolis Colts',
    colors: ['#002C5F','#A2AAAD']
  },
  {
    teamName: 'Jacksonville Jaguars',
    colors: ['#101820', '#D7A22A', '#006778']
  },
  {
    teamName: 'Kansas City Chiefs',
    colors: ['#E31837', '#FFB81C']
  },
  {
    teamName: 'Los Angeles Chargers',
    colors: ['#002A5E', '#FFC20E', '#0080C6']
  },
  {
    teamName: 'Los Angeles Rams',
    colors: ['#002244', '#866D4B']
  },
  {
    teamName: 'Miami Dolphins',
    colors: ['#008E97', '#FC4C02', '#005778']
  },
  {
     teamName: 'Minnesota Vikings',
     colors: ['#4F2683', '#FFC62F']
  },
  {
    teamName: 'New England Patriots',
    colors: ['#002244', '#C60C30', '#B0B7BC']
  },
  {
    teamName: 'New Orleans Saints',
    colors: ['#D3BC8D', '#101820']
  },
  {
    teamName: 'New York Giants',
    colors: ['#0B2265', '#A71930', '#A5ACAF']
  },
  {
    teamName: 'New York Jets',
    colors: ['#125740', '#000000', '#FFF']
  },
  {
    teamName: 'Oakland Raiders',
    colors: ['#000000', '#A5ACAF']
  },
  {
    teamName: 'Philadelphia Eagles',
    colors: ['#004C54', '#A5ACAF', '#000000']
  },
  {
    teamName: 'Pittsburgh Steelers',
    colors: ['#FFB612', '#003087', '#C60C30']
  },
  {
    teamName: 'San Francisco 49ers',
    colors: ['#AA0000', '#B3995D']
  },
  {
    teamName: 'Seattle Seahawks',
    colors: ['#002244', '#69BE28', '#A5ACAF']
  },
  {
    teamName: 'Tampa Bay Buccaneers',
    colors: ['#D50A0A', '#FF7900', '#0A0A08']
  },
  {
    teamName: 'Tennessee Titans',
    colors: ['#0C2340', '#4B92DB', '#C8102E']
  },
  {
    teamName: 'Washington Redskins',
    colors: ['#773141', '#FFB612']
  }
];