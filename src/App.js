import { useState } from "react";
import "./App.css";
import tax from "./assets/images/tax.jpg";
import taxFree from "./assets/images/tax_free.jpg";
import stop from "./assets/images/limit.jpg";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import TaxSlabs from "./Components/TaxSlabs";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Fab from "@mui/material/Fab";

function App() {
  const [limit, setLimit] = useState("");
  const [value, setValue] = useState("");
  const [Monthly_Income, setMonthly_Income] = useState("");
  const [Monthly_Tax, setMonthly_Tax] = useState("");
  const [Salary_After_Tax, setSalary_After_Tax] = useState("");
  const [Yearly_Income, setYearly_Income] = useState("");
  const [Yearly_Tax, setYearly_Tax] = useState("");
  const [Yearly_Income_After_Tax, setYearly_Income_After_Tax] = useState("");
  const [taxSlabStatus, settaxSlabStatus] = useState(false);

  const currencyFormat = (num) => {
    return "Rs " + num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  // const validateChk = (e) => {
  //   const re = /^[0-9\b]+$/;
  //   if (e.target.value === "" || re.test(e.target.value)) {
  //     setValue(e.target.value);
  //   }
  //   calcTax();
  // };

  const calcTax = (e) => {
    const income = Number(e.target.value);
    var flag = false;

    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      flag = true;
    }
    if (flag) {
      if (income > 0 && income <= 600000 / 12) {
        setValue(income);
        setLimit(false);
        setMonthly_Income(currencyFormat(parseFloat(income).toFixed(2)));
        setMonthly_Tax("");
        setSalary_After_Tax(currencyFormat(parseFloat(income).toFixed(2)));
        setYearly_Income(currencyFormat(parseFloat(income * 12).toFixed(2)));
        setYearly_Tax("");
        setYearly_Income_After_Tax(
          currencyFormat(parseFloat(income * 12).toFixed(2))
        );
      } else if (income > 600000 / 12 && income <= 1200000 / 12) {
        let flag = income * 12 - 600000;

        setValue(income);
        setLimit(false);
        setMonthly_Income(currencyFormat(parseFloat(income).toFixed(2)));
        setMonthly_Tax(
          currencyFormat(parseFloat(((flag / 100) * 2.5) / 12).toFixed(2))
        );
        setSalary_After_Tax(
          currencyFormat(
            parseFloat(income - ((flag / 100) * 2.5) / 12).toFixed(2)
          )
        );
        setYearly_Income(currencyFormat(parseFloat(income * 12).toFixed(2)));
        setYearly_Tax(
          currencyFormat(parseFloat((flag / 100) * 2.5).toFixed(2))
        );
        setYearly_Income_After_Tax(
          currencyFormat(
            parseFloat(income * 12 - (flag / 100) * 2.5).toFixed(2)
          )
        );
      } else if (income > 1200000 / 12 && income <= 2400000 / 12) {
        let flag = income * 12 - 1200000;

        setValue(income);
        setLimit(false);
        setMonthly_Income(currencyFormat(parseFloat(income).toFixed(2)));
        setMonthly_Tax(
          currencyFormat(
            parseFloat(((flag / 100) * 12.5) / 12 + 1250).toFixed(2)
          )
        );
        setSalary_After_Tax(
          currencyFormat(
            parseFloat(income - (((flag / 100) * 12.5) / 12 + 1250)).toFixed(2)
          )
        );
        setYearly_Income(currencyFormat(parseFloat(income * 12).toFixed(2)));
        setYearly_Tax(
          currencyFormat(parseFloat((flag / 100) * 12.5 + 15000).toFixed(2))
        );
        setYearly_Income_After_Tax(
          currencyFormat(
            parseFloat(income * 12 - ((flag / 100) * 12.5 + 15000)).toFixed(2)
          )
        );
      } else if (income > 2400000 / 12 && income <= 3600000 / 12) {
        let flag = income * 12 - 2400000;

        setValue(income);
        setLimit(false);
        setMonthly_Income(currencyFormat(parseFloat(income).toFixed(2)));
        setMonthly_Tax(
          currencyFormat(
            parseFloat(((flag / 100) * 22.5) / 12 + 13750).toFixed(2)
          )
        );
        setSalary_After_Tax(
          currencyFormat(
            parseFloat(income - (((flag / 100) * 22.5) / 12 + 13750)).toFixed(2)
          )
        );
        setYearly_Income(currencyFormat(parseFloat(income * 12).toFixed(2)));
        setYearly_Tax(
          currencyFormat(parseFloat((flag / 100) * 22.5 + 165000).toFixed(2))
        );
        setYearly_Income_After_Tax(
          currencyFormat(
            parseFloat(income * 12 - ((flag / 100) * 22.5 + 165000)).toFixed(2)
          )
        );
      } else if (income > 3600000 / 12 && income <= 6000000 / 12) {
        let flag = income * 12 - 3600000;

        setValue(income);
        setLimit(false);
        setMonthly_Income(currencyFormat(parseFloat(income).toFixed(2)));
        setMonthly_Tax(
          currencyFormat(
            parseFloat(((flag / 100) * 27.5) / 12 + 36250).toFixed(2)
          )
        );
        setSalary_After_Tax(
          currencyFormat(
            parseFloat(income - (((flag / 100) * 27.5) / 12 + 36250)).toFixed(2)
          )
        );
        setYearly_Income(currencyFormat(parseFloat(income * 12).toFixed(2)));
        setYearly_Tax(
          currencyFormat(parseFloat((flag / 100) * 27.5 + 435000).toFixed(2))
        );
        setYearly_Income_After_Tax(
          currencyFormat(
            parseFloat(income * 12 - ((flag / 100) * 27.5 + 435000)).toFixed(2)
          )
        );
      } else if (income > 6000000 / 12 && income <= 50000000000) {
        let flag = income * 12 - 6000000;

        setValue(income);
        setLimit(false);
        setMonthly_Income(currencyFormat(parseFloat(income).toFixed(2)));
        setMonthly_Tax(
          currencyFormat(
            parseFloat(((flag / 100) * 35) / 12 + 91250).toFixed(2)
          )
        );
        setSalary_After_Tax(
          currencyFormat(
            parseFloat(income - (((flag / 100) * 35) / 12 + 91250)).toFixed(2)
          )
        );
        setYearly_Income(currencyFormat(parseFloat(income * 12).toFixed(2)));
        setYearly_Tax(
          currencyFormat(parseFloat((flag / 100) * 35 + 1095000).toFixed(2))
        );
        setYearly_Income_After_Tax(
          currencyFormat(
            parseFloat(income * 12 - ((flag / 100) * 35 + 1095000)).toFixed(2)
          )
        );
      } else if (income > 50000000000) {
        setValue(income);
        setLimit(true);
        setMonthly_Income("");
      } else if (
        income === "" ||
        income === 0 ||
        income === null ||
        income === undefined
      ) {
        setValue("");
        setLimit(false);
        setMonthly_Income("");
        setMonthly_Tax("");
        setSalary_After_Tax("");
        setYearly_Income("");
        setYearly_Tax("");
        setYearly_Income_After_Tax("");
      }
    }
  };

  return (
    <div>
      <Appbar />
      <Container>
        <br />
        <Typography variant="h5">
          Enter Your Monthly Salary to Calculate Tax
        </Typography>
        <Typography
          className="urdu"
          variant="h5"
          style={{ textAlign: "right" }}
        >
          ٹیکس معلوم کرنے کے لئے اپنی ماہانہ آمدنی درج کریں
        </Typography>

        <TextField
          id="salaryInputBox"
          label="Monthly Salary "
          type="number"
          margin="normal"
          variant="outlined"
          value={value}
          fullWidth={true}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 12);
          }}
          inputProps={{
            style: { fontSize: 30 },
          }}
          onChange={calcTax}
        />
        <br />
        <br />

        {limit && (
          <div>
            <img src={stop} alt="Not Allowed" />
            <Typography variant="h3">
              Itni Salary kisi ki Nahi Hoti..
            </Typography>
          </div>
        )}
      </Container>
      <div align="center">
        {Monthly_Income && Monthly_Tax === "" && (
          <img src={taxFree} alt="Enjoy You are not required to pay any Tax!" />
        )}
        {Monthly_Income && Monthly_Tax !== "" && (
          <img src={tax} alt="Please Pay Tax to support the country!" />
        )}
      </div>
      {/* New Styling Start */}
      {!limit && (
        <div className="container">
          <div>
            <div className="row">
              <div className="col-25">
                <label>Monthly Income</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  value={Monthly_Income}
                  style={{ color: "white" }}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Monthly Tax</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  value={Monthly_Tax}
                  style={{
                    color: "white",
                    fontWeight: "600",
                    textShadow: "2px 0px red",
                  }}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Salary Take Home</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  value={Salary_After_Tax}
                  style={{ color: "white" }}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Yearly Income</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  value={Yearly_Income}
                  style={{ color: "white" }}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Yearly Tax</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  value={Yearly_Tax}
                  style={{
                    color: "white",
                    fontWeight: "600",
                    textShadow: "2px 0px red",
                  }}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Yearly Income After Tax</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  value={Yearly_Income_After_Tax}
                  style={{ color: "white" }}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <br />

      {!taxSlabStatus && (
        <div align="center">
          <Fab
            color="primary"
            variant="extended"
            aria-label="Delete"
            style={{ margin: "0", marginTop: "5px" }}
            onClick={() => {
              settaxSlabStatus(!taxSlabStatus);
            }}
          >
            <VisibilityIcon style={{ marginRight: "0" }} />
            ­Show Income Tax Slabs
          </Fab>
        </div>
      )}
      <br />
      {taxSlabStatus && (
        <Container>
          <TaxSlabs />
          <div align="center">
            <Fab
              color="secondary"
              variant="extended"
              aria-label="Delete"
              style={{ margin: "0" }}
              onClick={() => {
                settaxSlabStatus(!taxSlabStatus);
              }}
            >
              <VisibilityOffIcon style={{ marginRight: "0" }} />
              ­Hide Income Tax Slabs
            </Fab>
          </div>
        </Container>
      )}
      <br />

      <Footer />
    </div>
  );
}

export default App;
