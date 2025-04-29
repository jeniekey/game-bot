(function  () {
  var carouselTransition, carouselContent, carouselIndex, carouselLength, firstClone, firstItem, isAnimating, itemWidth, lastClone, lastItem;
  carouselTransition = 250;
  carouselContent = $('.carousel__content');
  carouselIndex = 0;
  carouselMax = 0;
  carouselLength = carouselContent.children().length;
  isAnimating = false;
  itemWidth = 100 / carouselLength;
  firstItem = $(carouselContent.children()[0]);
  lastItem = $(carouselContent.children()[carouselLength - 1]);
  firstClone = null;
  lastClone = null;
  carouselContent.css('width', carouselLength * 100 + '%');
  carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, 0);
  $.each(carouselContent.children(), function () {
      return $(this).css('width', itemWidth + '%');
  });
  $('.nav--buttons--left').on('click', function (event) {
      event.preventDefault();
      if (isAnimating || carouselIndex === 0) {
          return;
      }
      isAnimating = true;
      carouselIndex--;
      update_progress_bar(carouselIndex);
      $(".nav--buttons--right").css("display", "flex");
      if (carouselIndex === 0 || carouselIndex === 1) {
        $(".nav--buttons--left").css("display", "none");
      }
      return carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, carouselTransition, 'ease', function () {
          return isAnimating = false;
      });
  });
  $('.nav--buttons--right').on('click', function (event) {
      event.preventDefault();
      if (isAnimating || carouselIndex === carouselLength - 1) {
          return;
      }
      isAnimating = true;
      carouselIndex++;
      update_progress_bar(carouselIndex);
      if ( carouselIndex > carouselMax ) {
        carouselMax = carouselIndex;
      }
      $(".nav--buttons--left").css("display", "block");
      if (carouselIndex === carouselLength - 1 || carouselIndex === carouselMax) {
        $(".nav--buttons--right").css("display", "none");
      }
      if (carouselIndex === 1) {
        $(".nav--buttons--left").css("display", "none");
      }
      return carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, carouselTransition, 'ease', function () {
          return isAnimating = false;
      });
  });
}.call(this));

function calc_results() {
var count;
$(".questions").each(function(){
  if(this.is(":checked")) {s
    count++;
  }
});
}



function sumArray(from, to, size) {
var sum = parseFloat("0.00");
for ( var i = from; i <= to; i++ ) {
  sum += parseFloat(results[i][size]);
}
return sum.toFixed(1).toString();
}

function calc_results(button_elem) {
var count = 0;
var checked = 0;
var size = $("input[name=size]:checked").val();
$(":checked").each(function() {
  checked++;
});
if ( checked != 7 ) {
  alert("Please check all of the questions.");
  return;
}
$(".questions").each(function() {
  if ( $(this).is(":checked") ) {
      count++;
  }
});
var less = sumArray(0, count-1, size) ;
var same = sumArray(count, count, size);
var more = sumArray(count+1, 15, size);


$("#auto-con-calc").html(resultsText);
sliderControl(less,same,more);
$("#auto-con-calc").slideDown("fast", function() {
  $('html, body').animate({
     scrollTop: $('#auto-con-calc').offset().top
  }, 'slow');
});
}

function update_progress_bar(index) {
var checked = index;
if ( checked === 0 ) {
  $(".progress-bar-insider").css("width", "4%");
}
else {
  checked = checked - 1;
  $(".progress-bar-insider").css("width", ((checked/7)*96 + 4) + "%");
}
if (checked < 8) {
  $(".progress-bar-insider").attr("data-progress", (checked + 1) + "/8");
}
else {
  $(".progress-bar-insider").attr("data-progress", "");
}
}

$(".carousel--item input[type=radio]").click(function(){
$("#auto-con-calc").slideUp();
$('.nav--buttons--right').trigger('click');
});

