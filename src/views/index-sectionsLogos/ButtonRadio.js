import React from "react";
//MUI design
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ButtonRadio = () => {
  return (
    <div style={{ paddingTop: "4%", paddingBottom: "3%" }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort By :</FormLabel>
        <RadioGroup row aria-label="Sort By" name="row-radio-buttons-group">
          <FormControlLabel value="dates" control={<Radio />} label="dates" />
          <FormControlLabel
            value="popularity"
            control={<Radio />}
            label="popularity"
          />
          <FormControlLabel value="A-Z" control={<Radio />} label="A-Z" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ButtonRadio;
