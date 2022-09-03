import React, { useEffect, useState } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import api from "./services/api";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";

import Upload from "./components/Upload";
import FileList from "./components/FileList";
import TituloPage from "./components/TituloPage";
import ConfirmDelete from "./components/ConfirmDelete";

const App = () => {
  const [uploadedFile, setUploadedFile] = useState([])
  const [pdfShow, setPdfShow] = useState(false)
  const [item, setItem] = useState("")
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  const [itemDeleteName, setItemDeleteName] = useState("")
  const [itemDeteleId, setItemDeleteId] = useState("")
  // state = {
  //   uploadedFiles: [],
  //   pdfShow: false,
  //   item: '',
  //   showConfirmDelete: false,
  //   itemDeleteName: 'Padrao',
  //   itemDeleteId: '',
  // };


  useEffect(() => {
    getPosts()
    const uploadedFiles = updateFile
    return () => {
      uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview))
    }
  }, [])

  console.log(uploadedFile)
  async function getPosts() {
    const response = await api.get("posts")

    response.data.map(file => setUploadedFile(prev => [...prev, {
      id: file._id,
      name: file.name,
      readableSize: filesize(file.size),
      preview: file.url,
      uploaded: true,
      url: file.url
    }]))
  }

  const handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    setUploadedFile(...uploadedFile, uploadedFiles)


    // this.setState({
    //   uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    // });

    uploadedFiles.forEach(processUpload);
  };

  const updateFile = (id, data) => {
    uploadedFile.map(uploadedFile => {
      return id === uploadedFile.id
        ? { ...uploadedFile, ...data }
        : uploadedFile
    })

    // this.setState({
    //   uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
    //     return id === uploadedFile.id
    //       ? { ...uploadedFile, ...data }
    //       : uploadedFile;
    //   })
    // });
  };

  const processUpload = uploadedFile => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("posts", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  const handleDelete = async id => {
    await api.delete(`posts/${id}`);

    setUploadedFile(uploadedFile.filter(file => file.id !== id))

    // this.setState({
    //   uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    // });
  };

  const confirmDelete = (id, name) => {
    setItemDeleteName(name)
    setItemDeleteId(id)
    setShowConfirmDelete(true)
    // this.setState({
    //   itemDeleteName: name,
    //   itemDeleteId: id,
    //   showConfirmDelete: true
    // })
  }

  const notConfirmeDelete = () => {
    setShowConfirmDelete(false)
    // this.setState({
    //   showConfirmDelete: false
    // })
  }


  const handleShowConfirmDelete = () => {
    handleDelete(itemDeteleId)
    setShowConfirmDelete(!showConfirmDelete)

    // this.handleDelete(this.state.itemDeleteId)
    // this.setState({ showConfirmDelete: !this.state.showConfirmDelete })
  }

  // UNSAFE_componentWillUnmount() {
  //   this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  // };


  const handlePdfShow = (i) => {
    setPdfShow(i === "false" ? false : true)
    setItem(i)
    // this.setState({
    //   pdfShow: i === 'false' ? false : true,
    //   item: i,
    // })
  }

  // useEffect(() => {
  //   const uploadedFiles = uploadedFile
    
  //   return () => {
  //     uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview))
  //   }
  // }, [])



  return (
    <Container>
      <TituloPage pdfShow={pdfShow} item={item} onChangePdfShow={handlePdfShow} />
      <Content>
        <Upload onUpload={handleUpload} />
        {!!uploadedFile.length && (
          <FileList files={uploadedFile} onDelete={confirmDelete} onClick={handlePdfShow} />
        )}
      </Content>
      {showConfirmDelete && <ConfirmDelete uploadFileName={itemDeleteName} onChangeShowTrue={handleShowConfirmDelete} onChangeShowFalse={notConfirmeDelete} />}
      <GlobalStyle />
    </Container>
  );
}

export default App;
