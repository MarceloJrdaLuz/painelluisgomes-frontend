import React from "react";

import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";

export default function Upload (props) {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Clique ou arraste os arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };
  
  const { onUpload } = props;

  return (
    <Dropzone accept={"image/*" && "application/pdf"} onDropAccepted={onUpload} y
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}
