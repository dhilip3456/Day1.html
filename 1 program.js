<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            text-align: center;
        } 
        input,select,button{
            margin: 10px;
            padding: 10px;
        }
    </style>
</head>
<body>
    <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo sapiente, quos reiciendis cupiditate alias numquam ratione nesciunt neque, unde expedita doloremque et quas corrupti rerum adipisci eius, magnam deserunt.

    </p>
    <script>let paragraph=document.getElementById("para").style.backgroundColor="red"
    console.log("hai")
    </script>
    <input type="number"placeholder="enter the first value"id="num1">
    <input type="number"placeholder="enter the second value"id="num2">
    <select id="operation">
        <option value="add">add</option>
        <option value="multiplication">multiplication</option>
        <option value="division">division</option>
        <option value="subtraction">subtraction</option>
        
    </select>
    <button onclick="calculate()">calculate</button>
    <div id="result">result</div>
    <script>
        function calculate(){
            let num1=parseInt(document.getElementById("num1").value);
            let num2=parseInt(document.getElementById("num2").value);
            let operation=document.getElementById("operation").value;
            let result;
            if(isNaN(num1)||isNaN(num2)){
                result="check your entered input";
            }
            else{
                switch(operation){
                    case"add":
                    result=num1+num2;
                        case"multiplication":
                        result=num1*num2;
                        case"division":
                        result=num1/num2;
                        case"subtraction":
                        result=num1-num2;
                    break;
                }


            }
            document.getElementById("result").innerText=result;
        }
    </script>

</body>
</html>
