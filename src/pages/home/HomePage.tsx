import AccordionItem from "../../components/shared/AccordionItem";
import Heading from "../../components/shared/Heading";
import ProgressBar from "../../components/shared/ProgressBar";
import grind75List from "../../types/Problem";

function HomePage() {
  const loadProblems = () => {
    const keys = Object.keys(grind75List).map((item) => item);

    const UI = keys.map((k, index) => (
      <AccordionItem key={index} title={k} data={grind75List[k]} />
    ));

    return UI;
  };

  return (
    <>
      <Heading title="Grind 75" />
      <ProgressBar />
      {loadProblems()}
    </>
  );
}

export default HomePage;
