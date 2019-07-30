import TextField from "@material-ui/core/TextField";
import { Inputporps } from "./Interfaces";
const Input = (props: Inputporps) => {
  const { value, handleChange, label, className } = props;
  return (
    <TextField
      label={label}
      className={className}
      value={value}
      onChange={handleChange(label)}
      margin="normal"
      variant="outlined"
    />
  );
};

export default Input;
