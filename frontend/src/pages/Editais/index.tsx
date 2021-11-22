import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { api } from '../../services/api';

import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi'

import styles from './styles.module.scss'

type Editais = {
  id: string;
  processo: string;
  ano: string;
  edital: string;
}

export function Edital() {
  const [processo, setProcesso] = useState('');
  const [ano, setAno] = useState('');
  const [edital, setEdital] = useState('');

  const [editaisList, setEditaisList] = useState<Editais[]>([])

  async function getEditais(processo: string, ano: string, edital: string) {
    await api.post('/editais', {
      processo: processo,
      ano: ano,
      edital: edital
    }).then(response => {
      const list = getUpdateList(response.data, true)
      setEditaisList(list)
    })
  }

  function getUpdateList(edital: Editais, add = true) {
    const list = editaisList.filter(e => e.id !== edital.id)
    if (add) list.unshift(edital);
    return list;
  }

  async function salvar() {
    await getEditais(
      processo,
      ano,
      edital
    )
    setProcesso('')
    setAno('')
    setEdital('')
  }

  function cancelar() {
    setProcesso('')
    setAno('')
    setEdital('')
  }

  async function onDelete(edital: Editais) {
    await api.delete(`/editais/${edital.id}`).then(response => {
      const list = getUpdateList(edital, false)
      setEditaisList(list)
    })
  }

  function edit(edital: Editais) {
    setEdital(edital.edital)
    setAno(edital.ano)
    setProcesso(edital.processo)
  }

  useEffect(() => {
    api.get<Editais[]>('/editais').then(response => {
      setEditaisList(response.data)
    })
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <GiBookCover size="45px" />
        <h1>Crie, Leia, Atualize ou Exclua os Editais</h1>
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.criarEdital}>
        <form className={styles.form}>
          <div>
            <label>Nº Processo</label>
            <input
              type="text"
              name="processo"
              placeholder="Digite o número do processo..."
              value={processo}
              onChange={(event) => { setProcesso(event.target.value) }}
            />
          </div>

          <div>
            <label>Ano</label>
            <input
              type="text"
              name="ano"
              placeholder="Digite o ano do Edital..."
              value={ano}
              onChange={(event) => { setAno(event.target.value) }}
            />
          </div>

          <div>
            <label>Edital</label>
            <input
              type="text"
              name="edital"
              placeholder="Digite o nome do Edital..."
              value={edital}
              onChange={(event) => { setEdital(event.target.value) }}
            />
          </div>
        </form>
        <hr />
        <div className={styles.submit}>
          <div className={styles.salvar}>
            <button type="submit" onClick={salvar}>Salvar</button>
          </div>
          <div className={styles.cancelar}>
            <button type="submit" onClick={cancelar}>Cancelar</button>
          </div>
        </div>
        <div className={styles.table}>
          <table >
            <thead>
              <tr>
                <th>Processo</th>
                <th>Ano</th>
                <th>Edital</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {editaisList.map(edital => {

                return (
                  <tr key={edital.id}>
                    <td>{edital.processo}</td>
                    <td>{edital.ano}</td>
                    <td>{edital.edital}</td>
                    <td>
                      <button className={styles.edit}><FaEdit size="15px" onClick={() => edit(edital)} /></button>
                      <button className={styles.trash} onClick={() => onDelete(edital)}> <FaTrashAlt size="15px" /> </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}