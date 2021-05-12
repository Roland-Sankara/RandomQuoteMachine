import React ,{useState, useEffect}from 'react';
import Quote from './Quote';
import Author from './Author';

// Functional Component
function App(){
    const [quotes,setQuotes] = useState([]);
    const [quote,setQuote] = useState({text:"The Secret to getting ahead is getting started",author:"Roland"});

    function updateQuote(){
        // pick a random quote from the quotes list
        // set that quote object to the quote state
        if(quotes.length){
            const index = Math.floor(Math.random()*quotes.length);
            setQuote(quotes[index]);
        }
        console.log("Data not loaded!");
    }

    useEffect(() => {
        // Fetch quote
        const url = "https://type.fit/api/quotes";
        fetch(url).then(response=>{
            if(!response.ok){
                throw new Error("Failed to Fetch!");
            }
            return response.json();
        }).then(data=>{
            console.log(data);
            setQuotes(data);
        }).catch(err=>{
            console.log(err.message);
        })
    }, [])

    return(
        <div id="quote-box">
            <Quote text={quote.text}/>
            <Author author={quote.author}/>
            <div id="controls">
                <button onClick={updateQuote} id="new-quote">New Quote</button>
                <a href={`https://twitter.com/intent/tweet?text=${qoute.text}${quote.author}`}><i id="tweet-quote" className="fab fa-twitter"></i></a>
            </div>
        </div>
    )
}


// Class Component
// class App extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             num:0
//         }

//         this.update = this.update.bind(this);
//     }

//     update(){
//         this.setState({num:this.state.num+1});
//     }

//     render(){
//         return(
//             <div>
//                 <Quote text={this.state.num}/>
//                 <Author author="-By Roland"/>
//                 <div>
//                     <button onClick={this.update} className="new-quote">New Quote</button>
//                     <span><i className="tweet-quote">Tweet</i></span>
//                 </div>
//             </div>
//         )
//     }
// }


export default App;
