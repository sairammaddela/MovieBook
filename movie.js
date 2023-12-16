let card=document.querySelector('.cardlist');
 const genres=[
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ];
let generes_btn=document.getElementById("Geners-btn");
let generes=document.querySelector(".Genre");
generes.style.display="none";
generes_btn.addEventListener("click",()=>{
  generes.className="Genre1";
  generes.style.display="block";
  generes_btn.style.display="none";
  //generes_btn.style.minWidth="20vw";
});
let close_fun=document.getElementById("close");
close_fun.addEventListener("click",()=>{
  generes.className="Genre";
  
  setTimeout(()=>{
    generes.style.display="none";
    generes_btn.style.display="flex";
  },1000);
})
let ul=document.getElementById("genrelist");
let z=0;
let idupdate=document.getElementById("genrelist");
function genresearch(e)
{
  ul.remove();
  idupdate.remove();
  const ull=document.createElement("ul");
  ull.id="genrelist";
  genres.forEach((ele)=>{
    const smallele=ele.name.toLowerCase();
    const smallvalue=e.target.value.toLowerCase();
    if(smallele.includes(smallvalue))
    {
      const li=document.createElement("li");
    const btn=document.createElement("button");
    btn.innerText=ele.name;
    console.log(e.target.value);
    btn.style.color="white";
    //btn.id=`genrebtn${z}`;
    btn.setAttribute("onclick","handlefilterbutton(event)")
    btn.className="genrebtn";
    li.className="genreitem";
    li.append(btn);
    ull.append(li);
    generes.append(ull);
    idupdate=document.getElementById("genrelist");
    }
  })
}
function handlefilterbutton(event)
{
  let genre_id_btn=0;
    //console.log(genre_action1.innerText);
    genres.forEach((val)=>{
        if(val.name==event.target.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
  //console.log(event.target.innerText);
}
genres.forEach((ele)=>{
    const li=document.createElement("li");
    const btn=document.createElement("button");
    btn.innerText=ele.name;
    btn.style.color="white";
    btn.id=`genrebtn${z}`;
    btn.className="genrebtn";
    li.className="genreitem";
    li.append(btn);
    ul.append(li);
    z++;
})
  
for(let i=2023;i>2020;i--)
{
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}`).then((data)=>{
    const k=data.json();
    k.then((data1)=>{
        data1.results.forEach(element => {
            
            let b=document.createElement("div");
            let anchor=document.createElement("button");
            b.className="cardItem";
            anchor.className="anch-btn";
            anchor.setAttribute("onclick","checkoutHandler(event)");
            anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
            b.append(anchor);
            let image=document.createElement("img");
            image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
            image.setAttribute("height","250px");
            image.setAttribute("width","200px");
            const para=document.createElement("h3");
            para.innerText=element.original_title;
            anchor.append(image);
            anchor.append(para);
            card.append(b);
            
        });        
    })
});
}
const genre_action0=document.querySelector("#genrebtn0");
const genre_action1=document.querySelector("#genrebtn1");
const genre_action2=document.querySelector("#genrebtn2");
const genre_action3=document.querySelector("#genrebtn3");
const genre_action4=document.querySelector("#genrebtn4");
const genre_action5=document.querySelector("#genrebtn5");
const genre_action6=document.querySelector("#genrebtn6");
const genre_action7=document.querySelector("#genrebtn7");
const genre_action8=document.querySelector("#genrebtn8");
const genre_action9=document.querySelector("#genrebtn9");
const genre_action10=document.querySelector("#genrebtn10");
const genre_action11=document.querySelector("#genrebtn11");
const genre_action12=document.querySelector("#genrebtn12");
const genre_action13=document.querySelector("#genrebtn13");
const genre_action14=document.querySelector("#genrebtn14");
const genre_action15=document.querySelector("#genrebtn15");
const genre_action16=document.querySelector("#genrebtn16");
const genre_action17=document.querySelector("#genrebtn17");
const genre_action18=document.querySelector("#genrebtn18");

genre_action0.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action0.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action0.innerText)
        {
            genre_id_btn=val.id;
        }
    });
//genre_id_btn=28;
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
        async function promise(){
          const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
            const res=await promise1.json();
                res.results.forEach(element => {
            
                    let b=document.createElement("div");
                    let anchor=document.createElement("button");
                    b.className="cardItem";
                    anchor.className="anch-btn";
                    anchor.setAttribute("onclick","checkoutHandler(event)");
                    anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                    b.append(anchor);
                    let image=document.createElement("img");
                    image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                    image.setAttribute("height","250px");
                    image.setAttribute("width","200px");
                    const para=document.createElement("h3");
                    para.innerText=element.original_title;
                    anchor.append(image);
                    anchor.append(para);
                    cardlist2.append(b);
                    
                });
            
          }
          promise();
        


    }
});
genre_action1.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action1.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action1.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action2.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action2.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action2.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action3.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action3.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action3.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action4.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action4.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action4.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action5.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action5.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action5.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action6.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action6.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action6.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action7.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action7.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action7.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action8.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action8.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action8.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action9.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action9.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action9.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();

    }
});
genre_action10.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action10.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action10.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action11.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action11.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action11.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action12.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action12.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action12.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action13.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action13.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action13.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action14.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action14.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action14.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action15.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action15.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action15.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();

    }
});
genre_action16.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action16.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action16.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action17.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action17.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action17.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
genre_action18.addEventListener("click",()=>{
    let genre_id_btn=0;
    console.log(genre_action18.innerText);
    genres.forEach((val)=>{
        if(val.name==genre_action18.innerText)
        {
            genre_id_btn=val.id;
        }
    });
    const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);


    for(let i=2023;i>2020;i--)
    {
      async function promise(){
        const promise1=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}&with_genres=${genre_id_btn}`)
          const res=await promise1.json();
              res.results.forEach(element => {
          
                  let b=document.createElement("div");
                  b.className="cardItem";
                  let anchor=document.createElement("button");
                  anchor.className="anch-btn";
                  anchor.setAttribute("onclick","checkoutHandler(event)");
                  anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
                  b.append(anchor);
                  let image=document.createElement("img");
                  image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
                  image.setAttribute("height","250px");
                  image.setAttribute("width","200px");
                  const para=document.createElement("h3");
                  para.innerText=element.original_title;
                  anchor.append(image);
                  anchor.append(para);
                  cardlist2.append(b);
                  
              });
          
        }
        promise();


    }
});
let search=document.getElementById("search_field");
const searchbtn=document.getElementById("searchbtn");
searchbtn.addEventListener("click",()=>{
  const cardItems=document.querySelector(".cardlist");
    cardItems.remove();
    const maintemp=document.querySelector(".main_temp");
    const cardlist2=document.createElement("div");
    cardlist2.setAttribute("class","cardlist");
    maintemp.append(cardlist2);
    for(let i=2023;i>2020;i--)
    {
      async function promise()
      {
        const promise1=await fetch(`https://api.themoviedb.org/3/search/movie?query=${search.value}&api_key=7408da8a1656d63fff2f40e40e3b2bb5&primary_release_year=${i}`);
        const res=await promise1.json();
        //console.log(res.results);
        res.results.forEach(element => {
        let b=document.createElement("div");
        b.className="cardItem";
        let anchor=document.createElement("button");
        anchor.className="anch-btn";
        anchor.setAttribute("onclick","checkoutHandler(event)");
        anchor.setAttribute("value",`https://api.themoviedb.org/3/movie/${element.id}?api_key=7408da8a1656d63fff2f40e40e3b2bb5`);
        b.append(anchor);
        let image=document.createElement("img");
        image.setAttribute("src",`https://image.tmdb.org/t/p/original/${element.poster_path}`);
        image.setAttribute("height","250px");
        image.setAttribute("width","200px");
        const para=document.createElement("h3");
        para.innerText=element.original_title;
        anchor.append(image);
        anchor.append(para);
        cardlist2.append(b);
          
      });
      }
      promise();
    }
});
const body=document.querySelector("body");
let download_path="";
let tmdb_id;
let movie_title;
function checkoutHandler(e)
{
  const nav=document.getElementById("navbar");
  const sec=document.getElementById("mainsection")
  nav.style.display="none";
  sec.style.display="none";
  const toggle=document.getElementById("toggle");
  toggle.id="toggle1";
  const h1=document.getElementById("movietitle");
  const des=document.getElementById("moviedescription");
  const year=document.getElementById("movieyear");
  const image=document.getElementById("movieimage");
  const moviegenre=document.getElementById("moviegenres");
  const url=e.currentTarget.value;
  
  console.log(url);
  fetch(url).then((data)=>{
    data.json().then(data1=>{
      //console.log(data1);
      h1.innerText=data1.original_title;
      movie_title=data1.original_title;
      const arrr=data1.overview.split(".");
      des.innerText=arrr[0];
      year.innerText=data1.release_date.substring(0,4);
      image.setAttribute("src",`https://image.tmdb.org/t/p/original/${data1.poster_path}`);
      download_path=`https://image.tmdb.org/t/p/original/${data1.poster_path}`;
      tmdb_id=data1.id;
      body.id="body";
      let arrr2=[];
      arrr2=data1.genres.map((info)=>{
        console.log(info.name,arrr2);
        return info.name;
      });
      console.log(arrr2);
      const str=arrr2.join(" ");
      console.log(str);
      moviegenre.innerText=str;


    })
  })
}
const paybtn=document.getElementById("paybtn");
const checksection=document.getElementById("checksection");
const body1=document.querySelector("body");
const paymentcard=document.getElementById("forms");
const checkoutmovie=document.getElementById("checkoutmovie");
paybtn.addEventListener("click",()=>{
    checksection.style.display="none";
    //const card=document.createElement("form");
    paymentcard.id="forms1";
    
    checkoutmovie.innerText=movie_title;
    
});
const paid=document.getElementById("finalpay");
paid.innerText="Pay 149Rs";
let videospage=document.getElementById("vidoes");
const download=document.createElement("button");
paid.addEventListener("click",()=>{
    console.log(tmdb_id);
    download.setAttribute("type","button");
    //anc.setAttribute("download","test");
    download.className="btn btn-primary";
    download.innerText="Play";
    paymentcard.append(download);
});
download.addEventListener("click",()=>{
  const toggle=document.getElementById("toggle1");
  toggle.id="toggle";
  videospage.id="video1";
  const apiendpoint=`https://api.themoviedb.org/3/movie/${tmdb_id}/videos?language=en-US`;
  const accesstoken="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDA4ZGE4YTE2NTZkNjNmZmYyZjQwZTQwZTNiMmJiNSIsInN1YiI6IjY1MDQwMDUxNmEyMjI3MDBjM2I3ZGZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.85r15wx6lm6UFbM8UB0J12Uwv8_L6eychwHX6ue6Op0";
  const headers={
    "Authorization":`Bearer ${accesstoken}`
  }
  fetch(apiendpoint,{headers}).then((data)=>{
    data.json().then((data1)=>{
      //console.log(data1.results[i].type);
      let ytkey="";
      
      data1.results.forEach((val)=>{
        
          ytkey=val.key;
          videospage.innerHTML=`${videospage.innerHTML}<iframe width="300" height="250" src="https://www.youtube.com/embed/${ytkey}?si=m66Z9WAjAfJLoaTJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      });
    });
  });
});






