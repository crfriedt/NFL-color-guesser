// Grab UI Elements
const colorOne = document.querySelector('.colorOne'),
      colorTwo = document.querySelector('.colorTwo'),
      colorThree = document.querySelector('.colorThree'),
      randomTeamBtn = document.querySelector('.randomTeamButton'),
      input = document.querySelector('input'),
      submitBtn = document.querySelector('.submitAnswer');

// Event Handlers



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

  }
];

