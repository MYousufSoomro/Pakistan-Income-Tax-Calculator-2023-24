import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function TaxSlabs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Typography variant="h4">Income Tax Slabs</Typography>

      <br />
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Slab 1</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Salary income does not exceed Rs. 600,000
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Where the taxable salary income does not exceed Rs. 600,000, the
              rate of income tax is <strong>0%</strong>.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Slab 2</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Salary income exceeds Rs. 600,000 but does not exceed Rs.
              1,200,000
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Where the taxable salary income exceeds Rs. 600,000 but does not
              exceed Rs. 1,200,000, the rate of income tax is{" "}
              <strong>2.5%</strong> of the amount exceeding Rs. 600,000.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Slab 3</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Salary income exceeds Rs. 1,200,000 but does not exceed Rs.
              2,400,000
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Where the taxable salary income exceeds Rs. 1,200,000 but does not
              exceed Rs. 2,400,000, the rate of income tax is{" "}
              <strong>Rs. 15,000 + 12.5%</strong> of the amount exceeding Rs.
              1,200,000.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Slab 4</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Salary income exceeds Rs. 2,400,000 but does not exceed Rs.
              3,600,000
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Where the taxable salary income exceeds Rs. 2,400,000 but does not
              exceed Rs. 3,600,000, the rate of income tax is{" "}
              <strong>Rs. 165,000 + 22.5%</strong> of the amount exceeding Rs.
              2,400,000.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Slab 5</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Salary income exceeds Rs. 3,600,000 but does not exceed Rs.
              6,000,000
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Where the taxable salary income exceeds Rs. 3,600,000 but does not
              exceed Rs. 6,000,000, the rate of income tax is{" "}
              <strong>Rs. 435,000 + 27.5%</strong> of the amount exceeding Rs.
              3,600,000.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Slab 6</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Salary income exceeds Rs. 6,000,000
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Where the taxable salary income exceeds Rs. 6,000,000, the rate of
              income tax is <strong>Rs. 1,095,000 + 35%</strong> of the amount
              exceeding Rs. 6,000,000.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <br />
    </div>
  );
}

export default TaxSlabs;
