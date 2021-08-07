import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography, Container } from "@material-ui/core";
//select box
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(dateTime, clientName, phoneNumber, openingBalance, amount, closingBalance) {
  return { dateTime, clientName, phoneNumber, openingBalance, amount, closingBalance };
}

const rows = [
  createData("2/2/2022", "Himanshu", 1234567891, 9000, 2000, 3000),
  createData("2/2/2022", "Himanshu", 1234567891, 9000, 2000, 3000),
  createData("2/2/2022", "Himanshu", 1234567891, 9000, 2000, 3000),
  createData("2/2/2022", "Himanshu", 1234567891, 9000, 2000, 3000),
  createData("2/2/2022", "Himanshu", 1234567891, 9000, 2000, 3000),
  createData("2/2/2022", "Himanshu", 1234567891, 9000, 2000, 3000),
  createData("2/2/2022", "Himanshu", 1234567891, 9000, 2000, 3000),
];

const useStyles = makeStyles((theme) => {
  return {
    table: {
      minWidth: 700,
    },

    formControl: {
      minWidth: 150,
    },
    selectEmpty: {
      // marginTop: theme.spacing(2),
    },
  };
});

export default function DashboardTable() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ padding: "15px 0" }}>
        <Grid item xs={6}>
          <Typography variant="h6">Transection History</Typography>
        </Grid>

        <Grid item container xs={6} justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl} size="small" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label1">Clients</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label1"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl} size="small" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label2">Select a location</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label2"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <div>
              <Button variant="contained" startIcon={<CalendarTodayIcon />} onClick={openMenu}>
                Last Month
              </Button>
              <Menu id="lame-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Last Month</MenuItem>
                <MenuItem onClick={handleClose}>Last Week</MenuItem>
                <MenuItem onClick={handleClose}>Today</MenuItem>
                <MenuItem onClick={handleClose}>Last 12 Hours</MenuItem>
              </Menu>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date & Time</StyledTableCell>
              <StyledTableCell>Client Name</StyledTableCell>
              <StyledTableCell align="right">Phone Number&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Opening Balance&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Amount&nbsp;($)</StyledTableCell>
              <StyledTableCell align="right">Closing Balance&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.dateTime}
                </StyledTableCell>
                <StyledTableCell>{row.clientName}</StyledTableCell>
                <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
                <StyledTableCell align="right">
                  {index % 2 == 1 ? (
                    row.openingBalance
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                      <ArrowUpwardRoundedIcon
                        style={{
                          padding: "0",
                          marginRight: "4px",
                          border: "2px solid green",
                          borderRadius: "50%",
                          color: "green",
                        }}
                      />
                      {`${row.openingBalance}`}
                    </div>
                  )}
                </StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">{row.closingBalance}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
