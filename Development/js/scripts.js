// logger

let names=["Khaled","Bassam","Yousef","Omar"];
logger(names)

function logger(array){
    for(let name of array){
    console.log(name)
    };
}

// hottestdays

let temperature=[36,44,50,57];
hottestdays(temperature,3)

function hottestdays(weather,temp){
    for( let hot of weather){
        if ( hot > temp){
            console.log(hot);
        }
    }
}

// getBookById

let readbooks = [bookobjects = 
    {bookname : "To Kill a Mockingbird",id:562},
    {bookname : "Harry Potter",id:262},
    {bookname : "The Hunger Games",id:572},
];

function getBookById(bookId,books){

    for(book of readbooks){

        if(book.id == bookId){
            console.log(book.bookname);
            break;
        }
        else {
            console.log("undefined");
        }
    }
}

getBookById(562 , readbooks)




// التمرين الثاني



