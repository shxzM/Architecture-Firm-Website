import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import ClientList from '../components/ClientList'
import { addDoc } from 'firebase/firestore';
import { ClientsCollectionRef } from '../config/firebase';

export default function AdminClients() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: ''
  });
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(ClientsCollectionRef, {
        First_Name: form.firstName,
        Last_Name: form.lastName,
        Email: form.email,
        Phone: form.phone,
        Location: form.location,
      });
      setForm({ firstName: '', lastName: '', email: '', phone: '', location: '' });
      setRefresh(r => !r); // trigger refresh
    } catch (err) {
      alert('Failed to add client.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AdminHeader/>

      <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>
        Your Clients
      </h2>
      <ClientList key={refresh} />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
        <form onSubmit={handleSubmit} style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          padding: 32,
          minWidth: 340,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          alignItems: 'stretch',
        }}>
          <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required style={{
            padding: '10px 14px', borderRadius: 6, border: '1px solid #ccc', fontSize: 16, outline: 'none', transition: 'border 0.2s',
          }} />
          <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required style={{
            padding: '10px 14px', borderRadius: 6, border: '1px solid #ccc', fontSize: 16, outline: 'none', transition: 'border 0.2s',
          }} />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{
            padding: '10px 14px', borderRadius: 6, border: '1px solid #ccc', fontSize: 16, outline: 'none', transition: 'border 0.2s',
          }} />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required style={{
            padding: '10px 14px', borderRadius: 6, border: '1px solid #ccc', fontSize: 16, outline: 'none', transition: 'border 0.2s',
          }} />
          <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required style={{
            padding: '10px 14px', borderRadius: 6, border: '1px solid #ccc', fontSize: 16, outline: 'none', transition: 'border 0.2s',
          }} />
          <button type="submit" disabled={loading} style={{
            background: '#1e88e5', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 0', fontSize: 17, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 2px 8px rgba(30,136,229,0.08)', transition: 'background 0.2s',
            opacity: loading ? 0.7 : 1
          }}>{loading ? 'Adding...' : 'Add Client'}</button>
        </form>
      </div>
     
    </div>
  )
}
