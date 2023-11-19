import { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setFilter } from "../../app/filterSlice";
import { Attribute } from "../interfaces/Product";
import Prices from "../interfaces/Price";
import Product from "../interfaces/Product";
import Filter from "../interfaces/Filter";

const Filters = ({ products }: { products: Product[] }) => {
  const dispatch = useAppDispatch();
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string | number | undefined>
  >({});

  const [value, setValue] = useState<string | number>("");

  const newObject: Record<string, (string | number)[]> = products?.reduce(
    (acc: Record<string, (string | number)[]>, product) => {
      const productAttributes: Attribute[] = product.attributes ? product.attributes : []
      productAttributes.forEach(({ key, value }) => {
        if (!acc[key]) {
          acc[key] = [];
        }
        if (!acc[key].includes(value)) {
          acc[key].push(value);
        }
        acc[key].sort((a, b) => {
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

  const { minPrice, maxPrice }: Prices = products?.reduce(
    (acc, product) => ({
      minPrice: Math.min(acc.minPrice, product.price),
      maxPrice: Math.max(acc.maxPrice, product.price),
    }),
    { minPrice: Infinity, maxPrice: -Infinity }
  ) ?? { minPrice: 0, maxPrice: 0 };
  const handleChangePrice = (value: number | number[]) => {
    setValue(typeof value === "number" ? value : 0);
    const updatedFilters = {
      ...selectedFilters,
      price: typeof value === "number" ? value : 0,
    };
    setSelectedFilters(updatedFilters);
    dispatch(setFilter(updatedFilters));
  };
  const log = useAppSelector((state) => state.filter.filter);
  useEffect(() => {
    console.log(log);
  }, [log]);
  const handleChange = (value: string | number, title: string) => {
    const updatedFilters: Filter = { ...selectedFilters, [title]: value };
    for (const key in updatedFilters) {
      if (updatedFilters[key] === undefined) {
        delete updatedFilters[key];
      }
    }
    setSelectedFilters(updatedFilters);
    dispatch(setFilter(updatedFilters));
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: '20vw'}}>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Default"
          value={typeof value === "number" ? value : maxPrice}
          min={minPrice}
          max={maxPrice}
          onChange={(_e, value) => handleChangePrice(value)}
          aria-labelledby="dynamic-range-slider"
          valueLabelDisplay="auto"
        />
      </Box>
      {Object.entries(newObject).map(([title, values]) => (
        <Box
          sx={{ m: 1, minWidth: 120, maxWidth: 200, display: "flex" }}
          key={title}
        >
          <FormControl sx={{ display: "online", minWidth: 200 }}>
            <InputLabel id={`demo-simple-select-label-${title}`}>
              {title}
            </InputLabel>
            <Select
              labelId={`demo-simple-select-label-${title}`}
              id={`demo-simple-select-${title}`}
              value={selectedFilters[title] || ""}
              label={title}
              onChange={(e) => handleChange(e.target.value, title)}
            >
              <MenuItem value={undefined}>
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

export default Filters;