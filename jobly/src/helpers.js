import jwt from 'jsonwebtoken';

function getCurrentUser() {
  //let user = localStorage.getItem('joblyUser');
  //let user = jwt.decode(JSON.parse(localStorage.getItem('joblyUser'))) || null;
  let joblyUser = localStorage.getItem('joblyUser');
  if (joblyUser) {
    let parsedUser = JSON.parse(joblyUser);
    let user = jwt.decode(parsedUser._token);

    return user;
  } else {
    return null;
  }

}

export { getCurrentUser };