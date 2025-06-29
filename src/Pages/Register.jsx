import React, { useContext, useState } from 'react'
import AuthContext from '../Context/AuthContext';

const Register = () => {
    const {register} = useContext(AuthContext)

    const [formData , setFormData] = useState({
        name : "",
        email : "",
        password: ""
    })

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e)=>{
        setFormData((prev)=>({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
          await register(formData)
        } catch (err) {
            setError('Regsitration Failed ') 
        } finally {
            setLoading(false)
        }
    }
  return (
<div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  )
}

export default Register