import "./App.css";
import { Messages } from "./component/messages";
import { Form } from "./component/form";
import React, { useState, useEffect } from "react";
import { socket } from "./socket";

function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        // function onFooEvent(value) {
        //     setFooEvents((previous) => [...previous, value]);
        // }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        // socket.on("foo", onFooEvent);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            // socket.off("foo", onFooEvent);
        };
    }, []);

    return (
        <div className="App">
            <Messages />
            <Form />
        </div>
    );
}

export default App;
