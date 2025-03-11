// import { useEffect, useState } from "react"
// import "prismjs/themes/prism-tomorrow.css"
// import Editor from 'react-simple-code-editor'
// import prism from "prismjs"


// function App() {

//   const [code,setCode]= useState(`
  
//     function sum(){
//     return 1+1
//     }`)

//     const [reviews, setReviews]= useState(null)
// useEffect(()=>{
//   prism.highlightAll()
// },[code])

// async function getReviews(){

//   try {
    
//     let res=await  fetch('http://localhost:3000/ai/get-data',{
//       method:'POST'
//     })
//   if(res.ok){
//     const data= await res.json()
//   setReviews(data)
//   }
//   else{
//   console.error("error:", res.statusText)
//   }
//   } catch (error) {
//     console.error("Error:", error); 
//   }

// }

// useEffect(()=>{
//   getReviews()
// },[])
//   return (    
//     <>
//      <main>
//       <div className="left">

//         <div className="code">
// <Editor
// value={code}
// onValueChange={code =>setCode(code)}
// highlight={code=>prism.highlight(code,prism.languages.javascript,"javascript")}

// style={{
// border:"1px solid #ddd",
// borderRadius:"5px",
// fontSize:16,
// height:"100%", 
// width:"100%",
// paddingBottom:"30px"
// }}
// />
//         </div>
//         <div className="review">Review</div>
//       </div>
//       <div className="right">
//       {reviews ? (
//     <pre>{JSON.stringify(reviews, null, 2)}</pre> // Yeh JSON ko pretty-print karega
//   ) : (
//     <p>Loading reviews...</p> // Jab tak reviews nahi aate, loading message dikhaye
//   )}
//       </div>
//      </main>
   
//     </>
//   )
// }

// export default App



import { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";

function App() {
  const [code, setCode] = useState(`
    function sum() {
      return 1 + 1;
    }
  `);

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    prism.highlightAll();
  }, [code]);

  async function getReviews() {
    try {
      let res = await fetch("http://localhost:3000/ai/get-data", {
        method: "POST",
      });

      if (res.ok) {
        const data = await res.json();
        setReviews(data);
      } else {
        console.error("Error:", res.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <main>
        <div className="left">
          <div className="code" style={{ height: "400px" }}>
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: 16,
                height: "100%",
                width: "100%",
                paddingBottom: "30px",
               // Optional: dark background for the editor
                color: "#f5f5f5", // Optional: light text color for better contrast
              }}
            />
          </div>
          <div className="review">Review Section</div>
        </div>
        <div className="right">
          {/* Show loading message until reviews are fetched */}
          {reviews === null ? (
            <p>Loading reviews...</p>
          ) : (
            <pre>{JSON.stringify(reviews, null, 2)}</pre>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
