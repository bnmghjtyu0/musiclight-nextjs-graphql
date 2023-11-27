import { useGetPortfolio } from "@/apollo/actions";
import withApollo from "@/core/hoc/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

interface Props {
  query: {
    id: string;
  };
}

const PortfolioDetail: any = ({ query }: Props) => {
  const { data } = useGetPortfolio(query.id);
  const [age, setAge] = useState<string>("10");

  const portfolio = (data && data.portfolio) || {};

  const handleChange = (event: SelectChangeEvent) => {
    const age = event.target.value;
    setAge(age);
  };

  const onSubmit = (d) => {
    console.log(d);
  };

  return (
    <>
      <h1>Iam detail page with ID: {query.id} </h1>
      <p>title: {portfolio.title}</p>
      <form onSubmit={onSubmit}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <button type="submit">送出</button>
      </form>
    </>
  );
};

PortfolioDetail.getInitialProps = async ({ query }: Props) => {
  return { query };
};

export default withApollo(PortfolioDetail, { getDataFromTree });
