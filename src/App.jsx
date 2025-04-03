import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        entry={entry}
        /*
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        description={entry.text}*/
      />
    );
  });
  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}

/*import Jokes from "./components/Jokes";
import jokesData from "./jokesData";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });
  return <main>{jokeElements}</main>;
}*/

/*import Contact from "./contact";

function App() {
  return (
    <div className="contacts">

      <Contact
        img="/src/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="/src/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="/src/felix.png"
        name="Felix"
        phone="(212) 555-3456"
        email="thecat@hotmail.com"
      />
      <Contact
        img="/src/pumpkin.png"
        name="Pumpkin"
        phone="(212) 555-4567"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}
export default App;*/

/*import Jokes from "./components/Jokes";

export default function App() {
  return (
    <main>
      <Jokes punchline="I can't wait to see her face light up when she opens it." />
      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </main> 
  );
}*/
