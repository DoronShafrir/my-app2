import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Ticket from "./components/Ticket";

function App() {
    //part 1 - declare vars, let , state
    const user = {
        firstname: "Oren",
        lastname: "Zvi",
        city: "Tel aviv",
        addrees: "orange",
        phone: "123456",
    };
    const tickets = [
        { name: "oren", destination: "🇺🇸", seat: "14A", gender: "Mr" },
        { name: "orna", destination: "🇩🇪", seat: "10B", gender: "Mrs" },
        { name: "dana", destination: "🇮🇱", seat: "9B", gender: "Mrs" },
        { name: "david", destination: "🇹🇩", seat: "3B", gender: "Mrs" },
        { name: "shosha", destination: "🇹🇷", seat: "2B", gender: "Mrs" },
        { name: "orna", destination: "🇺🇸", seat: "14B", gender: "Mrs" },
    ];

    const { firstname, lastname } = user;
    console.log(firstname);
    //part 2 - functions effects
    function fullName() {
        return user.firstname + " " + user.lastname;
    }

    const myPassengers = tickets.map((t) => {
        return <Ticket ticket={t} />;
    });

    //part 3 - jsx
    return (
        <div className="container">
            {/* <Nav firstname={user.firstname} lastname={user.lastname} /> */}
            {/* <Nav user={user} /> */}
            <h1>Good morning</h1>
            <p>Hello {fullName()}</p>
            <h2>Tickets</h2>
            {/* <Ticket ticket={tickets[0]} />
            <Ticket ticket={tickets[1]} /> */}
            {myPassengers}
        </div>
    );
}

export default App;