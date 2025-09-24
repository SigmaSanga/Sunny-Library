// ==== Book Data Array ====
const books = [
  {
    title:"Hamlet", year:1603, author:"William Shakespeare", nsfw:false, desc:"Prince Hamlet seeks revenge for his father's murder.",
    cover:"https://d28hgpri8am2if.cloudfront.net/book_images/cvr9780743477123_9780743477123_hr.jpg",
    pdf:"https://ia600202.us.archive.org/0/items/tragedyofham00shak/tragedyofham00shak.pdf",
    genre:"Classic"
  },
  {
    title:"Pride and Prejudice", year:1813, author:"Jane Austen", nsfw:false, desc:"Romantic novel by Jane Austen.",
    cover:"https://www.harryhartog.com.au/cdn/shop/products/9781435159631.jpg?v=1662072834",
    pdf:"https://ia601309.us.archive.org/31/items/PrideAndPredjudice_362/pride_and_predjudice.pdf",
    genre:"Romance"
  },
  {
    title:"The Great Gatsby", year:1925, author:"F. Scott Fitzgerald", nsfw:false, desc:"A novel by F. Scott Fitzgerald exploring the American Dream.",
    cover:"https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg",
    pdf:"https://dn790005.ca.archive.org/0/items/in.ernet.dli.2015.184960/2015.184960.The-Great-Gatsby.pdf",
    genre:"Classic"
  },
  {
    title:"Macbeth", year:1606, author:"William Shakespeare", nsfw:false, desc:"A Shakespearean tragedy about ambition and fate.",
    cover:"https://m.media-amazon.com/images/I/71i-bobOsYL._UF894,1000_QL80_.jpg",
    pdf:"https://folger-main-site-assets.s3.amazonaws.com/uploads/2022/11/macbeth_PDF_FolgerShakespeare.pdf",
    genre:"Classic"
  },
  {
    title: "Othello", year: 1603, author:"William Shakespeare", nsfw: false, desc: "A tragedy about jealousy and betrayal.",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtmwm6CCKIDXgf1I9MMdTabi0t12UXOr84g&s",
    pdf: "https://folger-main-site-assets.s3.amazonaws.com/uploads/2022/11/othello_PDF_FolgerShakespeare.pdf",
    genre: "Classic"
  },
  {
    title: "A Midsummer Night's Dream", year: 1605, author:"William Shakespeare", nsfw: false, desc: "A comedy about love and magic.",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pary3IKsMj8dqd4POEEkgHsVc_45DV5lRg&s",
    pdf: "https://www.ucm.es/data/cont/docs/119-2014-02-19-3.%20MidsummerNightDream.pdf",
    genre: "Classic"
  },
  {
    title: "Romeo and Juliet", year: 1597, author:"William Shakespeare", nsfw: false, desc: "A tragedy about two star-crossed lovers.",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmlQUz-oey45FjamzYpaEqUAA77IbiB2CZA&s",
    pdf: "https://folger-main-site-assets.s3.amazonaws.com/uploads/2022/11/romeo-and-juliet_PDF_FolgerShakespeare.pdf",
    genre: "Classic"
  },
  {
    title: "The Grapes of Wrath", year: 1939, author:"John Steinbeck", nsfw: false, desc: "A novel about the struggles of an Oklahoma family during the Great Depression.",
    cover: "https://img.perlego.com/book-covers/4311726/9781998114863.jpg",
    pdf: "https://ca01001129.schoolwires.net/cms/lib/CA01001129/Centricity/Domain/270/grapes_of_wrath_john_steinbeck2.pdf",
    genre: "Historical Fiction"
  },
  {
    title: "Jane Eyre", year: 1847, author:"Charlotte Brontë", nsfw: false, desc: "A novel about a governess's moral and emotional journey.",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXL4mseCESkRsC9-RQDfy1ZepMYji7TM_NoQ&s",
    pdf: "https://www.ucm.es/data/cont/docs/119-2014-04-09-Jane%20Eyre.pdf",
    genre: "Romance"
  },
  {
    title: "Great Expectations", year: 1861, author:"Charles Dickens", nsfw: false, desc: "A novel about an orphan's journey from poverty to wealth.",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpssE1trwEe9UFZVQUq4vLNTL94GM4OblEGA&s",
    pdf: "https://dn720505.ca.archive.org/0/items/greatexpectation0000dick_c1y6/greatexpectation0000dick_c1y6.pdf",
    genre: "Classic"
  }
];

// ==== Filters ====
const yearFilter = document.getElementById("yearFilter");
const genreFilter = document.getElementById("genreFilter");

const years = [...new Set(books.map(b=>b.year))].sort((a,b)=>b-a);
years.forEach(y=>{let opt=document.createElement("option"); opt.value=y; opt.textContent=y; yearFilter.appendChild(opt);});

const genres = [...new Set(books.map(b=>b.genre))].sort();
genres.forEach(g=>{let opt=document.createElement("option"); opt.value=g; opt.textContent=g; genreFilter.appendChild(opt);});

// ==== Generate gallery ====
const gallery = document.getElementById("gallery");
books.forEach(b=>{
  const div = document.createElement("div");
  div.className="book";
  div.dataset.year=b.year;
  div.dataset.title=b.title.toLowerCase();
  div.dataset.author=b.author.toLowerCase();
  div.dataset.genre=b.genre;
  div.innerHTML = `
    <img src="${b.cover}" alt="${b.title}">
    <h3>${b.title}</h3>
    <div class="details">
      <p><strong>Title:</strong> ${b.title}</p>
      <p><strong>Author:</strong> ${b.author}</p>
      <p><strong>Year:</strong> ${b.year}</p>
      <p><strong>Genre:</strong> ${b.genre}</p>
      <p><strong>Description:</strong> ${b.desc}</p>
      <a href="${b.pdf}" target="_blank">View PDF</a>
    </div>
  `;
  gallery.appendChild(div);
});

// ==== Filter Function ====
const search = document.getElementById("search");
function filterBooks(){
  const s = search.value.toLowerCase();
  const y = yearFilter.value;
  const g = genreFilter.value;
  gallery.querySelectorAll(".book").forEach(book=>{
    const title = book.dataset.title;
    const author = book.dataset.author;
    const year = book.dataset.year;
    const genre = book.dataset.genre;
    let show = true;
    if(s && !title.includes(s) && !author.includes(s)) show=false;
    if(y && year!=y) show=false;
    if(g && genre!=g) show=false;
    book.style.display=show?"":"none";
  });
}
search.addEventListener("input",filterBooks);
yearFilter.addEventListener("change",filterBooks);
genreFilter.addEventListener("change",filterBooks);

// ==== Toggle Details Panel ====
gallery.addEventListener("click", e=>{
  let bookDiv = e.target.closest(".book");
  if(bookDiv){
    const details = bookDiv.querySelector(".details");
    gallery.querySelectorAll(".details").forEach(d=>{if(d!==details)d.style.display="none";});
    details.style.display = (details.style.display==="block")?"none":"block";
  }
});
