var Header = () => {
  return (
      <header>
        <div style={{width: "100%", height: 28}}></div>
        <div style={{width: "100%", height: 72}}>
          <img src="Icon-Logo-1.png" className="IconLogo" alt='movie logo'></img>
          <text className="MH">Movie Hub</text>
          <text className="AM">Add Movie</text>
          <text className="W">Watch</text>
        </div>
        <div style={{width: "100%", height: 28, borderBottom: "1px solid red",}}></div>
      </header>
  )
}
export default Header;
