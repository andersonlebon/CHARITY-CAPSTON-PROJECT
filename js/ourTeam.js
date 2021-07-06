const teamData = [
  {
    id: 1,
    name: 'Anderson CALEB',
    picture: './images/caleb.jpg',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    moreInfo:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis hic',
  },
  {
    id: 1,
    name: 'Anderson CALEB',
    picture: './images/caleb.jpg',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    moreInfo:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis hic',
  },
  {
    id: 1,
    name: 'Anderson CALEB',
    picture: './images/caleb.jpg',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    moreInfo:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis hic',
  },
];

const team = document.querySelector('.team');
const seeMore = document.querySelector('.see-more');
const seeMoreText = document.querySelector('.see-more span');
const seeLess = [teamData[0], teamData[1]];
team.innerHTML = '';
seeMoreText.innerText = 'See More';

seeLess.forEach((data) => {
  const card = document.createElement('li');
  card.className = 'card';
  card.classList.add('d-flex-row-center');
  card.innerHTML = `<div class="card-img">
              <img class="img-user" src=${data.picture} alt="" />
              <img class="img-bg" src="./images/bg-square.jpg" alt="" />
            </div>
            <div class="card-body">
              <h2>${data.name}</h2>
              <h3>${data.info}</h3>
              <p>
                ${data.moreInfo}
              </p>
            </div>
          `;

  team.appendChild(card);
});
let see = true;

seeMore.addEventListener('click', () => {
  if (see) {
    team.innerHTML = '';
    teamData.forEach((data) => {
      const card = document.createElement('li');
      card.className = 'card';
      card.classList.add('d-flex-row-center');
      card.innerHTML = `<div class="card-img">
              <img class="img-user" src=${data.picture} alt="" />
              <img class="img-bg" src="./images/bg-square.jpg" alt="" />
            </div>
            <div class="card-body">
              <h2>${data.name}</h2>
              <h3>${data.info}</h3>
              <p>
                ${data.moreInfo}
              </p>
            </div>
          `;
      seeMoreText.innerText = 'See Less';
      team.appendChild(card);
    });
    see = false;
  } else {
    team.innerHTML = '';
    seeLess.forEach((data) => {
      const card = document.createElement('li');
      card.className = 'card';
      card.classList.add('d-flex-row-center');
      card.innerHTML = `<div class="card-img">
              <img class="img-user" src=${data.picture} alt="" />
              <img class="img-bg" src="./images/bg-square.jpg" alt="" />
            </div>
            <div class="card-body">
              <h2>${data.name}</h2>
              <h3>${data.info}</h3>
              <p>
                ${data.moreInfo}
              </p>
            </div>
          `;

      team.appendChild(card);
    });
    seeMoreText.innerText = 'See More';
    see = true;
  }
});

const donator = document.querySelector('.donator');
const donatorText = document.querySelector('.text-donator');

donator.addEventListener('mouseenter', () => {
  donatorText.classList.add('anim-donator');
});

donator.addEventListener('mouseleave', () => {
  donatorText.classList.add('anim-donator');
});
