import * as React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const Form = ({ socket }) => {
    const [currentMessage, setCurrentMessage] = React.useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!currentMessage) {
            return;
        }
        // console.log(e);

        const messageData = {
            message: currentMessage,
            date: new Date().toDateString(),
        };

        await socket.emit("message_from_client", messageData);
    };

    const handleChange = (e) => {
        setCurrentMessage(e.target.value);
    };

    React.useEffect(() => {
        socket.on("message_from_server", (data) => {
            console.log(data);
        });
    }, [socket]);

    return (
        <div className="form">
            <form>
                <div className="form-container">
                    <TextField
                        id="outlined-basic"
                        placeholder="write message..."
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                    />
                    <div className="button">
                        <Button onClick={sendMessage} variant="contained">
                            Send
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
