


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
  const [loading, setLoading] = useState(false); // Loading state for better UX

  useEffect(() => {
    prism.highlightAll();
  }, [code]);

  async function getReviews() {
    setLoading(true);
    try {
      let res = await fetch("http://localhost:3000/ai/get-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }),
      });

      if (res.ok) {
        const data = await res.json();
        setReviews(data.result);
      } else {
        console.error("Error:", res.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

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
               paddingLeft:"50px",
               paddingTop:"10px",
                color: "#f5f5f5",
              }}
            />
          </div>
          <button className="review" onClick={getReviews}>
            {loading ? "Fetching..." : "Get Review"}
          </button>
        </div>
        <div className="right">
          {reviews === null ? (
            <p>Click 'Get Review' to fetch AI response.</p>
          ) : (
            <pre>{JSON.stringify(reviews, null, 2)}</pre>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
