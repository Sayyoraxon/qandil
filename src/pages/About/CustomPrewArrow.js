export const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className="prew" onClick={onClick}>
        <span>&#8249;</span>
      </div>
    );
  };