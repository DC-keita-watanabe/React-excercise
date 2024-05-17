function Sample(props) {
    return (
      <div className="alert alert-info">
        <h2>{props.title ? props.title : 'title'}</h2>
        <p>{props.msg ? props.msg : 'message'}</p>
      </div>
    );
  }
  export default Sample;
  