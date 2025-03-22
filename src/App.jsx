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
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}
export default App;
