

const MyQuizCard = (props) => {
    return(
      <div className="card">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    )
  }