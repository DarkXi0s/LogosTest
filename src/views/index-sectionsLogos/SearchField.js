import React from "react";
//ReactStrap
import { Button, Container, Row, Col } from "reactstrap";

//React MUI
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="2"></Col>
        <Col style={{ display: "flex" }} md="8">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Vous Cherchez?"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <Button
                  style={{ width: "20%" }}
                  type="submit"
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <SearchIcon />
                </Button>
              ),
            }}
          />
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
};

export default SearchField;
