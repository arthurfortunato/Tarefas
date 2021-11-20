import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar'
import { api } from '../../services/api';

import styles from './styles.module.scss';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}


export function UsersList() {

  const [userList, setUserList] = useState<User[]>([])

  useEffect(() => {
    api.get<User[]>('/users').then(response => {
      setUserList(response.data)
    })
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => {

            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.admin ? "Admin" : ""}</td>
              </tr>
            )
          })}
        </tbody>
      </table>


    </div>
  )
}