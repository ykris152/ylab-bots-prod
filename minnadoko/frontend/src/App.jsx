import { useState } from 'react'
import { insertMember, deleteMember, updateMember, getMembers } from './db/db.js'

//magic things i don't know
import Table from './components/Table.jsx';
import Navbar from './components/navbar.jsx';
import NewMemberForm from './components/NewMemberForm.jsx';
import DeleteMemberForm from './components/DeleteMemberForm.jsx';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './App.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <Table />
    </>
  )
}

function EditMemberPage() {
  return (
    <>
      <Navbar />
      <div className="row">
        <NewMemberForm />
        <DeleteMemberForm />
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/editmember",
    element: <EditMemberPage />
  }
]);

export default function App() {
  return (
    <>
      <meta httpEquiv="refresh" content="60" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <RouterProvider router={router} />
    </>
  );
}