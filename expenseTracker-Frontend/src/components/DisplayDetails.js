import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "../styles.css";
import CsvDownload from "./CsvDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { ModeEditOutline } from "@mui/icons-material";

function DisplayDetails(props) {
  const type = props.type;

  return (
    <div style={{ marginLeft: "5em", marginRight: "5em" }}>
      <div style={{ marginTop: "2em" }}>
        <TextField
          style={{ margin: "5px", fontFamily: "Poppins" }}
          onChange={props.changeTitle}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          size="small"
        />
        <TextField
          style={{ margin: "5px", fontFamily: "Poppins" }}
          onChange={props.changeAmount}
          id="outlined-basic"
          label="Amount"
          type="number"
          variant="outlined"
          size="small"
        />
        <TextField
          style={{ margin: "5px", fontFamily: "Poppins" }}
          onChange={props.changeReason}
          id="outlined-basic"
          label="Reason"
          variant="outlined"
          size="small"
        />

        <Button
          style={{ margin: "5px", fontFamily: "Poppins" }}
          onClick={props.addData}
          size="medium"
          variant="contained"
          color={type === "INCOME" ? "success" : "error"}
        >
          ADD {type}
        </Button>
        <CsvDownload type={props.type} />
        {props.isError && (
          <Alert severity="error">Please fill all the fields</Alert>
        )}
      </div>
      <div style={{ marginTop: "2em" }}>
        <Grid container spacing={2}>
          {props.listData.map((item, key) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    style={{ fontFamily: "Poppins" }}
                    variant="h5"
                    component="div"
                  >
                    Title : {item?.title}
                  </Typography>
                  <Typography
                    style={{ fontFamily: "Poppins" }}
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                  >
                    Amount : {item?.amount}
                    <br />
                    reason : {item?.reason}
                  </Typography>
                  <CardHeader
                    style={{ fontFamily: "Poppins" }}
                    subheader={item?.timestamp}
                  />
                  <div style={{ float: "right", cursor: "pointer" }}>
                    <IconButton
                      onClick={() => {
                        console.log("EDIT");
                      }}
                    >
                      <ModeEditOutline />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        props.deleteItem(item.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default DisplayDetails;
