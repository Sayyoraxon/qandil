export const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className="nextArrow" onClick={onClick}>
        <span>&#8249;</span>
      </div>
    );
  };