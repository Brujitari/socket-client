import { useState, useEffect, useRef } from 'react'
import socket from './Socket'
import Socket from './Socket'

const Chat = ({ name }) => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.emit('connected', name)
    }, [name])

    const submit = e => {
        e.preventDefault()
        socket.emit('message', name, message)
    }

    return (
        <from onSubmit={submit}>
            <label htmlFor=''>Write your message</label>
            <textarea name='' id='' cols='30' rows='10' value={message} onChange={e => setMessage}>
            </textarea>
            <button>Send</button>
        </from>
    )
}