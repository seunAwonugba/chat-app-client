import * as React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const Form = () => {
    return (
        <div className="form">
            <form>
                <div className="form-container">
                    <TextField
                        id="outlined-basic"
                        placeholder="write message..."
                        variant="outlined"
                        fullWidth
                    />
                    <div className="button">
                        <Button variant="contained">Send</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
