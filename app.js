const preBtn = document.querySelector('.slider-left')
const afterBtn = document.querySelector('.slider-right')
const profilePic = document.querySelector('.profile-pic')
const dataPanel = document.querySelector('.content')
const student = [
  {
    name:'Tanya Sinclair',
    title: 'UX Engineer',
    photo: './images/image-tanya.jpg',
    testimonial: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough.I'm now in the job of my dreams and so excited about the future."
  },
  {
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer',
    photo: './images/image-john.jpg',
    testimonial: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."
  }
]

let state = 0
let contentHTML = ''

preBtn.addEventListener('click', (event) => {
  if (state !== 0) {
    state -= 1
  }
  
  profilePic.src = `${student[state].photo}`
  profilePic.alt = `${student[state].name.toLowerCase().trim()}`
  contentHTML = `
        <p class="testimonial">${student[state].testimonial}</p>
        <p class="name">${student[state].name}</p>
        <p class="title">${student[state].title}</p>
  `
  dataPanel.innerHTML = contentHTML
})

afterBtn.addEventListener('click', (event) => {
  if (state !== 1) {
    state += 1
  }
  
  profilePic.src = `${student[state].photo}`
  profilePic.alt = `${student[state].name.toLowerCase().trim()}`
  contentHTML = `
        <p class="testimonial">${student[state].testimonial}</p>
        <p class="name">${student[state].name}</p>
        <p class="title">${student[state].title}</p>
  `
  dataPanel.innerHTML = contentHTML
})

