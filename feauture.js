    console.log (" Exploring Git Task2 ; use some example jscript file at this point of time");
    
	var evaluation;
    var TestVal1;
    var TestVal2;


    function fAdd( ParamT1, ParamT2 ){
        console.log ("   fAdd is invoked with param " + ParamT1 + " and " + ParamT2 );	

        var results = 0; //initilize some variable to pass the result of the testing

            results = ParamT1 + ParamT2 ; 

        return results;
    }
	
        TestVal1=15; //set inputs
        TestVal2=11; //set inputs
		
        evaluation = fAdd(TestVal1,TestVal2); //try to use the function and print accordingly
        console.log ("\t Sum is " + evaluation + " for " + TestVal1 + " added to " + TestVal2);
