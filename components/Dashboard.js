import DashboardTable from "./DasboardTable";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import GradeIcon from "@material-ui/icons/Grade";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  drawerLogo: {
    fontSize: 20,
    padding: 16,
  },

  drawerIcons: {
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: 20,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    flexGrow: 1,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  //cards

  card: {
    display: "flex",
    alignItems: "center",
  },

  CardContentFlex: {
    flex: "1 0 50%",
  },

  CardActionFlex: {
    flex: "1 0 50%",
    textAlign: "center",
  },

  cardTitle: {
    fontSize: 10,
  },

  amount: {
    fontSize: 25,
    fontWeight: 700,
  },

  cardIcon: {
    fontSize: 50,
    padding: 5,
    border: "1px solid white",
    borderRadius: "50%",
  },
}));

const menuItems = [
  {
    text: "Analytics",
    icon: <AssessmentIcon />,
  },

  {
    text: "Credit Limit & Period",
    icon: <CreditCardIcon />,
  },
  {
    text: "Management",
    icon: <GradeIcon />,
  },
];

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* <---- AppBar Start ----> */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} noWrap>
            Dashboard
          </Typography>
          <Button style={{ textTransform: "capitalize" }} startIcon={<AccountCircleIcon />} color={"inherit"}>
            Manager
          </Button>
        </Toolbar>
      </AppBar>

      {/* <---- AppBar Ends ----> */}

      {/* <---- Drawer Start ----> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Typography className={classes.drawerLogo}>Op Dashboard</Typography>
        <Divider />

        <div className={classes.drawerIcons}>
          <SearchIcon />
          <PersonIcon />
          <SettingsApplicationsIcon />
        </div>

        <Divider />

        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon> {item.icon} </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* <---- Drawer End ----> */}

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <DashboardCard /> */}

        <Container>
          <Typography variant="h6" gutterBottom>
            Today's Stats
          </Typography>

          <Grid container direction="row" justifyContent="center" spacing={2}>
            <Grid item xs={4}>
              {/* <---  Card Start --> */}
              <Card className={classes.card} style={{ background: "#002984", color: "white" }}>
                <CardContent className={classes.CardContentFlex}>
                  <Typography className={classes.cardTitle} style={{ letterSpacing: "2px" }} gutterBottom>
                    Total Earnings
                  </Typography>
                  <Typography className={classes.cardAmount} variant="h5" component="h2">
                    $50K
                  </Typography>
                </CardContent>

                <CardContent className={classes.CardActionFlex}>
                  <AttachMoneyIcon className={classes.cardIcon} />
                </CardContent>
              </Card>
              {/* <---  Card End --> */}
            </Grid>

            <Grid item xs={4}>
              {/* <---  Card Start --> */}
              <Card className={classes.card} style={{ background: "#ba000d", color: "white" }}>
                <CardContent className={classes.CardContentFlex}>
                  <Typography className={classes.cardTitle} style={{ letterSpacing: "2px" }} gutterBottom>
                    Customers
                  </Typography>
                  <Typography className={classes.cardAmount} variant="h5" component="h2">
                    $50K
                  </Typography>
                </CardContent>

                <CardContent className={classes.CardActionFlex}>
                  <AttachMoneyIcon className={classes.cardIcon} />
                </CardContent>
              </Card>
              {/* <---  Card End --> */}
            </Grid>

            <Grid item xs={4}>
              {/* <---  Card Start --> */}
              <Card className={classes.card} style={{ background: "#002984", color: "white" }}>
                <CardContent className={classes.CardContentFlex}>
                  <Typography className={classes.cardTitle} style={{ letterSpacing: "2px" }} gutterBottom>
                    Monthly transactions
                  </Typography>
                  <Typography className={classes.cardAmount} variant="h5" component="h2">
                    $50K
                  </Typography>
                </CardContent>

                <CardContent className={classes.CardActionFlex}>
                  <AttachMoneyIcon className={classes.cardIcon} />
                </CardContent>
              </Card>
              {/* <---  Card End --> */}
            </Grid>
          </Grid>
          <DashboardTable />
        </Container>
      </main>
    </div>
  );
}
