// this list will hold all the boxes we have already clicked on
let daysOpened;

const icons = [
    '&#x1F6F7;',
    '&#x1F328;',
    '&#x1F43B;',
    '&#x1F332;',
    '&#x1F381;',
    '&#x1F936;',
    '&#x1F9E4;',
    '&#x1F9E3;',
    '&#x1F976;',
    '&#x1F31F;',
    '&#x26F8;',
    '&#x1F36A;',
    '&#x1F98C;',
    '&#x1F3C2;',
    '&#x26F7;',
    '&#x1F3BF;',
    '&#x1F3D2;',
    '&#x1F514;',
    '&#x1F6CF;',
    '&#x1F385;',
    '&#x1F3BF;',
    '&#x1F56F;',
    '&#x26c4;'
  ];

icons = randomizeIcons(icons);

// this variable holds all of the HTML elements for the boxes
const boxes = document.querySelectorAll(".num");

//show the previously clicked boxes
if(daysOpened)
// this function will show the emoji for the given day that was
// clicked
function handelBoxClick(event){
  const boxClicked = event.currentTarget;
  const dayClicked = boxClicked.dataset.day;
  //variable to hold the current data
  const today = new Date();

  //only show the boxes for the day that are less than the current data
  if(today.getDate() >= Number(dayClicked)){
    //console.log("Yes you can open me.")
    boxClicked.innerHTML = icons[Number(dayClicked)];

    // store the clicked box in local storage
    storeClickedBoxes

  } else {
    console.log("NO Peaking!!! This box can NOT be opened!!!");
  }


}//end of handelBoxClick

// add an event listener to each and every box (all the boxes)
boxes.forEach(function (box){
  box.addEventListener("click",handelBoxClick);
});

// this function will sotr the days Clicked in localStorage
function storeClickedBoxes(day){
  //first check to see if there is anything in localStorage
  if(!localStorage.getItem("daysClicked")){ //daysClicked does not exist
    daysOpened = [];
  } else {
    daysOpened = JSON.parse(localStorage.getItem("daysClicked"))
  }

  daysOpened.push(day);
  localStorage.setItem("daysClicked", JSON.stringify(daysOpened))
  console.log(daysOpened);

}//end of storeClickedBoxes

// function will randomize the list of icons and store the list in
// local storage
function randomizeIcons(oldList){
  let randomList = [];
  //check to see if the icons list has been randomized
  if(!localStorage.getItem("icons")){ //there is nothing in the localStorage
    while(oldList.length > 0){//while there are still thing in my old list
      //get a random numberconst
      index = math.floor(Math.random()*oldList.length);
      //add the old item to the random list
      randomList.push(oldList[index]);
      //remove it from the old list
      oldList.splice(index,1); //start at index and remove 1 item from the list
    }
    //add randomized list to local localStorage
    localStorage.setItwm("icons",JSON.stringify(randomList));
  } else { //there is a randomized list in local storage
    randomList = JSON.parse(localStorage.getItem("icons"));
  }
  return randomList;
}//end of randomizeIcons


//this function will show the icons on the days that are already Clicked
function showClickedBoxes(){
  boxes.forEach(function (box){
    //grab the day as a number from each boxes
    const day = Number(box.dataset.day);
    if(daysOpened.includes(day)){
      box.innerHTML = icons[day];
    }
  });
}

// TODO -------->
// randomize the list of icons
// have the browser remember what days we have already clicked.