function sliderControl(less, same, more) {
var less_slider = $(".score-slider-less");
var same_slider = $(".score-slider");
var more_slider = $(".score-slider-more");

if ( same < 5.00 ) {
  same_slider.css("width", "5%");
}
else {
  less_slider.css("width", same + "%");
}
same_slider.css("left", less + "%").html(same + "%");
less_slider.css("width", (parseFloat(less) + (parseFloat(same) / 2)) + "%").html(less + "%");
more_slider.css("width", (parseFloat(more) + (parseFloat(same) / 2)) + "%").html(more + "%");
}


const productData = [
  {
    name: "Baldur's Gate 3",
    genre: "RPG",
    price: "expensivePrice",
    platform: "all",
    world: "openWorld",
    hours: "31+",
    violence: "highVio",
    Players: "Single and Multiplayer",
    img: "images/baldurs_gate3.png",
    url: "baldurs_gate3.html",
  },
  {
    name: "Celeste",
    genre: "Platformer",
    price: "lowPrice",
    platform: "all",
    world: "linear",
    hours: "15-30",
    violence: "noVio",
    Players: "Singleplayer",
    img: "images/celeste.png",
    url: "celeste.html",
  },
  {
    name: "Chicory: A Colorful Tale",
    genre: "Action",
    price: "moderatePrice",
    platform: "all",
    world: "openWorld",
    hours: "15-30",
    violence: "noVio",
    Players: "Single and Multiplayer",
    img: "images/chicory.png",
    url: "chicory.html",
  },
  {
    name: "Cyberpunk 2077",
    genre: "RPG",
    price: "expensivePrice",
    platform: "all",
    world: "openWorld",
    hours: "31+",
    violence: "highVio",
    Players: "Singleplayer",
    img: "images/cyberpunk2077.png",
    url: "cyberpunk2077.html",
  },
  {
    name: "Deep Rock Galactic",
    genre: "Shooter",
    price: "moderatePrice",
    platform: "all",
    world: "openWorld",
    length: "31+",
    violence: "moderateVio",
    Players: "Multiplayer",
    img: "images/deep_rock.png",
    url: "deep_rock.html",
  },

  {
    name: "DOOM Eternal",
    genre: "Shooter",
    price: "moderatePrice",
    platform: "all",
    world: "linear",
    hours: "15-30",
    violence: "highVio",
    Players: "Singleplayer",
    img: "images/doom_eternal.png",
    url: "doom_eternal.html",
  },
  {
    name: "Fallout: New Vegas",
    genre: "RPG",
    price: "lowPrice",
    platform: "all",
    world: "openWorld",
    hours: "31+",
    violence: "highVio",
    Players: "Singleplayer",
    img: "images/fallout_nv.png",
    url: "fallout_nv.html",
  },

  {
    name: "Firewatch",
    genre: "Narrative",
    price: "lowPrice",
    platform: "all",
    world: "linear",
    hours: "0-5",
    violence: "lowVio",
    Players: "Singleplayer",
    img: "images/firewatch.png",
    url: "firewatch.html",
  },
  {
    name: "Genshin Impact",
    genre: "RPG",
    price: "free",
    platform: "all",
    world: "openWorld",
    hours: "31+",
    violence: "moderateVio",
    Players: "Single and Multiplayer",
    img: "images/genshin_impact.png",
    url: "genshin_impact.html",

 },
 {
  name: "Hades",
  genre: "RPG",
  price: "moderatePrice",
  platform: "all",
  world: "mixed",
  hours: "15-30",
  violence: "highVio",
  Players: "Singleplayer",
  img: "images/hades.png",
  url: "hades.html",
  },
  {
    name: "Hollow Knight",
    genre: "Action",
    price: "lowPrice",
    platform: "all",
    world: "openWorld",
    hours: "15-30",
    violence: "moderateVio",
    Players: "Singleplayer",
    img: "images/hollow_knight.png",
    url: "hollow_knight.html",
  },
  {
    name: "It Takes Two",
    genre: "Platformer",
    price: "moderatePrice",
    platform: "all",
    world: "linear",
    hours: "15-30",
    violence: "lowVio",
    Players: "Multiplayer",
    img: "images/it_takes_two.png",
    url: "it_takes_two.html",
  },
  {
    name: "Journey",
    genre: "Action",
    price: "lowPrice",
    platform: "pc",
    world: "linear",
    hours: "0-5",
    violence: "noVio",
    Players: "Single and Multiplayer",
    img: "images/journey.png",
    url: "journey.html",

  },
  {
    name: "League of Legends",
    genre: "Action",
    price: "free",
    platform: "pc",
    world: "linear",
    hours: "31+",
    violence: "moderateVio",
    Players: "Multiplayer",
    img: "images/league_of_legends.png",
    url: "league_of_legends.html",

  },
  {
    name: "Minecraft",
    genre: "Survival",
    price: "moderatePrice",
    platform: "all",
    world: "openWorld",
    hours: "31+",
    violence: "moderateVio",
    Players: "Single and Multiplayer",
    img: "images/minecraft.png",
    url: "minecraft.html",
  },
  {
    name: "Outer Wilds",
    genre: "Action",
    price: "moderatePrice",
    platform: "all",
    world: "open",
    hours: "15-30",
    violence: "lowVio",
    Players: "Singleplayer",
    img: "images/outer_wilds.png",
    url: "outer_wilds.html",
  },
  {
    name: "Overwatch 2",
    genre: "Shooter",
    price: "free",
    platform: "all",
    world: "linear",
    hours: "31+",
    violence: "moderateVio",
    Players: "Multiplayer",
    img: "images/overwatch2.png",
    url: "overwatch2.html",

  },
  {
    name: "Papers, Please",
    genre: "Puzzle",
    price: "lowPrice",
    platform: "pc",
    world: "linear",
    hours: "5-15",
    violence: "moderateVio",
    Players: "Singleplayer",
    img: "images/papers_please.png",
    url: "papers_please.html",
  },
  {
    name: "Red Dead Redemption 2",
    genre: "Action",
    price: "expensivePrice",
    platform: "all",
    world: "openWorld",
    hours: "31+",
    violence: "highVio",
    Players: "Single and Multiplayer",
    img: "images/rdr2.png",
    url: "rdr2.html",
  },
  {
    name: "Return of the Obra Dinn",
    genre: "Puzzle",
    price: "moderatePrice",
    platform: "all",
    world: "openWorld",
    hours: "15-30",
    violence: "lowVio",
    Players: "Singleplayer",
    img: "images/obra_dinn.png",
    url: "obra_dinn.html",
  },
  {
    name: "Slay the Spire",
    genre: "Puzzle",
    price: "moderatePrice",
    platform: "all",
    world: "linear",
    hours: "5-15",
    violence: "lowVio",
    Players: "Singleplayer",
    img: "images/slay_the_spire.png",
    url: "slay_the_spire.html",
  },
  {
    name: "Stardew Valley",
    genre: "Simulator",
    price: "lowPrice",
    platform: "all",
    world: "openWorld",
    hours: "31+",
    violence: "noVio",
    Players: "Single and Multiplayer",
    img: "images/stardew_valley.png",
    url: "stardew_valley.html",
  },
  {
    name: "Subnautica",
    genre: "Survival",
    price: "moderatePrice",
    platform: "all",
    world: "openWorld",
    hours: "15-30",
    violence: "moderateVio",
    Players: "Singleplayer",
    img: "images/subnautica.png",
    url: "subnautica.html",
  },
  {
    name: "Terraria",
    genre: "Survival",
    price: "lowPrice",
    platform: "all",
    world: "openWorld",
    hours: "31+",
    violence: "moderateVio",
    Players: "Single and Multiplayer",
    img: "images/terraria.png",
    url: "terraria.html",
  },
  {
    name: "Tetris Effect",
    genre: "Puzzle",
    price: "moderatePrice",
    platform: "all",
    world: "linear",
    hours: "5-15",
    violence: "noVio",
    Players: "Single and Multiplayer",
    img: "images/tetris_effect.png",
    url: "tetris_effect.html",
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    genre: "Action",
    price: "expensivePrice",
    platform: "console",
    world: "openWorld",
    hours: "31+",
    violence: "moderateVio",
    Players: "Singleplayer",
    img: "images/zelda_botw.png",
    url: "zelda_botw.html",
  },
  {
    name: "The Sims 4",
    genre: "Simulator",
    price: "expensivePrice",
    platform: "all",
    world: "openWorld",
    hours: "31+",
    violence: "noVio",
    Players: "Singleplayer",
    img: "images/sims4.png",
    url: "sims4.html",
  },
  {
    name: "The Witness",
    genre: "Puzzle",
    price: "moderatePrice",
    platform: "all",
    world: "openWorld",
    hours: "15-30",
    violence: "noVio",
    Players: "Singleplayer",
    img: "images/the_witness.png",
    url: "the_witness.html",
  },
  {
    name: "Tunic",
    genre: "Action",
    price: "moderatePrice",
    platform: "all",
    world: "mixed",
    hours: "5-15",
    violence: "moderateVio",
    Players: "Singleplayer",
    img: "images/tunic.png",
    url: "tunic.html",
  },
  {
    name: "Wattam",
    genre: "Puzzle",
    price: "moderatePrice",
    platform: "pc",
    world: "openWorld",
    hours: "5-15",
    violence: "noVio",
    Players: "Single and Multiplayer",
    img: "images/wattam.png",
    url: "wattam.html",
  }
]

