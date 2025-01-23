$("html").easeScroll();
/*---------- body ----------*/
const scrollLinks = document.querySelectorAll("a");
scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").includes("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      let scrollTarget;

      if (targetId) {
        scrollTarget = document.getElementById(targetId);
      } else {
        scrollTarget = document.body;
      }
      scrollTarget.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/*---------- portfolio ----------*/
// website
const swiperProject = document.querySelector(".swiper-project");
for (let i = 1; i <= 11; i++) {
  swiperProject.querySelector(".swiper-wrapper").insertAdjacentHTML(
    "beforeend",
    `
    <div class="swiper-slide">
      <img class="rounded-3" src="./src/images/gohan-carouse${String(
        i
      ).padStart(2, "0")}.png" alt="">
    </div>
  `
  );
}

var swiper = new Swiper(".swiper-project", {
  speed: 1000,
  spaceBetween: 1000,
  loop: true,
  effect: "fade",
  crossFade: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const swiperTitle = document.querySelector(".swiper-title h4");
const swiperTitleArr = swiperTitle.innerText.split("｜");
swiperTitle.innerHTML = "";

for (const char of swiperTitleArr[0]) {
  const span = document.createElement("span");
  span.innerText = char;
  swiperTitle.appendChild(span);
  if (swiperTitleArr[0].indexOf(char) == swiperTitleArr[0].length - 1) {
    const br = document.createElement("br");
    swiperTitle.appendChild(br);
  }
}
const swiperTitleSmall = document.createElement("small");
for (const char of swiperTitleArr[1]) {
  const span = document.createElement("span");
  span.innerText = char;
  swiperTitleSmall.appendChild(span);
  if (swiperTitleArr[1].indexOf(char) == swiperTitleArr[1].length - 1) {
    swiperTitle.appendChild(swiperTitleSmall);
  }
}

// other
const otherArea = document.querySelector("#portfolio .other");

const otherProjects = [
  {
    title: "翻頁鐘",
    description: "翻頁特效的時鐘，依照系統顯示模式會有不同的呈現。",
    img: "./src/images/filp-clock.png",
    link: "https://xuanlin129.github.io/flip_clock",
  },
  {
    title: "模式切換按鈕",
    description: "使用開關切換白天或黑夜。",
    img: "./src/images/alternation-of-day-and-night.png",
    link: "https://xuanlin129.github.io/alternation_of_day_and_night",
  },
  {
    title: "計算機",
    description: "計算機，如同一般計算機可以使用，有紀錄計算歷程的功能。",
    img: "./src/images/calculator.png",
    link: "https://xuanlin129.github.io/calculate",
  },
  {
    title: "R&CO",
    description: "使用 Bootstrap 切版的 RWD 響應式網頁。",
    img: "./src/images/R&CO.png",
    link: "https://xuanlin129.github.io/R-CO/",
  },
  {
    title: "蕃茄鐘",
    description:
      "提供使用者紀錄個人待辦事項。可於頁面輸入清單，也具編輯、刪除功能。除了以上功能，還可以選擇鬧鈴以及開關小鈴鐺，還可以下載成app在桌面",
    img: "./src/images/R&CO.png",
    link: "https://xuanlin129.github.io/pomodoro",
  },
  // { title: "", description: "", img: "", link: "" },
];

for (const item of otherProjects) {
  otherArea.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-6 col-lg-4 mb-3">
      <a href="${item.link}" target="_blank" class="card">
        <div class="card-title">
          <img src="${item.img}" alt="...">
        </div>
        <div class="card-body">
          <h6 class="card-title">${item.title}</h6>
          <p>${item.description}</p>
        </div>
      </a>
    </div>
  `
  );
}

/*---------- contact ----------*/
// Email.js
const contactForm = document.getElementById("contact-form");
const contactSubmit = document.getElementById("contact-submit");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_x249uev";
  const templateID = "template_69omhvb";
  if (this.checkValidity()) {
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        this.querySelectorAll(".form-control").forEach((input) => {
          input.value = "";
        });
        this.classList.remove("was-validated");
        console.log("已送出");
      },
      (err) => {}
    );
  }
});

// 表單驗證
(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
