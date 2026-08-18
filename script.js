const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const letter=`Heyyy wifey ❤️🧿

First of all happiest birthday to you 🎉❤️✨

Once again many many returns of the day my love 🫂💋💋

You turned 21 today and in 21 what an amazing incredible person you are — the kindest and pure soul I ever met in my lifetime 💖👀

The kind of person you are is rare to find and impossible to describe. But let's dig in to you: the personality you hold, the beauty you have, the cuteness you show, and least but not the last, the hotness you have. You are such a dangerous combo of everything 😭❤️

And what a lucky boy I became that you are mine now. Such an incredible and amazing girl — or woh bhi meri, meri biwi. Ahh, mann, what a feeling I'm getting while writing it. Can't explain na, can't explain 💟💕

Praying for our future together 🥺✨

We spent our 21 years without each other, so we'll spend our every year together ❤️

I love you so much 👄💟

Happiest birthday my wifey 🧿💋💋`;

const reasons=[
"Your beautiful smile ❤️","Your pure heart 🥹","Your cute way of talking 💗","The way you care for me","Your confidence ✨",
"Your kindness","Your beautiful eyes 👀","Your cute anger 😂","Your laugh","The peace you bring",
"Your honesty","Your strength","Your little habits","The way you make ordinary days special",
"Your beauty inside and out","Your crazy side 😜","The way you understand me","Because you are YOU",
"Because you are my favourite person","Because you are my wifey 🧿","Because I simply love you ❤️"
];

function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth"});}
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>scrollToId(b.dataset.go)));
$("#openSurprise").onclick=()=>scrollToId("letter");
$("#bigSurprise").onclick=()=>$("#surpriseModal").classList.add("show");

$$(".photo-card").forEach(b=>b.onclick=()=>{ $("#modalImg").src=b.dataset.img; $("#photoModal").classList.add("show");});
$$("[data-close]").forEach(b=>b.onclick=()=>b.closest(".modal").classList.remove("show"));
$$(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("show")}));

let opened=false;
$("#letterBtn").onclick=()=>{
  $("#envelope").classList.add("open");
  if(opened)return;
  opened=true;
  let i=0, target=$("#typedLetter"); target.textContent="";
  const tick=()=>{if(i<letter.length){target.textContent+=letter[i++];setTimeout(tick,12)}};
  setTimeout(tick,500);
};

const rg=$("#reasonsGrid");
reasons.forEach((r,i)=>{const d=document.createElement("div");d.className="reason";d.innerHTML=`<span>${String(i+1).padStart(2,"0")}</span> &nbsp; ${r}`;rg.appendChild(d);});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){$$(".reason").forEach((r,i)=>setTimeout(()=>r.classList.add("show"),i*80));observer.disconnect()}}),{threshold:.15});
observer.observe(rg);

const jokes=[
"Because my heart saw you and said: 'Bas bhai, ab isi se shaadi karni hai.' 😂❤️",
"Because loving Ankita is my full-time job… salary is one smile and unlimited kisses. 😌💋",
"Why did my heart choose Ankita? Because apparently my heart has excellent taste. 😎❤️"
];
let ji=0;$("#jokeBtn").onclick=()=>{$("#joke").textContent=jokes[ji++%jokes.length]};

let score=0;
const area=$("#catchArea"), kiss=$("#kiss");
function moveKiss(){kiss.style.left=Math.random()*(area.clientWidth-55)+"px";kiss.style.top=Math.random()*(area.clientHeight-55)+"px"}
kiss.onclick=()=>{score++;$("#score").textContent=`Kisses caught: ${score} / 10`;if(score>=10){$("#score").textContent="Winner! Unlimited virtual kisses unlocked. 😘💋";score=0}moveKiss()};moveKiss();

const questions=[
["Who is the birthday girl? 😏",["Ankita ❤️","Nobody","My neighbour"],0],
["What is 19 June? 💍",["Our anniversary ❤️","My exam","Pizza day"],0],
["What am I calling you on this website? 😂",["Wifey 🧿","Boss","Professor"],0]
];
let qi=0;
function renderQuiz(){
 if(qi>=questions.length){$("#quizContent").innerHTML="<h3>Quiz complete! 🎉</h3><p>Result: 100% correct. Obviously. You are my perfect wifey. 😂❤️</p>";return}
 const [q,opts,ans]=questions[qi];
 $("#quizContent").innerHTML=`<h3>${q}</h3>${opts.map((o,i)=>`<button class="quiz-option" data-a="${i}">${o}</button>`).join("")}`;
 $$("#quizContent [data-a]").forEach(b=>b.onclick=()=>{qi++;renderQuiz()});
}
$("#quizBtn").onclick=()=>{$("#quizModal").classList.add("show");qi=0;renderQuiz()};

setInterval(()=>{
 const h=document.createElement("span");h.className="float-heart";h.textContent=["❤","💗","💖","✨"][Math.floor(Math.random()*4)];
 h.style.left=Math.random()*100+"%";h.style.fontSize=(12+Math.random()*18)+"px";h.style.animationDuration=(6+Math.random()*6)+"s";
 $("#hearts").appendChild(h);setTimeout(()=>h.remove(),13000);
},650);
