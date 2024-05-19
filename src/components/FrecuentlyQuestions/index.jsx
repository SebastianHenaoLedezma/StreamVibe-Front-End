import './styles.sass'


const FrecuentlyQuestions = () => {
  return (
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? We’ve got answers! Check out our FAQ section for find answers to the most common questions about StreamVibe.</p>
          <div className="faq">
            <div className="question">
              <h3>What is StreamVibe?</h3>
              <p>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>
            <div className="question">
              <h3>How much does StreamVibe cost?</h3>
            </div>
            <div className="question">
              <h3>What content is available on StreamVibe?</h3>
            </div>
            <div className="question">
              <h3>How can I watch StreamVibe?</h3>
            </div>
            <div className="question">
              <h3>How do I sign up for StreamVibe?</h3>
            </div>
            <div className="question">
              <h3>What is the StreamVibe free trial?</h3>
            </div>
            <div className="question">
              <h3>How do I contact StreamVibe customer support?</h3>
            </div>
            <div className="question">
              <h3>What are the StreamVibe payment methods?</h3>
            </div>
          </div>
          <button className="ask-question">Ask a Question</button>
        </div>
  )
}

export default FrecuentlyQuestions
