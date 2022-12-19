const Accordion = (props: any) => {
  console.log("Accordion rendering");

  return (
    <>
      <AccordionTitle title={props.titleValue} />
      <AccordionBody />
    </>
  );
};

function AccordionTitle(props: any) {
  console.log("AccordionTitle rendering");
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

function AccordionBody(props: any) {
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
