function light(value)
 { 
        var pick;    
            if(value == 0)
            { 
              pick="bulb on.png";
            }
            else
            { 
                pick="bulb off.png";
            }         
            document.getElementById('bulb').src=pick; 
 }