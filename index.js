const Box = (props) => {
  const { name } = props;
  return <p className="paragraph">{name}</p>;
};

const element = (
  <div className="bg-container">
    <h1 class="heading">Boxes</h1>
    <div className="box-container">
      <div className="box1">
        <Box name="Small" />
      </div>
      <div className="box2">
        <Box name="Medium" />
      </div>
      <div className="box3">
        <Box name="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
