import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'  // usar parametros en la url
import axios from 'axios'
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DarkFooter from 'components/Footers/DarkFooter';

import {
  Container,
  Row,
  Col,
} from "reactstrap";

function Mermelada() {
  let {id} = useParams()
  const [mermeladaObject, setMermeladaObject] = useState({})
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [cantidad, setCantidad] = useState("")
  const url = window.location.pathname.split("/")
  const len = url.length
  const sabor = url[len - 1]
  useEffect( ()=> {
    axios.get(`http://localhost:3001/mermeladas/byId/${id}`).then((response)=>{
      setMermeladaObject(response.data)
    })
    axios.get(`http://localhost:3001/comments/${sabor}`).then((response)=>{
      setComments(response.data)
    })
  }, [])

  const addComment = () => {
    axios.post("http://localhost:3001/comments", {commentBody: newComment, sabor: sabor}, {
      headers: {
        accessToken: sessionStorage.getItem("accessToken")
      }
    }
    ).then((response)=>{
      console.log(response.data)
      if (response.data.err) {
        alert("User doesn't logged")
      } else {
        const commentToAdded = {commentBody: newComment, username: response.data.username}
        setComments([...comments, commentToAdded]) // agrego el nuevo comentario a la lista de comentarios para que se renderizen todos los comentarios
        setNewComment("") // Limpio el input del nuevo comentario
      }
    })
  }
  return (
    <div className="postPage">
    <IndexNavbar color='1' />
    <div className="wrapper">
      <div className="section section-about-us">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">{mermeladaObject.sabor}</h2>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
            <Col md="6">
                <div className="image-container image-left">
                  <p className="blockquote blockquote-info">
                    "Invierte en productos naturales, ahorra en medicinas." <br></br>
                    <br></br>
                    <small>-B' Natural</small>
                  </p>
                </div>
                <div className="image-container">
                </div>
              </Col>
              <Col md="5">
               <div
                  className="image-container image-right"
                  style={{
                    backgroundImage:
                      "url(" + `${mermeladaObject.ruta}` + ")",
                  }}
                ></div>
                <h3>
                  Detalles
                </h3>
                <p>
                  {mermeladaObject.descripcion}
                </p>
                <label>
                Cantidad:
                <select value={cantidad} onChange={(event) => {setCantidad(event.target.value)}}>           
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">Mas de 6</option>
                </select>
                </label>
                <button>
                  <a href="/Carrito">
                  Agregar al carrito
                  </a>
                </button>
              </Col>
            </Row>
          </div>
        </Container>  
      </div>
      <div className="rightSide">
      <div className="addCommentContainer">
        <input type="text" value={newComment} placeholder="Comment..." autoComplete="off" onChange={(event)=>{setNewComment(event.target.value)}} />
        <button type="submit" onClick={addComment}> Add comment</button>
      </div>
      <div className="listOfComments">
        {comments.map( (value, key) => {
          return <div className="comment">
              {value.commentBody}
              <label> Username: {value.username}</label>
            </div>
        })}
      </div>
    </div>
      <DarkFooter />
    </div>

    </div>
  )
}

export default Mermelada