import Header from "./components/Header";
import Entry from "./components/Entry";
import Contact from "./contact";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Entry />
//     </>
//   );
// }

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
export default App;
