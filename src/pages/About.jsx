import React from 'react'
import { useSelector } from 'react-redux'
import cl from '../components/styles/about/about.module.css'

function About() {
    const mode = useSelector(state => state.mode.dark)
  return (
    <div className={mode ? cl.about + " " + cl.dark : cl.about}>
        <h3>О работе</h3>
        <p>Как frontend-разработчик, я фокусируюсь на визуальном качестве сайта, адаптивности на любых устройствах и анимациях. <br/> 
        Этот проект призван продемонстрировать примеры моих навыков в React, Redux и JS. <br /> 
            Данная работа была выполнено по <a href="https://www.figma.com/@oter">макету</a>. <br /> Пожалуйста, используйте ссылки ниже, чтобы связаться со мной.</p>
        <div className={cl.social}>
            <a href="https://discord.com/users/239443966586519554">
              <i className='bx bxl-discord-alt' ></i>
            </a>
            <a href="https://t.me/Tcka4">
              <i className='bx bxl-telegram' ></i>
            </a>
            <a href="https://github.com/AndreiTka4iov">
              <i className='bx bxl-github' ></i>
            </a>
            <a href="https://www.linkedin.com/in/андрей-ткачев-72734626b/">
              <i className='bx bxl-linkedin' ></i>
            </a>
        </div>
        <h3>Другие работы</h3>
        <p>Портфолио: <a href="https://andreitka4iov.github.io/portfolio/">ссылка</a></p>
        <p>Авторизация: <a href="https://andreitka4iov.github.io/registration/">ссылка</a></p>
        <p>Работа с данными: <a href="https://andreitka4iov.github.io/posts/">ссылка</a></p>
    </div>
  )
}

export default About