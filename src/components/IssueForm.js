import { Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./IssueForm.css";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import image from "../image/issue.png"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const productname = ["Velai Vendum", "Childbazaar"];

const formname = ["job seeker", "job provider"];

const names=[
  {id:"11", name: "Divya", assign:"Divya", email: "divya@gmail.com"},
  {id:"12", name: "Bala", assign:"Bala", email: "Bala@gmail.com" },
  {id:"13", name: "udhaya", assign:"udhaya", email: "udhaya@gmail.com"},
  {id:"14", name: "siva", assign:"siva", email: "siva@gmail.com"},
  {id:"15", name: "sai",  assign:"sai", email: "sai@gmail.com"},
  {id:"16", name: "lokesh", assign:"lokesh", email: "lokesh@gmail.com"},
  {id:"17", name: "Gayathiri",  assign:"Gayathiri", email: "Gayathiri@gmail.com"},
];

// const developernames = [
//   "Divya",
//   "Bala",
//   "udhaya",
//   "siva",
//   "sai",
//   "lokesh",
//   "Gayathiri",
// ];

// const assignnames = [
//   "Divya",
//   "Bala",
//   "udhaya",
//   "siva",
//   "sai",
//   "lokesh",
//   "Gayathiri",
// ];

// const emailnames = [
//   { name: "Divya", email: "divya@gmail.com" },
//   { name: "Bala", email: "Bala@gmail.com" },
//   { name: "udhaya", email: "udhaya@gmail.com" },
//   { name: "siva", email: "siva@gmail.com" },
//   { name: "sai", email: "sai@gmail.com" },
//   { name: "lokesh", email: "lokesh@gmail.com" },
//   { name: "Gayathiri", email: "Gayathiri@gmail.com" },
// ];
function IssueForm() {
  // const [idname, setIdname] = useState('');
  const [product, setProduct] = useState([]);
  const [form, setForm] = useState([]);
  const [develop, setDevelop] = useState([]);
  const [issue, setIssue] = useState("");
  const [upload, setUpload] = useState("");
  const [submit, setSubmit] = useState([]);

  const handlesubmit = () => {
    setSubmit([...submit, {product, form, develop, upload, issue }]);
    console.log("submit", submit);
  };

  // const handleId = (event) => {
  //   setIdname(event.target.value);
  // };

  const handleProduct = (event) => {
    setProduct(event.target.value);
  };

  const handleForm = (event) => {
    setForm(event.target.value);
  };

  const handleDevelop = (event) => {
    setDevelop(event.target.value)
   
  };

  const handleissue = (event) => {
    setIssue(event.target.value);
  };

  const handleupload = (e) => {
    console.log(e.target.files);
    setUpload(e.target.files[0]);
  };
  return (
    <div>
       
      <div className="issueContainer">
     
      <h4 className="fonts">welcome !</h4>
     
        {/* <img src={image}>
        </img> */}
        <div className="issueFirstPage" >
        <Grid container rowSpacing={2} columnSpacing={5}  >
            <Grid item xs={12}>
            <Typography sx={{margin:2,fontFamily:"serif",fontSize:"30px",color:"#2dc7fa",textAlign:"center"}} variant="h5"> ISSUE TRACKER </Typography>
            </Grid>
          <Grid item xs={12} md={6}>

          <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label">
                IdName
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={develop}
                onChange={handleDevelop}
                input={<OutlinedInput label="idname" />}
                MenuProps={MenuProps}
              >
                {names.map((idname,index) => (
                  <MenuItem key={index} value={idname}>{idname.id}
                  
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* <TextField
              fullWidth
              value={idname}
              onChange={handleId}
              id="outlined-basic"
              label="id"
              variant="outlined"
            /> */}
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label">
                developerName
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={develop}
                onChange={handleDevelop}
                input={<OutlinedInput label="developerName" />}
                MenuProps={MenuProps}
              >
                {names.map((developer,index) => (
                  <MenuItem key={index} value={developer}>{developer.name}
                  
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label">
             Assign to dev
              </InputLabel> 
              {/* <TextField id="outlined-basic"  variant="outlined" /> */}
            
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={develop}
                onChange={handleDevelop}
                input={<OutlinedInput label="Assign to Dev" />}
                MenuProps={MenuProps}
            
              >
                 
                  
                {names.map((assigned,index) => (
                  <MenuItem key={index} value={assigned}>
                    {assigned.assign}
                  </MenuItem>
                ))}
              </Select>
              {/* {`${develop ? develop.assign:""}`} */}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label"> Email</InputLabel>

              {/* <TextField id="outlined-basic"  variant="outlined" /> */}
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={develop}
                onChange={handleDevelop}
                input={<OutlinedInput label="Email" />}
                MenuProps={MenuProps}
              >
                {names.map((mails, index) => (
                  <MenuItem key={index} value={mails}>
                    {mails.email}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel className="set" id="demo-multiple-name-label">
                ProductName
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={product}
                onChange={handleProduct}
                input={<OutlinedInput label="ProductName" />}
                MenuProps={MenuProps}
              >
                {productname.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel className="set" id="demo-multiple-name-label">
                formName
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={form}
                onChange={handleForm}
                input={<OutlinedInput label="formName" />}
                MenuProps={MenuProps}
              >
                {formname.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label">
                developerName
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={develop}
                onChange={handleDevelop}
                input={<OutlinedInput label="developerName" />}
                MenuProps={MenuProps}
              >
                {names.map((developer,index) => (
                  <MenuItem key={index} value={developer}>{developer.name}
                  
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label">
              {`${develop ? develop.assign:""}`}
              </InputLabel> 
              <TextField id="outlined-basic"  variant="outlined" />
            
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={develop}
                onChange={handleDevelop}
                input={<OutlinedInput label="Assign to Dev" />}
                MenuProps={MenuProps}
            
              >
                 
                  
                {assignnames.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              {`${develop ? develop.assign:""}`}
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label"> {`${develop ? develop.email:""}`}</InputLabel>

              <TextField id="outlined-basic" label="email" variant="outlined" />
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={develop}
                onChange={handleDevelop}
                input={<OutlinedInput label="Email" />}
                MenuProps={MenuProps}
              >
                {emailnames.map((name, index) => (
                  <MenuItem key={index} value={name.name}>
                    {name.email}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={12}>
            <TextField 
            fullWidth
              id="outlined-multiline-static"
              label="Issue"
              multiline
              value={issue}
              onChange={handleissue}
              rows={3}
            />
          </Grid>
          <Grid item xs={12} sx={{textAlign:"center"}}>
            <input type="file" name="file" onChange={handleupload}></input>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="outlined-helperText"
                label="status"
                sx={{ textAlign: "center", justifyContent: "center" }}
                defaultValue="open"
                color="success"
                focused
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{textAlign:"center"}}>
            <Button variant="contained" sx={{width:"30%",margin:2}} className="button" onClick={handlesubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
        </div>
      </div>
    </div>
  );
}

export default IssueForm;
