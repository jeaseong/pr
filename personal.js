const data = [
  {
    img: "./img/personal_4.jpeg",
    title: "세상을 만드는 글자, 코딩",
    des: "코딩 시작하기 전 처음으로 읽었는데, 교양으로 읽기 좋은 책이라고 생각해요! 엘리스를 통해 처음 코딩을 접하신 분이라면 강추 합니다!",
  },
  {
    img: "./img/personal_1.jpeg",
    title: "INFJ-A",
    des: "mbti가 어느정도는 맞다고 생각합니다ㅎ",
  },
  {
    img: "./img/personal_2.jpeg",
    title: "축구",
    des: "매주 풋살하러 가는게 낙 중에 하나입니다! 용산에서 합니다 (TMI...)",
  },
  {
    img: "./img/personal_3.jpeg",
    title: "global commerce",
    des: "주 전공은 국제무역사입니다. 부 전공은 AI융합학부입니다",
  },
  {
    img: "./img/personal_4.jpeg",
    title: "세상을 만드는 글자, 코딩",
    des: "코딩 시작하기 전 처음으로 읽었는데, 교양으로 읽기 좋은 책이라고 생각해요! 엘리스를 통해 처음 코딩을 접하신 분이라면 강추 합니다!",
  },

  {
    img: "./img/personal_1.jpeg",
    title: "INFJ-A",
    des: "mbti가 어느정도는 맞다고 생각합니다ㅎ",
  },
];
const personalList = document.querySelector(".personal_list");

const displayPersonal = () => {
  data.forEach((item, key) => {
    const personalArticle = document.createElement("article");
    personalArticle.className = "personal_container carousel-content";
    if (key === 0) personalArticle.id = "last_clone";
    if (key === data.length - 1) personalArticle.id = "first_clone";

    const personalImg = document.createElement("img");
    personalImg.setAttribute("src", item.img);
    personalImg.className = "personal_img";

    const personalTitle = document.createElement("h3");
    personalTitle.className = "personal_title";
    personalTitle.innerText = `${item.title}`;

    const personalSub = document.createElement("p");
    personalSub.className = "personal_title-sub";
    personalSub.innerText = `${item.des}`;

    personalArticle.appendChild(personalImg);
    personalArticle.appendChild(personalTitle);
    personalArticle.appendChild(personalSub);
    personalList.appendChild(personalArticle);
  });
};

displayPersonal();
