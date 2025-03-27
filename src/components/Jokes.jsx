export default function Jokes(props) {
  return (
    <header className="header">
      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      <p>Punchline: {props.punchline}</p>
    </header>
  );
}
