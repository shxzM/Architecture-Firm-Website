import React from 'react'
import AdminHeader from '../components/AdminHeader'
import ClientList from '../components/ClientList'

export default function AdminClients() {
  return (
    <div>
        <AdminHeader/>
        <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>
        Your Clients
      </h2>
        <ClientList/>
    </div>
  )
}
