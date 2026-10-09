const reasons = [
  "terima kasih kerana menjadi lelaki yang bukan sekadar hadir, tetapi benar-benar ada",
  "terima kasih untuk setiap usaha, kesabaran dan perhatian",
  "thank u, udah hadir dan ada disaat aku ngerasa gak punya siapa-siapa ngerasa sendirian di waktu dimana dunia ku hampir hancur, kamu datang disela itu memberikan segala keindahan dan semangat tanpa kamu sadari aku selalu berdoa dan ingin terus mengatakan terimakasih sebanyak banyaknya",
  "thank you for loving me.",
  "thank you for choosing me. every day, even when it is not easy",
  "thank you for the little things that you might not even realize are so important",
  "in case i don't say it enough im proud of you im rooting for you don't push urself too hard just focused on ur goals bcs im right behind you to cheer you and praying for ur success may God always guide and bless us",
  "semoga pundak kecilmu selalu dikuatkan oleh Tuhan, dalam setiap lelah yang tak pernah kamu ceritakan, dalam setiap air mata yang jatuh diam-diam tanpa saksi, dan dalam setiap doa yang hanya berani kamu bisikkan dalam hati. mungkin dunia tidak selalu mengerti seberapa berat yang kamu jalani, tapi Tuhan tau, Tuhan melihat, dan Tuhan tidak pernah abai pada setiap perjuanganmu yang paling sunyi, tetap bertahan, karena sejauh ini kamu sudah luar biasa kuat, meski sering kali kamu merasa rapuh.",
  "trust me. actually i care about you but i don't know how to express it to you. i hope everything you're working on goin well & keep going.....",
  "semoga tahun ini banyak hal hal baik yang Dateng ke kamu ya bian",
  "i will support you from a far",
  "thank u for being there and taking such good care of me since the very beginning.",
  "thank u for always choosing patience for the sake of our relationship.",
  "thank u for making teh happiest person i could ever ask for my heart is sooo full and i'm booking forward to creating many more happy memories with u.",
  "I'm always here for you",
  "dari banyaknya orang-orang yang datang di kehidupan aku terimakasih karna kamu udah jadi yang terbaik diantara mereka",
  "i love the way your voice feels just like what others call as home, the way your presence males the World quieter when everything inside me feels too loud.",
  "i love the way you understand me without question, the way you stay even when i push you away, the way you choose me in moments i can't even choose myself.",
  "makasih banyak ya karena sampai hari ini kamu masih jadi rumah yang paling nyaman buat aku.",
  "trimakasih buat aku ngerasa disayang tanpa harus jadi orang lain",
  "thank you for caring about me",
  "thank you for being my biggest supporter",
  "i always pray for you to have wonderful life and always be a good man",
  "i always thank god giving u to me.",
  "thank you to make me feel loved and appreciated.",
  "I'll always love you no matter what you do, I didn't fall in love with what you could give me I fell in love with your soul. and your mistakes will never outweigh the person you are.",
  "thank you for always hearing my silly jokes",
  "thank you for treating me well",
  "thankyou for listening to my complaints even though u are actually tired. ilysm",
  "no matter what you think about yourself, you'll always be the most gentle, understanding, sweet, handsome boy in my eyes.",
  "trimakasih udaa selalu usahain aku",
  "trimakasih udaa ngertiin ego aku",
  "maaf buat semua kesalahan yang aku buat",
  "trimakasi udaa peduli sama aku",
  "trimakasih make me feel good about myself",
  "trimakasih atas respon kamu",
  "trimakasih udaa inget detail detail kecil",
  "reason why i love you",
  "your eyes",
  "your attitude",
  "your voice",
  "your smile",
  "You're understanding",
  "Your laugh",
  "You're gentle",
  "i love seeing your name on my notifications",
  "i love your beautiful heart",
  "i love your softness",
  "i love your soft touch",
  "i love your hugging",
  "i love how loyal u are",
  "how i love the way u look at me",
  "i love the way u hold my hand",
  "i loves your forgiveness",
  "i love spending time with you",
  "i love hearing about ur day",
  "i love your beautiful soullll",
  "I love your honesty",
  "I love ur passion for the things u love",
  "I love the way I get excited every time I get a notification from you",
  "I love the way I get nervous around you",
  "I love how u tell me when I'm doing something wrong",
  "i love how u don't care what i look like around you",
  "I love how ur hugs feel like home",
  "I love how u laugh is so contagious",
  "I love how you accept me for who I am",
  "i love how can listen to my long random rants about anything",
  "i love how like reallyyy listen to my when i need you",
  "i love ur confidence in yourself",
  "i love ur patience with me when i don't know to say",
  "i love how you very caring",
  "i love how u always a make time for me",
  "i love how you help me whenever i need it",
  "i love when u tell me u love me",
  "i love ur perfect personality",
  "i love how ur very trustworthy",
  "i love how u always bring out the best in me",
  "i love how my heart feels good anytime i see u in a photo or in person",
  "i love how u always try ur best to understand me",
  "i love ur inner child",
  "i love showing of to everyone that i have best boyf in the word",
  "i love how u believe in me",
  "i love you more than words can say",
  "i love how u cheering me on and telling me how you are so proud of me",
  "i love your gorgeous brown eyesss",
  "i love u make me feels safe",
  "You made me a find a reason to love myself again",
  "How you made me realize na there is so much more to life than what I thought it was",
  "The way you remind me every chance you get on how you are so sure about us",
  "How we'd talk about our future so casually like we're so sure we will make those things happen eventually",
  "The way you remember small details about me",
  "How you always manage to make time for me despite having important things to do",
  "Whenever you felt comfortable enough to tell me things you wouldn't tell to anyone else",
  "You made me realize that home can be a person too",
  "Your presence being enough for me shows much you mean to me as a person",
  "How you correct me even though I already know what's right or wrong anyways",
  "You helped me see the good in life when back then every single thing just seemed so depressing",
  "The way you captivated my heart more than any else could ever do",
  "You made me love you so much that you're the only person I want to spend the rest of my life with",
  "You're my forever home 💙"
];

