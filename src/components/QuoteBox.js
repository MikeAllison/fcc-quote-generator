import { useEffect, useState } from 'react';

import './QuoteBox.css';

const QuoteBox = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [postingUrl, setPostingUrl] = useState();

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
        setPostingUrl(
          `https://twitter.com/intent/tweet?text="${data.content}" - ${data.author}`
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const newQuoteHandler = () => {
    fetch('https://api.quotable.io/random')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div id="quote-box">
      <section id="text-author">
        <div id="text">"{quote}"</div>
        <div id="author">- {author}</div>
      </section>
      <section id="buttons">
        <button id="new-quote" onClick={newQuoteHandler}>
          Load New Quote
        </button>
        <a href={postingUrl} id="tweet-quote">
          Post to Twitter
        </a>
      </section>
    </div>
  );
};

export default QuoteBox;
