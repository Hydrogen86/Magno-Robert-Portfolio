export function profile(){
   const resources = {
        img: "my-profile.png",
        Devname: "Robert Magno",
        aboutMe: "Hi, I am Robert. Let's work together and create functional application and websites."
    };
    const icons = {
        facebook: "./images/icons/facebook.png",
        instagram: "./images/icons/instagram.png",
        linkedIn: "./images/icons/linkedIn.png",
        whatsapp: "./images/icons/whatsapp.png",
        github: "./images/icons/github.png"
    }

    const profile = document.getElementById('profile-con');
    profile.innerHTML = `
      <img src="./images/${resources.img}" alt="" class="profile-pic">
        <h3 class="name">${resources.Devname}</h3>
        <p class="short-about-me">${resources.aboutMe}</p>

        <nav class="social-media-nav">
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100008716215080&mibextid=ZbWKwL" target="_blank"><img src="${icons.facebook}" alt="fb-icon"></a>        
            </li>
            <li>
              <a href="https://www.instagram.com/rawbeehurt/profilecard/?igsh=MWxxZjZscjB1aWh5OA==" target="_blank"><img src="${icons.instagram}" alt="insta-icon" ></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/robert-magno-8b038040b/" target="_blank"><img src="${icons.linkedIn}" alt="LinkedIn-icon"></a>
            </li>
            <li>
              <a href="https://wa.me/639266495922" target="_blank"><img src="${icons.whatsapp}" alt="whatsapp-icon"></a>
            </li>
            <li>
              <a href="https://github.com/Hydrogen86" target="_blank"><img src="${icons.github}" alt="github-icon"></a>
            </li>
          </ul>
        </nav>

        <button type="button" class="hire-me" id="hire-me__btn" onclick="window.open('./images/Magno-Robert_CV.pdf')">Download CV</button>
  `;

};