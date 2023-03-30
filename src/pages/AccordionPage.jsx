import Accordion from "./../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: "Can i use react on a project",
      content:
        "You can use react any project You can use react any project You can use react any project You can use react any project",
    },
    {
      id: 2,
      label: "Can i use react on a project",
      content:
        "You can use react any project You can use react any project You can use react any project You can use react any project",
    },
    {
      id: 3,
      label: "Can i use react on a project",
      content:
        "You can use react any project You can use react any project You can use react any project You can use react any project",
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
