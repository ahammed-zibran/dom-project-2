// genearating random color rgb by javascript
// step-01 ::: create onload handeler

window.onload = () => {
  main();
};

//! what is onloader handeler ????


// function main() {
// 	const root = document.getElementById('root');
// 	const btn = document.getElementById('change-btn');

// 	btn.addEventListener('click', function () {
// 		const bgColor = generateRGBColor();
// 		root.style.backgroundColor = bgColor;
// 	});
// }
console.log('a');

function main(){
  const root = document.querySelector('#root')
  const btn = document.querySelector('#btn-change')
console.log(root , btn);


  btn.addEventListener('click' , function(){

    //* we have to run a click event to change a function . so that use event listener with click and function
    const bgColor = genarateRGBColor();
    console.log('click' ,bgColor);
    root.style.backgroundColor = bgColor;
  })
};
// todo---- step-02 ::: random rgb color genarator function

//* we are taking a function for creatingrandom bg color :::

function genarateRGBColor(){

  //* in rgb there are three colors . red green blue so that we are taking 3 const for generating color .

    const red =Math.floor( Math.random() * 255);

    //* we need numbers for rgb color value ,
    //*here at first we are taking math.random for genarating random number 
    //*the math.random number genarate random fractional number between 0-1 
    //*the maximum value of rgb color is 255 so that we are multiplying math.random withh 255 so that it can give us nuymber between 0-255
    //*the rgb color values are integer number . but the math.random number will genarate franctioonal number 
    //* so that we are taking math.floor so that we can get a integer number and also we can get the number 0 also

    const green =Math.floor( Math.random() * 255);
    const blue =Math.floor( Math.random() * 255);

    //* from every const we will get a number between 1 -250

    return `rgb(${red},${green},${blue})`;

    //* we are returning the number in  rgb patern .
};


// step-03 :::

// step-04 :::

/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler



// // step 2 - random color generator function
// function generateRGBColor() {
// 	// rgb(0, 0, 0), rgb(255, 255, 255)
// 	const red = Math.floor(Math.random() * 255);
// 	const green = Math.floor(Math.random() * 255);
// 	const blue = Math.floor(Math.random() * 255);

// 	return `rgb(${red}, ${green}, ${blue})`;
// }