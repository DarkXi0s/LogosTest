import React, { useState } from "react";
//ReactStrap
import { Button, Container, Row, Col } from "reactstrap";
import "assets/css/logos.css";
//React MUI
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const SearchField = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <Container fluid>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div className="search">
            <div className="searchInputs">
              <TextField
                type="text"
                fullWidth
                id="outlined-basic"
                value={wordEntered}
                onChange={handleFilter}
                label={placeholder}
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
                      <div className="searchIcon">
                        {filteredData.length === 0 ? (
                          <SearchIcon />
                        ) : (
                          <CloseIcon
                            style={{ fontSize: "35px" }}
                            id="clearBtn"
                            onClick={clearInput}
                          />
                        )}
                      </div>
                    </Button>
                  ),
                }}
              />
            </div>
            {filteredData.length !== 0 && (
              <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    <Link className="dataItem" to={value.link} target="_blank">
                      <h5>{value.title}</h5>
                      <img
                        src={require(`assets/img/${value.posterURL}`).default}
                        alt="img"
                        style={{
                          width: "80px",
                          maxWidth: "80px",
                          height: "100px",
                          maxHeight: "100px",
                        }}
                      />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
};

export default SearchField;
