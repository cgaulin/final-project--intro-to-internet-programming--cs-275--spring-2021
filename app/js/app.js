window.onload = () => {
    let input = window.prompt(`Enter a number`);
    input = parseInt(input, 10);

    function oddDiamond(val){
        let i = 0;
        let looper = 0;
        let shape = '';

        for(i = 0; i < val * 2 - 1; i++) {
          looper = i < val ? i : val * 2 - i - 2;
    }
};
