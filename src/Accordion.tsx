type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};
const Accordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering");

  return props.collapsed === true ? (
    <>
      <AccordionTitle title={props.titleValue} />
      <AccordionBody />
    </>
  ) : (
    <AccordionTitle title={props.titleValue} />
  );
};

type AccordionTitlePropsType = {
  title: string;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
export default Accordion;
