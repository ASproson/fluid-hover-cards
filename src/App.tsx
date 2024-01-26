function App() {
  return (
    <div className="grid min-h-screen place-items-center">
      <ul className="flex gap-4 w-full max-w-6xl">
        {[...Array(4).keys()].map((item) => (
          <li className="bg-rose-300 h-[500px] w-full"></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
