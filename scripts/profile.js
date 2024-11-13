const urlParams = new URLSearchParams(window.location.search); // Checks the URL for var
const userId = urlParams.get('user-id'); // Find the user ID from the URL var

const profileDivs = document.querySelectorAll('#profile-1, #profile-2, #profile-3, #profile-4, #profile-5, #profile-6, #unkown-user');  // Provides the JS script with allowed profiles

profileDivs.forEach(div => {
  div.style.display = 'none'; // Hides all the profiles on the page load
  if (div.id === `profile-${userId}`) {
    div.style.display = 'block'; // Shows the correct profile
  }
});

// A list of usernames corresponding to there user ID
let userName = "null";
switch (userId) {
  case '1':
    userName = 'pebble';
    break;
  case '2':
    userName = 'FiShHelMEt';
    break;
  case '3':
    userName = 'BatMinton';
    break;
  case '4':
    userName = 'voyager2ham';
    break;
  case '5':
    userName = 'pie';
    break;
  case '6':
    userName = 'beans';
    break;

  default:
    userName = 'unkown-user';
    break;
}

// Updates the page title
document.title = `${userName}'s Profle`;

// Code to update the header

// Selects the username element in the header
const usernameElement = document.getElementById('username');

// Updates the username text in the header
usernameElement.textContent = userName;