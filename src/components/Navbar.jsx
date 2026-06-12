function Navbar() {
  return (
    <nav style={{ padding: "15px", borderBottom: "1px solid #ccc" }}>
      <h2>AI Product Description Generator</h2>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Home</li>
        <li>Generate</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;