/*
| Developed by Reskue
| Filename: SalaryWheel.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { Ref, useEffect, useState } from "react";
import { Chip, Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useDraggable } from "@/hooks/useDraggable";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SalaryWheelProps {
  children?: React.ReactNode;
  onSalaryChange?: (salary: string) => void;
  initialSalary?: string;
}

const findClosestIndex = (salary: string) => {
  const salaryNumber = parseInt(salary, 10);
  let closest = 0;
  for (let i = 0; i < data.length; i++) {
    const currentNumber = parseInt(data[i], 10);
    if (currentNumber > salaryNumber) {
      break;
    }
    closest = i;
  }
  return closest;
};

/*
|--------------------------------------------------------------------------
| Data
|--------------------------------------------------------------------------
*/
const data = [
  "10000",
  "11000",
  "12000",
  "13000",
  "14000",
  "15000",
  "16000",
  "17000",
  "18000",
  "19000",
  "20000",
  "21000",
  "22000",
  "23000",
  "24000",
  "25000",
  "26000",
  "27000",
  "28000",
  "29000",
  "30000",
  "31000",
  "32000",
  "33000",
  "34000",
  "35000",
  "36000",
  "37000",
  "38000",
  "39000",
  "40000",
  "42000",
  "44000",
  "46000",
  "48000",
  "50000",
  "52000",
  "54000",
  "56000",
  "58000",
  "60000",
  "62000",
  "64000",
  "66000",
  "68000",
  "70000",
  "72000",
  "74000",
  "76000",
  "78000",
  "80000",
  "85000",
  "90000",
  "95000",
  "100000",
  "105000",
  "110000",
  "115000",
  "120000",
  "125000",
  "130000",
  "135000",
  "140000",
  "145000",
  "150000",
  "160000",
  "170000",
  "180000",
  "190000",
  "200000",
  "210000",
  "220000",
  "230000",
  "240000",
  "250000",
  "275000",
  "300000",
  "325000",
  "350000",
  "375000",
  "400000",
  "425000",
  "450000",
  "475000",
  "500000",
];

const currencies = [
  { label: "GBP (£)", sign: "£" },
  { label: "EUR (€)", sign: "€" },
  { label: "USD ($)", sign: "$" },
];
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const RadialProgressBar = styled(Box)(() => ({
  background: "#D9D9D9",
  position: "relative",
  borderRadius: "50%",
  overflow: "hidden",
  height: "300px",
  width: "300px",
  zIndex: 1,
  cursor: "normal",
}));
const RPBHalf1 = styled(Box)({
  height: "50%",
  width: "100%",
  transformOrigin: "50% 100%",
  background: "#00FBDF",
  transform: "rotate(90deg)",
});

const RPBHalf2 = styled(Box)({
  position: "absolute",
  top: 0,
  height: "50%",
  width: "100%",
  transformOrigin: "50% 100%",
  background: "rgb(203 213 225)",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: "1rem",
  left: "1rem",
  right: "1rem",
  bottom: "1rem",
  borderRadius: "50%",
  background: "#F9F9F9",
});

const Circle = styled(Box)({
  position: "absolute",
  top: "0.5rem",
  left: "0.5rem",
  right: "0.5rem",
  bottom: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BoxDraggable = styled(Box)({
  background: "#00c8b7",
  borderRadius: "50%",
  height: "1rem",
  width: "1rem",
  position: "absolute",
  top: 0,
  left: 0,
  cursor: "grab",
});

const TypographyStyled = styled(Typography)(() => ({
  textAlign: "center",
  fontFamily: "Anton",
  fontSize: "1.25rem",
}));

const ChipStyled = styled(Chip)({
  padding: "0.5rem",
  borderRadius: "1rem",
  fontFamily: "Roboto",
  fontSize: "1rem",
  fontWeight: 400,
});
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const SalaryWheel: React.FC<SalaryWheelProps> = ({ onSalaryChange, initialSalary }) => {
  const initialIndex = initialSalary ? findClosestIndex(initialSalary) : 0.75;
  const initialPercentage = initialIndex / (data.length - 1);

  const [valueProgress, setValueProgress] = useState(initialPercentage);
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = React.useState(0);
  const [draggbleRef, dx, dy, angle] = useDraggable({
    initialAngle: valueProgress,
  });

  useEffect(() => {
    if (initialSalary) {
      const newIndex = data.indexOf(initialSalary);
      const newPercentage = newIndex / (data.length - 1);
      setValueProgress(newPercentage);
    }
  }, []);

  useEffect(() => {
    const salaryIndex = Math.round(angle as number * (data.length - 1));
    const salary = data[salaryIndex] + ".000";
    onSalaryChange?.(salary);
  }, [angle]);



  // Render
  //--------------------------------------------------------------------------
  return (
    <Box component="div">
      <RadialProgressBar>
        <RPBHalf1 />
        <RPBHalf2
          style={{
            background: (angle as number) > 0.5 ? "#00FBDF" : "inherit",
            transform: `rotate(${(angle as number) > 0.5
              ? (((angle as number) - 0.25) % 1) * 360
              : (((angle as number) + 0.25) % 1) * 360
              }deg)`,
          }}
        />
        <Overlay />
        <Circle>
          <BoxDraggable
            ref={draggbleRef as Ref<HTMLElement>}
            style={{
              transform: `translate(${dx}px, ${dy}px)`,
              zIndex: 9999,
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'

            }}>
            <TypographyStyled>
              <span style={{ fontSize: "2.5rem" }}>
                {currencies[selectedCurrencyIndex].sign}
                {new Intl.NumberFormat("en-US").format(parseInt(data[Math.round((angle as number) * (data.length - 1))]))}
              </span>
            </TypographyStyled>
            <TypographyStyled>
              Min. Salary
            </TypographyStyled>
          </Box>
        </Circle>
      </RadialProgressBar>
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={5}
      >
        {currencies.map((currency, index) => (
          <ChipStyled
            key={index}
            label={currency.label}
            variant="filled"
            sx={{
              background:
                index === selectedCurrencyIndex ? "#00FBDF" : "#D9D9D9",
            }}
            onClick={() => setSelectedCurrencyIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};
