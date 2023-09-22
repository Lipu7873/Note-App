import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {RiDeleteBin2Line} from 'react-icons/ri'
import useCreateDate from "./UseCreateDate";

const EditNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreateDate();
  const  navigate = useNavigate();

  const handelForm = (e) => {
    e.preventDefault();

    if(title && details){
      const newNote = {...note, title, details, date}

      const newNotes = notes.map(item => {
        if(item.id == id){
          item = newNote
        }
        return item;
      })

      setNotes(newNotes)
    }

    //redirect to 
    navigate('/');
  }

  const handleDelete = () =>{
    if(window.confirm('Are you sure you want to delete?')){
      const newNotes = notes.filter((item) => item.id != id);

      setNotes(newNotes);
      navigate("/");
    }
  }


  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button onClick={handelForm} className="btn lg primary">
          Save
        </button>
        <button onClick={handleDelete} className="btn danger">
          <RiDeleteBin2Line />
        </button>
      </header>
      <form action="" className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
