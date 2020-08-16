# Get-Frequency
Project Details:  

Front-End: React Js.  
Back-End:Node Js.  
Packages(Front-End):React,axios,React-animations  
Packages(Back-End): Express Js,axios,cors,body-parsser,path  

About Project:  
The Front-End of the project will allow you to give a value 'N'.  
Once clicked on "GET" it will send a request to the Back-End express and then the server will first retrive all the content from the url: "https://terriblytinytales.com/test.txt".  
Once recived this content it will split the content to words and store it in an array called "dataArray".  
An empty Js object is created called "map"(which will act as HashMap) and a loop will run through "dataArray" and cout the frequency of all words.  
An empty array is initialized called "finArray" which will store all the key value pairs of "map".  
Now when we have the resulted array next thing is done is a sort using a comparator.  
Finally a loop is rum from 0->N and all the top "N" elements are stored in the final array called "result".  
The result is converted to JSON and then sent to the called with "res.status(200).json(result)".  
In the front end once the application recives the data it renders the data in the form of Tables.  

Backend Route: "http://localhost:1234/routes/api/getData";(POST request can be sent with "num" as parameter)  

Link of Website: https://words-frequency-counter.herokuapp.com/   
