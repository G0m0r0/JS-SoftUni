import{apiKey, createNewBook, getAllBooks, getBookById, updateBook, deleteBook} from './firebase-requests.js';

function addTable(tbody,bookValue,bookId){
    let tr=document.createElement('tr');
    tr.setAttribute('data-book-id',bookId);

    tr.innerHTML=`<td>${bookValue.title}</td>
    <td>${bookValue.author}</td>
    <td>${bookValue.isbn}</td>
    <td>
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
    </td>`

    tbody.appendChild(tr);
}

function clearInputs(title,author,isbn){
    title.value='';
    author.value='';
    isbn.value='';
}

function loadBooks(tbody){
    getAllBooks().then(x=>{
        tbody.innerHTML=''; 
        Object.entries(x).map(([id,bookValue])=>{
            addTable(tbody,bookValue,id);
        })
     });
}

function createNewObj(title,author,isbn){
    const obj={
        title: title.value,
        author: author.value,
        isbn: isbn.value            
    }   
    return obj;
}

(function doStuff(){
    let title=document.getElementById('title');
    let author=document.getElementById('author');
    let isbn=document.getElementById('isbn');
    let tbody=document.getElementsByTagName('tbody')[0];
    let loadBooksButton=document.getElementById('loadBooks');
    loadBooks(tbody);

    let submitButton=document.getElementsByTagName('form')[0].getElementsByTagName('button')[0];
    submitButton.addEventListener('click',async(e)=>{
        e.preventDefault();

        let obj=createNewObj(title,author,isbn);
        await createNewBook(obj);
        clearInputs(title,author,isbn);
        loadBooks(tbody);
        
    })

    loadBooksButton.addEventListener('click',()=>{
        loadBooks(tbody);
    })

    tbody.addEventListener('click',async (e)=>{
        let targetBookId=e.target.closest('tr').dataset.bookId;

        getBookById(targetBookId).then(x=>{
            title.value=x.title;
            author.value=x.author;
            isbn.value=x.isbn;
        });
        
        if(e.target instanceof HTMLButtonElement&&title.value!==''){
            if(e.target.id==='edit'){
              await updateBook(createNewObj(title,author,isbn),targetBookId);
            }else if(e.target.id==='delete'){
               await deleteBook(targetBookId);
            }
            clearInputs(title,author,isbn);
            loadBooks(tbody);
            return
        }
    });
})();