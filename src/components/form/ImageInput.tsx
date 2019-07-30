import React from "react";
import { TextField } from "@material-ui/core";

const ImageInput = (props: any) => {
  const { handleImageChange } = props;
  //   const handleImageChange = (e: any) => {
  //     e.preventDefault();

  //     let reader = new FileReader();
  //     let file = e.target.files[0];

  //     reader.onloadend = () => {
  //       this.setState({
  //         file: file,
  //         imagePreviewUrl: reader.result
  //       });
  //     };

  //     reader.readAsDataURL(file);
  //   };
  return (
    <TextField
      //   label="Picture"
      //   className={classes.textField}
      //   value={experienceData.position}
      onChange={handleImageChange}
      type="file"
      margin="normal"
      variant="outlined"
    />
  );
};

export default ImageInput;