let currentReasonIndex = 0;

function openTab(evt, tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');
  
  contents.forEach(content => content.style.display = 'none');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(tabId).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

function showNextReason() {
  const reasonText = document.getElementById('reason-text');
  const reasonCounter = document.getElementById('reason-counter');
  
  reasonText.style.opacity = 0;
  
  setTimeout(() => {
    reasonText.innerText = reasons[currentReasonIndex];
    reasonCounter.innerText = `Alasan #${currentReasonIndex + 1} dari 100`;
    reasonText.style.opacity = 1;
    currentReasonIndex = (currentReasonIndex + 1) % reasons.length;
  }, 200);
}

function toggleMusic() {
  const music = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  
  if (music.paused) {
    music.play().catch(e => console.log("Akses audio terkunci"));
    btn.innerText = "⏸️ Pause Music";
  } else {
    music.pause();
    btn.innerText = "🎵 Play Music";
  }
}

const stickers = ['💙', '🪐', '✨', '🤍', '🎂', '🎉', '🎈'];

function createFloatingSticker() {
  const container = document.getElementById('floating-container');
  if (!container) return;
  const sticker = document.createElement('div');
  
  sticker.classList.add('sticker');
  sticker.innerText = stickers[Math.floor(Math.random() * stickers.length)];
  sticker.style.left = Math.random() * 100 + 'vw';
  sticker.style.animationDuration = (Math.random() * 3 + 4) + 's';
  
  container.appendChild(sticker);
  
  setTimeout(() => {
    sticker.remove();
  }, 7000);
}

setInterval(createFloatingSticker, 1500);

function saveWish() {
  const input = document.getElementById('wish-input');
  const display = document.getElementById('saved-wish-text');
  
  if (input.value.trim() !== "") {
    display.innerText = `✨ Harapan Abian disimpan: "${input.value}"`;
    input.value = "";
  }
}