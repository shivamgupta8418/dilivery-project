import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Booking = () => {
  return (
    <div className="mt-5 mb-5">
        <FormComponent />
    </div>
  )
}

export default Booking



const FormComponent = () => {
    const navigate = useNavigate();
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   alert('Booking successful!');
   navigate('/home')
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={formStyle}>
        <div className="form-group">
          <label htmlFor="source" style={labelcss}>Source:</label>
          <input
            type="text"
            className="form-control"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={extracss}>
          <label htmlFor="destination" style={labelcss}>Destination:</label>
          <input
            type="text"
            className="form-control"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={extracss}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={extracss}>
          <label htmlFor="time" style={labelcss}>Time:</label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary"  style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

const formStyle = {// Y
  backgroundColor: '#FFD700', 
  padding: '80px',
  borderRadius: '10px',
  width:'70%',
  margin:'auto'
};

const extracss={
  marginTop:'20px'
}
const labelcss={
    padding:'10px'
}
const buttonStyle = {
    backgroundColor: '#FFA500', 
    fontSize: '1.2em', 
    borderBox: 'none',
    width:"30%",
    border: 'none',
    marginTop: '5%',
  };