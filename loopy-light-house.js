for (let i = 100; i < 201; i++){
  if (i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0){
    console.log("Loopy");
  } else if (i % 4 === 0){
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}



/*if multiple of 3 then print: "Loopy"
if multiple pf 4 then print: "Lighthouse"
if multiple of both 3 and 4 print: "LoopyLighthouse"*/