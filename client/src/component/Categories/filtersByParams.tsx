import { Attribute } from "../interfaces/Product";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const FilterByParams = ({ products }) => {
  const newObject: Record<string, string[]> = products?.reduce(
    (acc, product) => {
      const productAttributes: Attribute[] = product.attribute;

      productAttributes.forEach(({ Description, Details }) => {
        if (!acc[Description]) {
          acc[Description] = [];
        }
        if (!acc[Description].includes(Details)) {
          acc[Description].push(Details);
        }
        acc[Description].sort((a, b) => {
          if (typeof a === "number" && typeof b === "number") {
            return a - b;
          }
          return a.toString().localeCompare(b.toString());
        });
      });

      return acc;
    },
    {}
  );

  return (
    <div>
      {Object.entries(newObject).map(([title, values]) => (
        <Box sx={{ m: 1, minWidth: 120, maxWidth: 200, display: "flex" }}>
          <FormControl sx={{ display: "online", minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {values.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ))}
    </div>
  );
};

export default FilterByParams;