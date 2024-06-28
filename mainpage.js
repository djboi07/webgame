
const buttons = [
        { id: 'game1', hoverColor: 'rgba(255, 0, 144,1)' },
        { id: 'game2', hoverColor: 'rgba(0,255,0,1)' },
        { id: 'game3', hoverColor: 'rgba(0, 30, 181.1)' },
        { id: 'game4', hoverColor: 'rgba(247, 0, 255,1)' },
        { id: 'game5', hoverColor: 'yellow' },
        { id: 'game6', hoverColor: 'grey' },
        { id: 'game7', hoverColor: 'rgba(0,255,255,1)' },
        { id: 'game8', hoverColor: 'rgba(163, 87, 5,1   )' },
        { id: 'game9', hoverColor: '' }
    ];
    for (const btn of buttons){
        const buttonElement= document.getElementById(btn.id);
        buttonElement.addEventListener("mouseover", function() {
            document.body.style.backgroundColor=btn.hoverColor;
            document.getElementById("navicon1").style.backgroundColor=btn.hoverColor;
            document.getElementById("navicon2").style.backgroundColor=btn.hoverColor;
        });
        buttonElement.addEventListener("mouseleave", function() {
            document.body.style.backgroundColor='';
            document.getElementById("navicon1").style.backgroundColor='white';
            document.getElementById("navicon2").style.backgroundColor='white';
        });
    }
    