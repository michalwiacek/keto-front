import React, { useState } from "react";

import { Grommet, Box, Meter, Stack, Text } from "grommet";

const MacroMeter = () => {
  const total = 100;
  const [active, setActive] = useState();
  const [label, setLabel] = useState();

  return (
    <Grommet>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[
              {
                value: 70,
                onHover: over => {
                  setActive(over ? 70 : 0);
                  setLabel(over ? "fat" : undefined);
                }
              },
              {
                value: 28,
                onHover: over => {
                  setActive(over ? 28 : 0);
                  setLabel(over ? "protein" : undefined);
                }
              }
              ,{
                value: 2,
                onHover: over => {
                  setActive(over ? 2 : 0);
                  setLabel(over ? "carb" : undefined);
                }
              }
            ]}
            max={100}
            size="small"
            thickness="medium"
          />
          <Box align="center">
            <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
              <Text size="xxlarge" weight="bold">
                {active || total}
              </Text>
              <Text>g</Text>
            </Box>
            <Text>{label || "total"}</Text>
          </Box>
        </Stack>
      </Box>
    </Grommet>
  );
};

export default MacroMeter;