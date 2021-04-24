import { ThemeAnchorText } from './theme/anchor';

const EventsSection = () => {
  return (
    <section className="bg-gray-800 text-white p-2 rounded-md text-center mb-8 text-lg">
      <p className="tracking-wide"></p>We will be doing a <b>Charity Event</b> !
      <ThemeAnchorText
        className="ml-4"
        href="https://twitter.com/apppllleee_pie/status/1385219195151937536"
      >
        Learn More
      </ThemeAnchorText>
    </section>
  );
};

export { EventsSection };
