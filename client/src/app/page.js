import Test from "./components/Test";
import Login from "./components/forms/Login";
import Signup from "./components/forms/Signup";

export default function Home() {
  return (
    <main>
      <div>
        <Test />
        <Login />
        <Signup />
      </div>
    </main>
  );
}
