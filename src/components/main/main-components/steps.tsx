import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import useThemeDetection from "../../theme-utils/theme-utils";

// interface StepsProps {}

const Steps: React.FunctionComponent = () => {
  const isLightTheme = useThemeDetection();
  const itemColor = isLightTheme ? "#000" : "#fff";

  const steps = [
    "На этом этапе начнется разработка приложения.",
    "На этом этапе начнется доработка приложения, исправления багов, добавления функционала.",
    "На этом этапе проект будет выпущен в продакшен.",
  ];

  const ColorlibStepLabel = styled(StepLabel)(() => ({
    [`& .${stepLabelClasses.label}`]: {
      [`&.${stepLabelClasses.completed}`]: {
        color: itemColor,
      },
      [`&.${stepLabelClasses.active}`]: {
        color: itemColor,
      },

      color: itemColor,
    },
  }));

  return (
    <div className="main-container__steps">
      <Stack sx={{ width: "100%", background: "inherit" }} spacing={4}>
        <Stepper alternativeLabel activeStep={1}>
          {steps.map((label) => (
            <Step key={label}>
              <ColorlibStepLabel>{label}</ColorlibStepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </div>
  );
};

export default Steps;
