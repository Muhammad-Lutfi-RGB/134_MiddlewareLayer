
import express from 'express'
import pg from 'pg'
import joi from 'joi'

const app = express()
port = 3000
const { Pool } = pg

const pool = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: '', //pakai password
    port: 5432,
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

