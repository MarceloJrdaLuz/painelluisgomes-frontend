import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #006d77;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  border: 1.5px dashed #ddd;
  border-radius: 10px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#006d77",
  error: "#e57878",
  success: "#5bc0be"
};

export const UploadMessage = styled.p`
  display: flex;
  font-weight: 600;
  border-radius: 10px;
  background-color: #ccc;
  color: ${props => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  :hover{
    color: black;
  }
`;
