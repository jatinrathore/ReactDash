import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Checkbox,
} from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa6";
import metaData, { Department } from "../data/metadata";

const CollapsibleMenu = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<number | false>(
    false
  );

  const [data, setData] = useState<Department[]>(metaData);

  const updateMainDeptCheckBox = (dept: Department) => {
    if (dept.sub_departments) {
      const allSubDeptsChecked = dept.sub_departments.every(
        (subDept) => subDept.isChecked
      );
      dept.isChecked = allSubDeptsChecked;
    }
  };

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedAccordion(isExpanded ? panel : false);
    };

  const handleCheckBoxChange = (id: number) => {
    const updatedData = data.map((dept) => {
      if (dept.id === id) {
        const updatedDept = { ...dept, isChecked: !dept.isChecked };

        if (dept.sub_departments) {
          // Toggle isChecked for sub-departments
          updatedDept.sub_departments = dept.sub_departments.map((subDept) => ({
            ...subDept,
            isChecked: !dept.isChecked,
          }));
        }

        return updatedDept;
      }
      return dept;
    });

    setData(updatedData);
  };

  const handleSubCheckBoxChange = (id: number) => {
    const updatedData = data.map((dept) => {
      const updatedDept = { ...dept };

      if (dept.sub_departments) {
        updatedDept.sub_departments = dept.sub_departments.map((subDept) => {
          if (subDept.id === id) {
            return { ...subDept, isChecked: !subDept.isChecked };
          }
          return subDept;
        });
      }

      updateMainDeptCheckBox(updatedDept);

      return updatedDept;
    });

    setData(updatedData);
  };

  return (
    <Box margin="3rem 0 2rem 0" width="50%">
      {data.map((metaData) => (
        <Accordion
          expanded={expandedAccordion === metaData.id}
          onChange={handleChange(metaData.id)}
          key={metaData.id}
        >
          <AccordionSummary
            expandIcon={
              expandedAccordion === metaData.id ? <FaMinus /> : <FaPlus />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p style={{ margin: 0 }}>
              <Checkbox
                onChange={() => handleCheckBoxChange(metaData.id)}
                checked={metaData.isChecked}
              />
              {metaData.department}
            </p>
          </AccordionSummary>
          <AccordionDetails>
            {metaData.sub_departments.map((subDept) => (
              <p key={subDept.id} style={{ margin: 0, marginLeft: "20px" }}>
                <Checkbox
                  onChange={() => handleSubCheckBoxChange(subDept.id)}
                  checked={subDept.isChecked}
                />
                {subDept.subdepartment}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CollapsibleMenu;
