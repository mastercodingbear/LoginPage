import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  indicator: {
    bottom: 0,
    "& li.slick-active button::before": {
      color: theme.palette.primary.main
    },
    "& li": {
      margin: 0,
      "& button::before": {
        fontSize: theme.typography.pxToRem(14),
        color: "rgba(86, 89, 100, 0.251)",
        opacity: 0.5
      }
    }
  },
  title: {
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    '&::before': {
      content: '"❝"',
      display: 'block',
      color: theme.palette.primary.main,
      fontSize: 48,
      lineHeight: 1,
      marginRight: 16,
    }
  },
  bold: {
    color: theme.palette.primary.main,
  },
  text: {
    lineHeight: '1.5',    
    marginBottom: '3rem',
  },
  name: {
    fontWeight: 500,
  },
  role: {
    marginBottom: '2rem',
  },
  slider: {
    maxWidth: '58%',
    minWidth: '58%',
    marginBottom: '110px',
    [theme.breakpoints.down("xs")]: {
      display: 'none',
    },
  }
}));

export default function QuoteCarousel() {
  const classes = useStyles();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `slick-dots ${classes.indicator}`
  };

  return (
    <Slider {...settings} className={classes.slider}>
      <div>
        <Typography variant="h6" color="textPrimary" className={classes.title} align="center">
          <span className={classes.bold}>20</span>+ Years in Business. Helping Global Customer.
        </Typography>
        <Typography variant="body1" color="textPrimary" className={classes.text} align="center">
          " Helping business and streamlining business processes is what we love. In our 20 years in business,
            we helped hundreads of customers worldwide identify and fix their process bottlenecks. "
        </Typography>
        <Typography variant="body1" color="primary" className={classes.name} align="center">
          THRIS
        </Typography>
        <Typography variant="body2" color="textPrimary" className={classes.role} align="center">
          Admin User
        </Typography>
      </div>
      <div>
        <Typography variant="h6" color="textPrimary" className={classes.title} align="center">
          <span className={classes.bold}>20</span>+ Years in Business. Helping Global Customer.
        </Typography>
        <Typography variant="body1" color="textPrimary" className={classes.text} align="center">
          " Helping business and streamlining business processes is what we love. In our 20 years in business,
            we helped hundreads of customers worldwide identify and fix their process bottlenecks. "
        </Typography>
        <Typography variant="body1" color="primary" className={classes.name} align="center">
          <strong>THRIS</strong>
        </Typography>
        <Typography variant="body2" color="textPrimary" className={classes.role} align="center">
          Admin User
        </Typography>
      </div>
    </Slider>
  );
};