let newUser = {};
let btn = document.getElementById("btnCalculate");
let resultArray = [];


btn.addEventListener("click", ( )=>
   {
    //localStorage.clear();
    let questionOne = document.getElementsByName("questionOne");
  let questionTwo = document.getElementsByName("questionTwo");
  let questionThree = document.getElementsByName("questionThree");
  let questionFour = document.getElementsByName("questionFour");
  let questionFive = document.getElementsByName("questionFive");
  let questionSix = document.getElementsByName("questionSix");
  let questionSeven = document.getElementsByName("questionSeven");
    questionOne.forEach( question =>{
      if (question.checked) {
        newUser.Players = question.value;
      }
    });
      questionTwo.forEach((question)=>{
      if (question.checked) {
        newUser.platform = question.value;
      }
    });
  questionThree.forEach((question)=>{
      if (question.checked) {
        newUser.world = question.value;
      }
    });
  questionFour.forEach((question)=>{
      if (question.checked) {
        newUser.genre = question.value;
      }
    });
  questionFive.forEach((question)=>{
      if (question.checked) {
        newUser.price = question.value;
      }
    });
  questionSix.forEach((question)=>{
      if (question.checked) {
        newUser.hours = question.value;
      }
    });
  questionSeven.forEach((question)=>{
      if (question.checked) {
        newUser.violence = question.value;
      }
    });
    console.log(newUser);
getGame(newUser);
      

   
 


    });


//calculate//

///results///


function getGame(userData) {

  productData.forEach( item => {
    console.log(item);
    let counter = 0;
    if (item.Players == userData.Players) {
      console.log('we match on players');
      //resultArray.push(item); ?
      counter++;
    } 

    if (item.platform == userData.platform) {
      console.log('we match on platform');
      counter++;
    } 

    if (item.world == userData.world) {
      console.log('we match on world');
      counter++;
    } 

    if (item.genre == userData.genre) {
      console.log('we match on genre');
      counter++;
    } 

    if (item.price == userData.price) {
      console.log('we match on price');
      counter++;
    } 

    if (item.hours == userData.hours) {
      console.log('we match on hours');
      counter++;
    } 

    if (item.violence == userData.violence) {
      console.log('we match on violence');
      counter++;
    } 

      if (counter >= 5) {
        resultArray.push(item);
      } 

  });
  console.log(resultArray);

 if ( resultArray.length > 0 ) {
  const finalData = JSON.stringify(resultArray);
  localStorage.setItem('results', finalData);
 } 
 
 else {
  localStorage.setItem('noresult', 'Sorry, no results!');
}
   window.location.href = `results.html`;

} 
