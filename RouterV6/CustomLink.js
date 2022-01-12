import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

const Home = () => <h2>Home</h2>;
const Settings = () => <h2>Settings</h2>;
const Notifications = () => <h2>Notifications</h2>;

const EmojiLink = ({ children, to, emoji }) => {
  const location = useLocation();
  const match = location.pathname === to;

  return (   
    <div>
      {match ? <span>{emoji}</span> : ""}
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div>
        <EmojiLink exact={true} to="/" emoji={`🏠`}>
          Home
        </EmojiLink>
        <EmojiLink to="/notifications" emoji={`🔔`}>
          Notifications
        </EmojiLink>
        <EmojiLink to="/settings" emoji={`⚙️`}>
          Settings
        </EmojiLink>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}
