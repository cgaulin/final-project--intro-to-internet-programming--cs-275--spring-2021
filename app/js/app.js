  window.onload = () => {
     let input = window.prompt(`Enter a number`);
     input = parseInt(input, 10);
     let diamond = document.getElementById(`diamond-container`);
     let borderWidth = input * 20;
     let number = 0;
     let speed = 1;
     const ONE_SECOND = 1000;
    if(input % 2 === 1){
        oddDiamond(input);
    }
    else{
        evenDiamond(input);
    }

    function oddDiamond(val){
        let i = 0;
        let looper = 0;
        let shape = '';

        for(i = 0; i < val * 2 - 1; i++) {
          looper = i < val ? i : val * 2 - i - 2;
          if(looper % 2 === 1){
              continue;
          }
          shape += Array(val - looper).join(' ') + Array(looper + 1).join('* ') + '*\n';
        }
        diamond.textContent = shape;
        // document.write('<pre>' + shape + '</pre>');
    }

    function evenDiamond(val){

        let i = 0;
        let looper = 0;
        let shape = '';

        for(i = 0; i < val * 2 - 1; i++) {
          looper = i < val ? i : val * 2 - i - 2;
          if(looper % 2 === 0){
              continue;
          }
          shape += Array(val - looper).join(' ') + Array(looper + 1).join('* ') + '*\n';
        }
        diamond.textContent = shape;
        // document.write('<pre>' + shape + '</pre>');
    }

    setInterval( () => {
        number += speed;
        diamond.style.left = number + `px`;

        if(diamond.style.left === window.innerWidth - borderWidth + `px`){
            speed = -1;
        }
        else if(diamond.style.left === `0px`){
            speed = 1;
        }


    }, (ONE_SECOND / 1000) );

    function setBorder(){
        let diamond = document.getElementById(`diamond-container`);
        diamond.style.width = input + `px`;
        diamond.style.height = input + `px`;
        diamond.style.border = `1px solid black`;
    }
};
