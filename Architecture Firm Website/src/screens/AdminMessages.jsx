import React from 'react'
import AdminHeader from '../components/AdminHeader'
import MessagesList from '../components/MessagesList'

export default function AdminMessages() {
  return (
    <div>
        <AdminHeader/>
        <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>
        Your Messages
      </h2>
        <MessagesList/>
    </div>
  )
}
