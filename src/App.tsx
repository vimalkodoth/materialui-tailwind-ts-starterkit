import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div>
      <h1>Style Material UI Component with Tailwindcss in React App</h1>
      <Button
        variant="contained"
        className="bg-black text-3xl"
        sx={{ color: "primary.main" }}
      >
        Contained
      </Button>
    </div>
  );
}

export default App;
