import Jokes from "./components/Jokes";

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
}

/*function App() {
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
export default App; */
