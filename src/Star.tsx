type StarPropsType = {
  selected: boolean;
};
const Star = (props: StarPropsType) => {
  console.log("Star rendering");
  if (props.selected === true) {
    return (
      <span>
        <b>* </b>
      </span>
    );
  } else {
    return <span>* </span>;
  }
};

export default Star;
